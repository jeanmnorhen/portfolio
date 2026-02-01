# Technical Architecture Diagrams

## Package 1: Basic Landing Page

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT BROWSER                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTPS Request
                         │
                    ┌────▼─────┐
                    │  Vercel  │
                    │   Edge   │ ← 100+ Global Locations
                    │ Network  │
                    └────┬─────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   ┌────▼────┐     ┌────▼────┐     ┌────▼────┐
   │  Cache  │     │  Cache  │     │  Cache  │
   │  (São   │     │  (New   │     │ (Tokyo) │
   │  Paulo) │     │  York)  │     │         │
   └─────────┘     └─────────┘     └─────────┘
        │                │                │
        └────────────────┼────────────────┘
                         │
                    ┌────▼─────┐
                    │ Next.js  │
                    │   ISR    │ ← Incremental Static Regeneration
                    └────┬─────┘
                         │
                    ┌────▼─────┐
                    │   CMS    │ ← Optional: Supabase for content
                    │(Supabase)│
                    └──────────┘
```

### Request Flow
1. **User visits site** → Routed to nearest edge location
2. **Edge checks cache** → If fresh, serve immediately (<50ms)
3. **If stale** → Regenerate in background (ISR)
4. **Serve stale content** → User sees instant page
5. **Next request** → Gets fresh content

### ISR Configuration
```typescript
// app/page.tsx
export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  const data = await fetch('https://api.example.com/content', {
    next: { revalidate: 3600 }
  });
  
  return <div>{/* Render content */}</div>;
}
```

---

## Package 2: Shopify Headless + Supabase

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT BROWSER                          │
└────┬────────────────────────────────────┬───────────────────┘
     │                                    │
     │ Browse Products                    │ Checkout
     │                                    │
┌────▼────────────────────────────┐  ┌───▼──────────────┐
│        Next.js Frontend         │  │  Shopify Hosted  │
│         (Vercel Edge)           │  │     Checkout     │
└────┬────────────────────────────┘  └──────────────────┘
     │                                         │
     │                                         │
     ├─────────────┬──────────────┐           │
     │             │              │           │
┌────▼─────┐ ┌────▼──────┐ ┌────▼────┐      │
│ Shopify  │ │ Supabase  │ │ Vercel  │      │
│Storefront│ │PostgreSQL │ │  Edge   │      │
│   API    │ │           │ │Functions│      │
└────┬─────┘ └────┬──────┘ └─────────┘      │
     │            │                          │
     │            │                          │
┌────▼────────────▼──────────────────────────▼───┐
│           Shopify Admin Backend               │
│  (Inventory, Orders, Customer Management)     │
└───────────────────────────────────────────────┘
```

### Data Flow Examples

#### Product Listing
```typescript
// 1. Fetch products from Shopify
const products = await shopifyClient.product.fetchAll();

// 2. Enrich with Supabase data (views, favorites)
const enrichedProducts = await Promise.all(
  products.map(async (product) => {
    const { data } = await supabase
      .from('product_stats')
      .select('views, favorites')
      .eq('shopify_id', product.id)
      .single();
    
    return { ...product, stats: data };
  })
);
```

#### Wishlist (Supabase Only)
```typescript
// Add to wishlist (Supabase)
const { data } = await supabase
  .from('wishlists')
  .insert({
    user_id: user.id,
    product_id: productId,
    shopify_product_id: shopifyId
  });
```

#### Checkout (Shopify)
```typescript
// Create checkout (Shopify)
const checkout = await shopifyClient.checkout.create({
  lineItems: cartItems
});

// Redirect to Shopify hosted checkout
window.location.href = checkout.webUrl;
```

### Database Schema (Supabase)

```sql
-- Users table (extends Shopify customer data)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  shopify_customer_id BIGINT UNIQUE,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Wishlists
CREATE TABLE wishlists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  shopify_product_id BIGINT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, shopify_product_id)
);

-- Product stats (custom analytics)
CREATE TABLE product_stats (
  shopify_id BIGINT PRIMARY KEY,
  views INTEGER DEFAULT 0,
  favorites INTEGER DEFAULT 0,
  last_viewed TIMESTAMP
);

-- Row Level Security
ALTER TABLE wishlists ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own wishlist"
ON wishlists FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can add to own wishlist"
ON wishlists FOR INSERT
WITH CHECK (auth.uid() = user_id);
```

---

## Package 3: MedusaJS + Supabase

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT BROWSER                          │
└────┬────────────────────────────────────┬───────────────────┘
     │                                    │
     │ Storefront                         │ Admin Dashboard
     │                                    │
┌────▼────────────────────┐      ┌───────▼──────────────┐
│   Next.js Storefront    │      │   Medusa Admin UI    │
│    (Vercel Edge)        │      │   (Self-hosted)      │
└────┬────────────────────┘      └───────┬──────────────┘
     │                                    │
     │                                    │
     └────────────────┬───────────────────┘
                      │
                 ┌────▼─────┐
                 │ MedusaJS │
                 │  Server  │ ← Node.js Backend
                 │(Railway) │
                 └────┬─────┘
                      │
          ┌───────────┼───────────┐
          │           │           │
     ┌────▼────┐ ┌───▼────┐ ┌───▼─────┐
     │Supabase │ │ Redis  │ │ Stripe  │
     │PostgreSQL│ │ Cache  │ │Payments │
     │  + Auth │ │        │ │         │
     └─────────┘ └────────┘ └─────────┘
```

### MedusaJS Core Modules

```typescript
// medusa-config.js
module.exports = {
  projectConfig: {
    database_url: process.env.SUPABASE_DATABASE_URL,
    redis_url: process.env.REDIS_URL,
    store_cors: process.env.STORE_CORS,
    admin_cors: process.env.ADMIN_CORS,
  },
  plugins: [
    {
      resolve: '@medusajs/admin',
      options: {
        // Admin dashboard
      },
    },
    {
      resolve: 'medusa-payment-stripe',
      options: {
        api_key: process.env.STRIPE_API_KEY,
      },
    },
    {
      resolve: 'medusa-fulfillment-manual',
      // Manual order fulfillment
    },
  ],
};
```

### Supabase Integration

```typescript
// Use Supabase for PostgreSQL
// DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres

// Extend Medusa with custom tables
import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCustomerPreferences1234567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE customer_preferences (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        customer_id VARCHAR REFERENCES customer(id),
        newsletter BOOLEAN DEFAULT false,
        sms_notifications BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE customer_preferences;`);
  }
}
```

### Authentication Flow

```typescript
// Storefront: Authenticate with Supabase
const { data: { session } } = await supabase.auth.signInWithPassword({
  email,
  password
});

// Get Medusa customer
const medusaCustomer = await medusaClient.customers.retrieve({
  headers: {
    Authorization: `Bearer ${session.access_token}`
  }
});

// Sync customer data
await supabase
  .from('customer_sync')
  .upsert({
    supabase_user_id: session.user.id,
    medusa_customer_id: medusaCustomer.customer.id
  });
```

### Deployment Architecture (Railway)

```yaml
# railway.json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm run start",
    "healthcheckPath": "/health",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

```
Railway Project Structure:
├── medusa-backend (Node.js service)
│   ├── Environment Variables:
│   │   ├── DATABASE_URL (Supabase)
│   │   ├── REDIS_URL (Railway Redis)
│   │   ├── STRIPE_API_KEY
│   │   └── JWT_SECRET
│   └── Port: 9000
│
├── medusa-storefront (Next.js)
│   ├── Environment Variables:
│   │   ├── NEXT_PUBLIC_MEDUSA_URL
│   │   └── NEXT_PUBLIC_SUPABASE_URL
│   └── Port: 3000
│
└── Redis (Railway Redis Add-on)
```

---

## Security Architecture

### SSL/TLS Encryption
```
Client ──[HTTPS]──> Vercel Edge ──[HTTPS]──> Origin Server
         (TLS 1.3)              (TLS 1.3)
```

### Authentication Flow (Supabase)
```
┌──────────┐                                    ┌──────────┐
│  Client  │                                    │ Supabase │
└────┬─────┘                                    └────┬─────┘
     │                                               │
     │ 1. signInWithPassword(email, password)       │
     ├──────────────────────────────────────────────>│
     │                                               │
     │ 2. Verify credentials                         │
     │    Generate JWT                               │
     │                                               │
     │ 3. Return { access_token, refresh_token }     │
     │<──────────────────────────────────────────────┤
     │                                               │
     │ 4. API Request with Authorization header      │
     ├──────────────────────────────────────────────>│
     │    Authorization: Bearer <access_token>       │
     │                                               │
     │ 5. Validate JWT                               │
     │    Check Row Level Security policies          │
     │                                               │
     │ 6. Return authorized data                     │
     │<──────────────────────────────────────────────┤
     │                                               │
```

### Row Level Security Example
```sql
-- Only allow users to see their own orders
CREATE POLICY "Users can view own orders"
ON orders FOR SELECT
USING (auth.uid() = user_id);

-- Only allow admins to update order status
CREATE POLICY "Admins can update orders"
ON orders FOR UPDATE
USING (
  auth.jwt() ->> 'role' = 'admin'
);

-- Allow users to insert their own orders
CREATE POLICY "Users can create own orders"
ON orders FOR INSERT
WITH CHECK (auth.uid() = user_id);
```

---

## Performance Optimization

### Caching Strategy

```
┌─────────────────────────────────────────────────┐
│              Caching Layers                     │
├─────────────────────────────────────────────────┤
│                                                 │
│  1. Browser Cache (Service Worker)              │
│     └─> Static assets (images, CSS, JS)        │
│                                                 │
│  2. CDN Cache (Vercel Edge)                     │
│     └─> HTML pages, API responses              │
│                                                 │
│  3. Application Cache (Redis)                   │
│     └─> Database queries, session data         │
│                                                 │
│  4. Database Cache (Supabase)                   │
│     └─> Query results, connection pooling      │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Next.js Caching
```typescript
// Static Generation (Build time)
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// ISR (Revalidate every hour)
export const revalidate = 3600;

// Dynamic with cache
export async function getProduct(id: string) {
  const product = await fetch(`https://api.example.com/products/${id}`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  return product.json();
}

// On-demand revalidation
import { revalidatePath } from 'next/cache';

export async function updateProduct(id: string) {
  // Update product in database
  await db.products.update(id, data);
  
  // Revalidate the product page
  revalidatePath(`/products/${id}`);
}
```

---

## Monitoring & Analytics

### Vercel Analytics
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Custom Event Tracking
```typescript
// Track custom events
import { track } from '@vercel/analytics';

// Product view
track('product_view', {
  product_id: product.id,
  product_name: product.name,
  price: product.price,
});

// Add to cart
track('add_to_cart', {
  product_id: product.id,
  quantity: 1,
});

// Purchase
track('purchase', {
  order_id: order.id,
  total: order.total,
  items: order.items.length,
});
```

### Supabase Logging
```sql
-- Create audit log table
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL,
  table_name TEXT NOT NULL,
  record_id TEXT,
  old_data JSONB,
  new_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Trigger function to log changes
CREATE OR REPLACE FUNCTION log_changes()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO audit_logs (user_id, action, table_name, record_id, old_data, new_data)
  VALUES (
    auth.uid(),
    TG_OP,
    TG_TABLE_NAME,
    NEW.id::TEXT,
    row_to_json(OLD),
    row_to_json(NEW)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to orders table
CREATE TRIGGER orders_audit
AFTER INSERT OR UPDATE OR DELETE ON orders
FOR EACH ROW EXECUTE FUNCTION log_changes();
```

---

## Disaster Recovery

### Backup Strategy

```
┌─────────────────────────────────────────────────┐
│              Backup Layers                      │
├─────────────────────────────────────────────────┤
│                                                 │
│  1. Supabase Automatic Backups                  │
│     └─> Daily snapshots (7-day retention)      │
│                                                 │
│  2. Point-in-Time Recovery (PITR)               │
│     └─> Restore to any second (Pro plan)       │
│                                                 │
│  3. Git Version Control                         │
│     └─> Code + schema migrations               │
│                                                 │
│  4. Vercel Deployment History                   │
│     └─> Instant rollback to previous deploy    │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Recovery Procedures

**Database Corruption:**
```bash
# 1. Restore from Supabase backup
supabase db restore --backup-id <backup-id>

# 2. Verify data integrity
psql $DATABASE_URL -c "SELECT COUNT(*) FROM orders;"

# 3. Revalidate Next.js cache
curl -X POST https://yoursite.com/api/revalidate?secret=<token>
```

**Code Deployment Issue:**
```bash
# 1. Rollback Vercel deployment
vercel rollback

# 2. Or redeploy previous commit
git revert HEAD
git push origin main
```

---

## Scalability Considerations

### Horizontal Scaling
```
                    ┌──────────────┐
                    │ Load Balancer│
                    └──────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼────┐       ┌────▼────┐       ┌────▼────┐
   │ Server 1│       │ Server 2│       │ Server 3│
   │(Railway)│       │(Railway)│       │(Railway)│
   └────┬────┘       └────┬────┘       └────┬────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    ┌──────▼───────┐
                    │   Supabase   │
                    │  PostgreSQL  │
                    │ (Connection  │
                    │   Pooling)   │
                    └──────────────┘
```

### Database Scaling (Supabase)
- **Free Tier**: 500MB, 2 CPU cores
- **Pro Tier**: Unlimited, 8 CPU cores, connection pooling
- **Read Replicas**: Distribute read traffic
- **Connection Pooling**: PgBouncer built-in

### CDN Scaling (Vercel)
- **Automatic**: Scales to millions of requests
- **Edge Functions**: Run code closer to users
- **Image Optimization**: Automatic WebP conversion

---

**Last Updated**: January 31, 2026
**Version**: 1.0

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main>
      {/* Hero Section */}
      <section className="container section-padding" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(59, 130, 246, 0.1)',
            color: 'var(--accent-primary)',
            borderRadius: '50px',
            marginBottom: '24px',
            fontWeight: 600,
            fontSize: '14px'
          }}>
            {t('badge')}
          </div>
          <h1>
            {t('title_start')} <span style={{ color: 'var(--accent-primary)', WebkitTextFillColor: 'initial', background: 'none' }}>{t('title_highlight')}</span> {t('title_end')}
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '24px', maxWidth: '600px', color: 'var(--text-secondary)' }}>
            {t('description')}
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
            <a href="#contact" className="btn-primary">
              {t('cta_primary')}
            </a>
            <Link href="/work" className="btn-secondary">
              {t('cta_secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy / Value Prop */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>{t('features.performance.title')}</h3>
              <p>{t('features.performance.desc')}</p>
            </div>
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>{t('features.security.title')}</h3>
              <p>{t('features.security.desc')}</p>
            </div>
            <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>{t('features.scalability.title')}</h3>
              <p>{t('features.scalability.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="container section-padding">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2>{t('powered_by')}</h2>
          <p style={{ marginTop: '16px' }}>{t('powered_desc')}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.7 }}>
          {['Next.js', 'TypeScript', 'Supabase', 'Node.js', 'React', 'Vercel'].map((tech) => (
            <span key={tech} style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>{tech}</span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        borderTop: '1px solid var(--border-subtle)'
      }} id="contact">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>{t('ready.title')}</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
            {t('ready.desc')}
          </p>
          <a href="mailto:contact@example.com" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            {t('ready.button')}
          </a>
        </div>
      </section>
    </main>
  );
}

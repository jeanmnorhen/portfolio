import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from 'next-intl';

export default function WorkPage() {
    const t = useTranslations('Work');

    // Mapping project keys manually since they are objects in JSON
    const projectKeys = ['basic', 'standard', 'premium', 'p1', 'p2'];

    const projectsTags = {
        'basic': ["Next.js 15", "Vercel Edge", "Supabase", "ISR"],
        'standard': ["Shopify API", "Next.js", "Supabase", "Headless"],
        'premium': ["MedusaJS", "Supabase Auth", "Next.js", "Enterprise"],
        'p1': ["Tinybird", "Next.js", "Analytics", "PostgreSQL"],
        'p2': ["SaaS", "Fintech", "Node.js", "PostgreSQL"]
    };

    return (
        <main className="container section-padding">
            <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>{t('title')}</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                    {t('subtitle')}
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '40px'
            }}>
                {projectKeys.map((key) => (
                    <ProjectCard
                        key={key}
                        title={t(`projects.${key}.title`)}
                        description={t(`projects.${key}.desc`)}
                        tags={projectsTags[key as keyof typeof projectsTags]}
                        link="#"
                    />
                ))}
            </div>
        </main>
    );
}

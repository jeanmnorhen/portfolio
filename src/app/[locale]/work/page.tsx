import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from 'next-intl';

export default function WorkPage() {
    const t = useTranslations('Work');

    // Mapping project keys manually since they are objects in JSON
    const projectKeys = ['p1', 'p2', 'p3', 'p4'];

    // Static tags for now as they are technical terms
    const projectsTags = {
        'p1': ["Next.js", "TypeScript", "Tinybird", "Tremor"],
        'p2': ["React", "Node.js", "PostgreSQL", "AWS"],
        'p3': ["Next.js", "OpenAI API", "Tailwind", "Stripe"],
        'p4': ["Next.js", "Supabase", "ISR", "Google Maps API"]
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

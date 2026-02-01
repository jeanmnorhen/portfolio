import { useTranslations } from 'next-intl';

export const metadata = {
    title: "About Me | Senior Full Stack Developer",
    description: "My journey, experience, and technical philosophy.",
};

export default function AboutPage() {
    const t = useTranslations('About');
    const items = ['0', '1', '2'];

    return (
        <main className="container section-padding">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '32px' }}>{t('title')}</h1>

                <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)', marginBottom: '40px' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.8' }}>
                        {t.rich('p1', {
                            b: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.8' }}>
                        {t('p2')}
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        {t.rich('p3', {
                            b: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                    <div>
                        <h3 style={{ marginBottom: '16px', color: 'var(--accent-primary)' }}>{t('experience_title')}</h3>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                            {items.map(key => (
                                <li key={key} style={{ marginBottom: '8px' }}>{t(`experience_items.${key}`)}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ marginBottom: '16px', color: 'var(--accent-primary)' }}>{t('education_title')}</h3>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                            {items.map(key => (
                                <li key={key} style={{ marginBottom: '8px' }}>{t(`education_items.${key}`)}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </main>
    );
}

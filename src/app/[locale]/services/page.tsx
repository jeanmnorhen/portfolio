import { useTranslations } from 'next-intl';

export const metadata = {
    title: "Service Packages | Professional Web Development",
    description: "From ultra-fast landing pages to enterprise e-commerce solutions. Choose the package that fits your business stage.",
};

export default function ServicesPage() {
    const t = useTranslations('Services');

    const packages = [
        {
            key: 'basic',
            color: 'var(--accent-primary)',
            gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            icon: '⚡',
        },
        {
            key: 'intermediate',
            color: 'var(--accent-secondary)',
            gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
            icon: '🚀',
        },
        {
            key: 'premium',
            color: '#ec4899',
            gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%)',
            icon: '👑',
        },
    ];

    return (
        <main className="container section-padding">
            {/* Header */}
            <div style={{ maxWidth: '900px', marginBottom: '80px', textAlign: 'center', margin: '0 auto 80px' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    color: 'var(--accent-secondary)',
                    borderRadius: '50px',
                    marginBottom: '24px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    {t('badge')}
                </div>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    marginBottom: '24px',
                    lineHeight: '1.2'
                }}>
                    {t('title')}
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                }}>
                    {t('subtitle')}
                </p>
            </div>

            {/* Service Packages */}
            <div style={{
                display: 'grid',
                gap: '80px',
                marginBottom: '100px'
            }}>
                {packages.map((pkg, index) => {
                    const featureCount = pkg.key === 'basic' ? 8 : 9;
                    const features = Array.from({ length: featureCount }, (_, i) => i.toString());

                    return (
                        <div
                            key={pkg.key}
                            className="glass"
                            style={{
                                padding: '50px',
                                borderRadius: 'var(--radius-lg)',
                                background: pkg.gradient,
                                border: `1px solid ${pkg.color}20`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Package Number Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '30px',
                                right: '30px',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: `${pkg.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: pkg.color
                            }}>
                                {pkg.icon}
                            </div>

                            {/* Package Header */}
                            <div style={{ marginBottom: '32px' }}>
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: pkg.color,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    marginBottom: '12px'
                                }}>
                                    {t(`${pkg.key}.tagline`)}
                                </div>
                                <h2 style={{
                                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                                    marginBottom: '16px',
                                    color: pkg.color
                                }}>
                                    {t(`${pkg.key}.title`)}
                                </h2>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    marginBottom: '20px'
                                }}>
                                    {t(`${pkg.key}.price`)}
                                </div>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.7',
                                    maxWidth: '800px'
                                }}>
                                    {t(`${pkg.key}.desc`)}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div style={{
                                padding: '20px 24px',
                                background: 'rgba(0, 0, 0, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                marginBottom: '32px',
                                border: `1px solid ${pkg.color}10`
                            }}>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: pkg.color,
                                    fontWeight: 600,
                                    marginBottom: '8px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {t(`${pkg.key}.tech_title`)}
                                </div>
                                <div style={{
                                    fontSize: '1rem',
                                    color: 'var(--text-primary)',
                                    fontFamily: 'monospace',
                                    lineHeight: '1.6'
                                }}>
                                    {t(`${pkg.key}.tech_stack`)}
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div style={{ marginBottom: '32px' }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    marginBottom: '20px',
                                    color: 'var(--text-primary)',
                                    fontWeight: 600
                                }}>
                                    What&apos;s Included
                                </h3>
                                <ul style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '16px',
                                    listStyle: 'none',
                                    padding: 0
                                }}>
                                    {features.map((key) => (
                                        <li
                                            key={key}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '12px',
                                                padding: '12px',
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                borderRadius: 'var(--radius-sm)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <span style={{
                                                color: pkg.color,
                                                fontSize: '1.2rem',
                                                flexShrink: 0,
                                                marginTop: '2px'
                                            }}>
                                                ✓
                                            </span>
                                            <span style={{
                                                fontSize: '0.95rem',
                                                lineHeight: '1.5',
                                                color: 'var(--text-primary)'
                                            }}>
                                                {t(`${pkg.key}.features.${key}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Why This Solution */}
                            <div style={{
                                padding: '30px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: `4px solid ${pkg.color}`
                            }}>
                                <h4 style={{
                                    fontSize: '1.15rem',
                                    marginBottom: '16px',
                                    color: pkg.color,
                                    fontWeight: 600
                                }}>
                                    {t(`${pkg.key}.why_title`)}
                                </h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.7',
                                    marginBottom: '16px'
                                }}>
                                    {t(`${pkg.key}.why_desc`)}
                                </p>
                                {pkg.key === 'basic' && (
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.6',
                                        fontStyle: 'italic'
                                    }}>
                                        💡 {t(`${pkg.key}.why_vercel`)}
                                    </p>
                                )}
                                {pkg.key === 'intermediate' && (
                                    <>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.6',
                                            marginBottom: '12px'
                                        }}>
                                            🔒 {t(`${pkg.key}.why_supabase`)}
                                        </p>
                                        <p style={{
                                            fontSize: '1rem',
                                            color: pkg.color,
                                            lineHeight: '1.6',
                                            fontWeight: 600
                                        }}>
                                            {t(`${pkg.key}.combo_power`)}
                                        </p>
                                    </>
                                )}
                                {pkg.key === 'premium' && (
                                    <>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.6',
                                            marginBottom: '12px'
                                        }}>
                                            🔒 {t(`${pkg.key}.why_supabase`)}
                                        </p>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.6',
                                            marginBottom: '12px',
                                            padding: '16px',
                                            background: 'rgba(0, 0, 0, 0.2)',
                                            borderRadius: 'var(--radius-sm)'
                                        }}>
                                            💰 {t(`${pkg.key}.cost_breakdown`)}
                                        </p>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.6',
                                            padding: '16px',
                                            background: `${pkg.color}10`,
                                            borderRadius: 'var(--radius-sm)'
                                        }}>
                                            📊 {t(`${pkg.key}.vs_shopify`)}
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Ideal For */}
                            <div style={{
                                marginTop: '24px',
                                padding: '16px 20px',
                                background: `${pkg.color}08`,
                                borderRadius: 'var(--radius-md)',
                                fontSize: '0.95rem',
                                color: 'var(--text-primary)',
                                fontWeight: 500
                            }}>
                                {t(`${pkg.key}.ideal_for`)}
                            </div>

                            {/* Fiverr CTA Button */}
                            <a
                                href={t(`${pkg.key}.fiverr_link`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block',
                                    marginTop: '24px',
                                    padding: '16px 32px',
                                    background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)`,
                                    color: 'white',
                                    textAlign: 'center',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease',
                                    boxShadow: `0 4px 15px ${pkg.color}40`
                                }}
                            >
                                🛒 Order on Fiverr
                            </a>
                        </div>
                    );
                })}
            </div>

            {/* Comparison Table */}
            <div style={{ marginBottom: '80px' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '40px',
                    textAlign: 'center'
                }}>
                    {t('comparison.title')}
                </h2>
                <div className="glass" style={{
                    padding: '40px',
                    borderRadius: 'var(--radius-lg)',
                    overflowX: 'auto'
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '1rem'
                    }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.1)' }}>
                                <th style={{ padding: '16px', textAlign: 'left', color: 'var(--text-secondary)' }}></th>
                                <th style={{ padding: '16px', textAlign: 'center', color: 'var(--accent-primary)', fontWeight: 700 }}>
                                    {t('comparison.basic_label')}
                                </th>
                                <th style={{ padding: '16px', textAlign: 'center', color: 'var(--accent-secondary)', fontWeight: 700 }}>
                                    {t('comparison.intermediate_label')}
                                </th>
                                <th style={{ padding: '16px', textAlign: 'center', color: '#ec4899', fontWeight: 700 }}>
                                    {t('comparison.premium_label')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <td style={{ padding: '20px', fontWeight: 600 }}>{t('comparison.time')}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>{t('comparison.time_basic')}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>{t('comparison.time_intermediate')}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>{t('comparison.time_premium')}</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <td style={{ padding: '20px', fontWeight: 600 }}>{t('comparison.complexity')}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>{t('comparison.complexity_basic')}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>{t('comparison.complexity_intermediate')}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>{t('comparison.complexity_premium')}</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '20px', fontWeight: 600 }}>{t('comparison.maintenance')}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>{t('comparison.maintenance_basic')}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>{t('comparison.maintenance_intermediate')}</td>
                                <td style={{ padding: '20px', textAlign: 'center' }}>{t('comparison.maintenance_premium')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CTA Section */}
            <div className="glass" style={{
                padding: '60px 40px',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '20px'
                }}>
                    {t('cta.title')}
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '32px',
                    maxWidth: '600px',
                    margin: '0 auto 32px'
                }}>
                    {t('cta.desc')}
                </p>
                <a
                    href="https://wa.me/+5566999318742"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '16px 40px',
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                        color: 'white',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
                    }}
                >
                    {t('cta.button')}
                </a>
            </div>
        </main>
    );
}

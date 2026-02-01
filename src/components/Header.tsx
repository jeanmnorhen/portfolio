import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('Navigation');

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            borderBottom: '1px solid var(--glass-border)',
            background: 'rgba(3, 3, 4, 0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
        }}>
            <div className="container" style={{
                height: 'var(--header-height)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none', color: 'inherit' }}>
                    Portfolio<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </Link>

                <nav style={{ display: 'flex', gap: '32px' }}>
                    <Link href="/work" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500 }}>
                        {t('work')}
                    </Link>
                    <Link href="/services" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500 }}>
                        {t('services')}
                    </Link>
                    <Link href="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500 }}>
                        {t('about')}
                    </Link>
                </nav>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {/* Language Switcher Mini */}
                    <div style={{ display: 'flex', gap: '8px', fontSize: '0.8rem' }}>
                        <Link href="/" locale="en" style={{ opacity: 0.7 }}>EN</Link>
                        <span style={{ opacity: 0.3 }}>|</span>
                        <Link href="/" locale="pt" style={{ opacity: 0.7 }}>PT</Link>
                    </div>

                    <a href="https://wa.me/+5566999318742" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', textDecoration: 'none' }}>
                        {t('contact')}
                    </a>
                </div>
            </div>
        </header>
    );
}

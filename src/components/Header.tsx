"use client";

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('Navigation');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const closeMenu = () => setIsMobileMenuOpen(false);

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
                <Link href="/" onClick={closeMenu} style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none', color: 'inherit', zIndex: 101 }}>
                    Portfolio<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </Link>

                <nav className="desktop-nav">
                    <Link href="/#comunicacao-visual" className="nav-link">
                        {t('cv')}
                    </Link>
                    <Link href="/#marketing-publicitario" className="nav-link">
                        {t('mp')}
                    </Link>
                    <Link href="/#dev-web-mobile" className="nav-link">
                        {t('wd')}
                    </Link>
                    <Link href="/#ferramentas" className="nav-link">
                        {t('tools')}
                    </Link>
                </nav>

                <div className="mobile-actions">
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

                <button 
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <div style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'currentColor',
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                        transform: isMobileMenuOpen ? 'rotate(45deg) translate(5.5px, 5.5px)' : 'none',
                        marginBottom: '6px'
                    }}></div>
                    <div style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'currentColor',
                        transition: 'opacity 0.3s ease',
                        opacity: isMobileMenuOpen ? 0 : 1,
                        marginBottom: '6px'
                    }}></div>
                    <div style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'currentColor',
"use client";

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('Navigation');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const closeMenu = () => setIsMobileMenuOpen(false);

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
                <Link href="/" onClick={closeMenu} style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none', color: 'inherit', zIndex: 101 }}>
                    Portfolio<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </Link>

                <nav className="desktop-nav">
                    <Link href="/#comunicacao-visual" className="nav-link">
                        {t('cv')}
                    </Link>
                    <Link href="/#marketing-publicitario" className="nav-link">
                        {t('mp')}
                    </Link>
                    <Link href="/#dev-web-mobile" className="nav-link">
                        {t('wd')}
                    </Link>
                    <Link href="/#ferramentas" className="nav-link">
                        {t('tools')}
                    </Link>
                </nav>

                <div className="mobile-actions">
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

                <button 
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <div style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'currentColor',
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                        transform: isMobileMenuOpen ? 'rotate(45deg) translate(5.5px, 5.5px)' : 'none',
                        marginBottom: '6px'
                    }}></div>
                    <div style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'currentColor',
                        transition: 'opacity 0.3s ease',
                        opacity: isMobileMenuOpen ? 0 : 1,
                        marginBottom: '6px'
                    }}></div>
                    <div style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'currentColor',
                        transition: 'transform 0.3s ease',
                        transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5.5px, -5.5px)' : 'none'
                    }}></div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                    {/* Language Switcher Mini */}
                    <div style={{ display: 'flex', gap: '16px', fontSize: '1.5rem', fontWeight: 600 }}>
                        <Link href="/" locale="en" style={{ opacity: 0.7 }} onClick={closeMenu}>EN</Link>
                        <span style={{ opacity: 0.3 }}>|</span>
                        <Link href="/" locale="pt" style={{ opacity: 0.7 }} onClick={closeMenu}>PT</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

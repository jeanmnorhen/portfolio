'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Portfolio Images
import cv1 from '@/img/cv1.png';
import cv2 from '@/img/cv2.png';
import cv3 from '@/img/cv3.jpg';
import cv4 from '@/img/cv4.webp';
import cv5 from '@/img/cv5.webp';
import cv6 from '@/img/cv6.jpg';

import mp1 from '@/img/mp1.jpg';
import mp2 from '@/img/mp2.jpg';
import mp3 from '@/img/mp3.jpeg';
import mp4 from '@/img/mp4.jpeg';
import mp5 from '@/img/mp5.jpeg';
import mp6 from '@/img/mp6.jpeg';

import wd1 from '@/img/wd1.png';
import wd2 from '@/img/wd2.png';
import wd3 from '@/img/wd3.png';

import foto from '@/img/foto.jpeg';

export default function Home() {
  const t = useTranslations('Home');

  // Interactive Lightbox State
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Tools list for rendering badges
  const tools = [
    'Next.js',
    'TypeScript',
    'Supabase',
    'Node.js',
    'React',
    'Vercel',
    'React-Native'
  ];

  // Complete Portfolio List for the Lightbox Carousel
  const portfolioItems = [
    { id: 'cv1', src: cv1, titleKey: 'sections.cv.item1', sectionKey: 'sections.cv.title' },
    { id: 'cv2', src: cv2, titleKey: 'sections.cv.item2', sectionKey: 'sections.cv.title' },
    { id: 'cv3', src: cv3, titleKey: 'sections.cv.item3', sectionKey: 'sections.cv.title' },
    { id: 'cv4', src: cv4, titleKey: 'sections.cv.item4', sectionKey: 'sections.cv.title' },
    { id: 'cv5', src: cv5, titleKey: 'sections.cv.item5', sectionKey: 'sections.cv.title' },    
    { id: 'mp1', src: mp1, titleKey: 'sections.mp.item1', sectionKey: 'sections.mp.title' },
    { id: 'mp2', src: mp2, titleKey: 'sections.mp.item2', sectionKey: 'sections.mp.title' },
    { id: 'mp3', src: mp3, titleKey: 'sections.mp.item3', sectionKey: 'sections.mp.title' },
    { id: 'mp4', src: mp4, titleKey: 'sections.mp.item4', sectionKey: 'sections.mp.title' },
    { id: 'mp5', src: mp5, titleKey: 'sections.mp.item5', sectionKey: 'sections.mp.title' },
    { id: 'mp6', src: mp6, titleKey: 'sections.mp.item6', sectionKey: 'sections.mp.title' },
    { id: 'wd1', src: wd1, titleKey: 'sections.wd.item1', sectionKey: 'sections.wd.title' },
    { id: 'wd2', src: wd2, titleKey: 'sections.wd.item2', sectionKey: 'sections.wd.title' },
    { id: 'wd3', src: wd3, titleKey: 'sections.wd.item3', sectionKey: 'sections.wd.title' },
  ];

  // Open Lightbox to specific item
  const openLightbox = (id: string) => {
    const idx = portfolioItems.findIndex(item => item.id === id);
    if (idx !== -1) {
      setActiveIndex(idx);
      setIsOpen(true);
    }
  };

  // Navigations
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Keyboard navigation & scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Scroll Lock
    document.body.style.overflow = 'hidden';

    // Keyboard handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <main>
      {/* Hero Section */}
      <section className="container section-padding" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-wrapper">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent-primary)',
              borderRadius: '50px',
              marginBottom: '24px',
              fontWeight: 600,
              fontSize: '14px',
              width: 'fit-content'
            }}>
              {t('badge')}
            </div>
            
            <h1 style={{ textTransform: 'capitalize', marginBottom: '16px' }}>
              {t('name')}
            </h1>
            
            <h3 style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
              fontWeight: 600, 
              color: 'var(--text-primary)',
              marginBottom: '24px',
              opacity: 0.9
            }}>
              {t('tagline')}
            </h3>

            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px', maxWidth: '640px' }}>
              {t('description')}
            </p>

            <div className="hero-buttons">
              <a href="https://wa.me/+5566999318742" target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('cta_primary')}
              </a>
              <a href="#comunicacao-visual" className="btn-secondary">
                {t('cta_secondary')}
              </a>
            </div>
          </div>

          <div className="hero-profile-container">
            <div className="hero-profile-ring">
              <Image 
                src={foto} 
                alt={t('name')} 
                className="hero-profile-image"
                priority
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 1: Comunicação Visual */}
      <section className="container section-padding" id="comunicacao-visual" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="section-header">
          <h2 className="portfolio-tag" style={{ margin: '0 0 12px' }}>{t('sections.cv.title')}</h2>
          <p>{t('sections.cv.subtitle')}</p>
        </div>

        <div className="portfolio-grid">
          {/* Card 1 */}
          <div className="portfolio-card" onClick={() => openLightbox('cv1')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={cv1} alt={t('sections.cv.item1')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.cv.title')}</span>
                <h4 className="portfolio-caption">{t('sections.cv.item1')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.cv.item1')}</h4>
              <p>{t('sections.cv.title')}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="portfolio-card" onClick={() => openLightbox('cv2')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={cv2} alt={t('sections.cv.item2')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.cv.title')}</span>
                <h4 className="portfolio-caption">{t('sections.cv.item2')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.cv.item2')}</h4>
              <p>{t('sections.cv.title')}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="portfolio-card" onClick={() => openLightbox('cv3')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={cv3} alt={t('sections.cv.item3')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.cv.title')}</span>
                <h4 className="portfolio-caption">{t('sections.cv.item3')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.cv.item3')}</h4>
              <p>{t('sections.cv.title')}</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="portfolio-card" onClick={() => openLightbox('cv4')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={cv4} alt={t('sections.cv.item4')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.cv.title')}</span>
                <h4 className="portfolio-caption">{t('sections.cv.item4')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.cv.item4')}</h4>
              <p>{t('sections.cv.title')}</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="portfolio-card" onClick={() => openLightbox('cv5')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={cv5} alt={t('sections.cv.item5')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.cv.title')}</span>
                <h4 className="portfolio-caption">{t('sections.cv.item5')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.cv.item5')}</h4>
              <p>{t('sections.cv.title')}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Seção 2: Marketing Publicitário */}
      <section className="container section-padding" id="marketing-publicitario" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="section-header">
          <h2 className="portfolio-tag" style={{ margin: '0 0 12px' }}>{t('sections.mp.title')}</h2>
          <p>{t('sections.mp.subtitle')}</p>
        </div>

        <div className="portfolio-grid">
          {/* Card 1 */}
          <div className="portfolio-card" onClick={() => openLightbox('mp1')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={mp1} alt={t('sections.mp.item1')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.mp.title')}</span>
                <h4 className="portfolio-caption">{t('sections.mp.item1')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.mp.item1')}</h4>
              <p>{t('sections.mp.title')}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="portfolio-card" onClick={() => openLightbox('mp2')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={mp2} alt={t('sections.mp.item2')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.mp.title')}</span>
                <h4 className="portfolio-caption">{t('sections.mp.item2')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.mp.item2')}</h4>
              <p>{t('sections.mp.title')}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="portfolio-card" onClick={() => openLightbox('mp3')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={mp3} alt={t('sections.mp.item3')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.mp.title')}</span>
                <h4 className="portfolio-caption">{t('sections.mp.item3')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.mp.item3')}</h4>
              <p>{t('sections.mp.title')}</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="portfolio-card" onClick={() => openLightbox('mp4')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={mp4} alt={t('sections.mp.item4')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.mp.title')}</span>
                <h4 className="portfolio-caption">{t('sections.mp.item4')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.mp.item4')}</h4>
              <p>{t('sections.mp.title')}</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="portfolio-card" onClick={() => openLightbox('mp5')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={mp5} alt={t('sections.mp.item5')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.mp.title')}</span>
                <h4 className="portfolio-caption">{t('sections.mp.item5')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.mp.item5')}</h4>
              <p>{t('sections.mp.title')}</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="portfolio-card" onClick={() => openLightbox('mp6')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={mp6} alt={t('sections.mp.item6')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.mp.title')}</span>
                <h4 className="portfolio-caption">{t('sections.mp.item6')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <h4>{t('sections.mp.item6')}</h4>
              <p>{t('sections.mp.title')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Desenvolvedor Web e Mobile */}
      <section className="container section-padding" id="dev-web-mobile" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="section-header">
          <h2 className="portfolio-tag" style={{ margin: '0 0 12px', color: '#f472b6' }}>{t('sections.wd.title')}</h2>
          <p>{t('sections.wd.subtitle')}</p>
        </div>

        <div className="portfolio-grid">
          {/* Card 1 */}
          <div className="portfolio-card" onClick={() => openLightbox('wd1')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={wd1} alt={t('sections.wd.item1')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.wd.title')}</span>
                <h4 className="portfolio-caption">{t('sections.wd.item1')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <a href="https://thermal-match.vercel.app/pt" target="_blank" rel="noopener noreferrer" >
              <h4>Link para o site</h4>
               <p>Chamadas de vídeo p2p com chat com tradução local. Ferramentas: Next.js, TypeScript, Supabase, Node.js, React, Vercel, React-Native.</p>
               </a>
              
            </div>
          </div>

          {/* Card 2 */}
          <div className="portfolio-card" onClick={() => openLightbox('wd2')} style={{ cursor: 'pointer' }}>
            <div className="portfolio-image-wrapper">
              <Image src={wd2} alt={t('sections.wd.item2')} className="portfolio-img" placeholder="blur" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{t('sections.wd.title')}</span>
                <h4 className="portfolio-caption">{t('sections.wd.item2')}</h4>
              </div>
            </div>
            <div className="portfolio-info">
              <a href="https://medusa-premium-store.vercel.app/" target="_blank" rel="noopener noreferrer" >
              <h4>Link para o site</h4>
               <p>Loja completa online com pagamentos (via Stripe) em Débito, Crédito, Pix e carteiras digitais. Ferramentas: Next.js, TypeScript, Supabase, Stripe, Node.js, React, Vercel.</p>
               </a>
            </div>
          </div>

            {/* Card 3 */}
            <div className="portfolio-card" onClick={() => openLightbox('wd3')} style={{ cursor: 'pointer' }}>
              <div className="portfolio-image-wrapper">
                <Image src={wd3} alt="Atelier Movelaria" className="portfolio-img" placeholder="blur" />
                <div className="portfolio-overlay">
                  <span className="portfolio-tag">{t('sections.wd.title')}</span>
                  <h4 className="portfolio-caption">Atelier Movelaria</h4>
                </div>
              </div>
              <div className="portfolio-info">
                <a href="https://ecommerce-analytics-medusa.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <h4>Link para o site</h4>
                  <p>Loja de móveis planejados com calculadora de orçamento e painel administrativo completo. Ferramentas: Next.js, TypeScript, Supabase, Medusa.js, Node.js, React, Vercel.</p>
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* Seção 4: Ferramentas */}
      <section className="tools-section section-padding" id="ferramentas">
        <div className="container">
          <div className="tools-title-container">
            <span className="portfolio-tag" style={{ margin: '0 0 12px' }}>{t('sections.tools.title')}</span>            
            <p style={{ fontSize: '1.15rem' }}>{t('sections.tools.subtitle')}</p>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => (
              <div key={tool} className="tool-badge">
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                  boxShadow: '0 0 8px var(--accent-primary)'
                }}></span>
                {tool}
              </div>
            ))}
          </div>

   
        </div>
      </section>

      {/* Lightbox / Gallery Carousel Modal */}
      {isOpen && (
        <div className="lightbox-overlay" onClick={handleClose}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="lightbox-btn lightbox-close-btn" onClick={handleClose} aria-label="Fechar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Prev Button */}
            <button className="lightbox-btn lightbox-nav-prev" onClick={handlePrev} aria-label="Anterior">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Image Container */}
            <div className={`lightbox-image-container ${
              portfolioItems[activeIndex].id === 'cv1' || portfolioItems[activeIndex].id === 'cv2' 
                ? 'xl-image' 
                : ''
            }`}>
              <Image 
                src={portfolioItems[activeIndex].src} 
                alt={t(portfolioItems[activeIndex].titleKey)} 
                className="lightbox-img"
                priority
              />
            </div>

            {/* Next Button */}
            <button className="lightbox-btn lightbox-nav-next" onClick={handleNext} aria-label="Próximo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Caption Panel */}
            <div className="lightbox-caption-bar">
              <p>{t(portfolioItems[activeIndex].sectionKey)}</p>
              <h4>{t(portfolioItems[activeIndex].titleKey)}</h4>
            </div>
          </div>
        </div>
      )}

      {/* CTA Contact Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        borderTop: '1px solid var(--border-subtle)'
      }} id="contact">
        <div className="container cta-wrapper">
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '24px' }}>
            {t('contact_title')}
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
            {t('contact_desc')}
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '32px'
          }}>
            <a href="https://www.fiverr.com/s/jj9DBYL" target="_blank" rel="noopener noreferrer" className="btn-fiverr" style={{ padding: '16px 36px', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 0H1a1 1 0 00-1 1v22a1 1 0 001 1h22a1 1 0 001-1V1a1 1 0 00-1-1zm-6.72 16.5h-2.12v-5.22c0-.5-.35-.74-.84-.74s-.89.28-.89.74v5.22h-2.11v-5.22c0-.5-.37-.74-.86-.74s-.89.28-.89.74v5.22H7.4V9.67h1.86v.91c.42-.69 1.15-1.04 2-1.04 1 0 1.78.47 2.06 1.25.42-.8 1.25-1.25 2.22-1.25 1.54 0 2.74 1 2.74 2.74v4.22zm-7.65-8.5c-.65 0-1.17-.52-1.17-1.17 0-.65.52-1.17 1.17-1.17.65 0 1.17.52 1.17 1.17 0 .65-.52 1.17-1.17 1.17z"/>
              </svg>
              {t('contact_fiverr_btn')}
            </a>
            <a href="https://wa.me/+5566999318742" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.114-2.875-6.973-1.857-1.859-4.335-2.88-6.97-2.882-5.437 0-9.863 4.42-9.867 9.864-.001 1.73.457 3.419 1.32 4.933l-.994 3.635 3.722-.975zm11.087-7.4c-.1-.166-.367-.265-.77-.466-.401-.2-2.37-1.17-2.735-1.303-.367-.133-.633-.2-.9.2-.267.4-.77.97-.944 1.17-.173.2-.347.23-.75.03-.4-.2-1.697-.626-3.232-1.996-1.193-1.065-2.0-2.38-2.233-2.78-.234-.4-.025-.617.177-.817.18-.18.4-.466.6-.7.2-.23.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.17-1.233-2.97-.33-.8-.662-.689-.9-.7h-.767c-.266 0-.7.1-1.066.5-.367.4-1.4 1.37-1.4 3.3 0 1.93 1.4 3.8 1.6 4.07.2.27 2.756 4.21 6.68 5.91 3.272 1.415 4.022 1.15 5.472.95 1.482-.2 2.735-.85 3.12-1.67.38-.82.38-1.52.26-1.67z"/>
              </svg>
              {t('contact_whatsapp_btn')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

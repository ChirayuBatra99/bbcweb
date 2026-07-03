import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { site } from '../../config/site';
import { images } from '../../config/images';
import LazyImage from '../ui/LazyImage';
import Button from '../ui/Button';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  const mobileMenu = (
    <div
      className={`header__overlay ${menuOpen ? 'header__overlay--open' : ''}`}
      aria-hidden={!menuOpen}
    >
      <nav
        className="header__mobile-nav"
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <p className="header__mobile-motto">{site.motto}</p>
        <ul className="header__mobile-links">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          href="#contact"
          variant="primary"
          className="header__mobile-cta"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          Enquire Now
        </Button>
      </nav>
    </div>
  );

  return (
    <div className={`header-shell ${scrolled || menuOpen ? 'header-shell--solid' : ''}`}>
      <div className="header__motto-bar" aria-label={site.motto}>
        <div className="container header__motto-inner">
          <span className="header__motto-ornament" aria-hidden="true" />
          <span className="header__motto">{site.motto}</span>
          <span className="header__motto-ornament header__motto-ornament--reverse" aria-hidden="true" />
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <a href="#home" className="header__logo" onClick={closeMenu}>
            <LazyImage
              src={images.logo}
              alt={`${site.name} logo`}
              width={160}
              height={56}
              objectFit="contain"
              priority
            />
            <span className="header__logo-text">
              <strong className="header__brand-name">
                <span className="header__brand-batra">Batra</span>
                <span className="header__brand-brain">Brain</span>
                <span className="header__brand-cafe">Cafe</span>
              </strong>
              <small className="header__brand-sub">
                {site.alternateName} · Est. {site.foundedYear}
              </small>
            </span>
          </a>

          <nav className="header__desktop-nav" aria-label="Main navigation">
            <ul className="header__desktop-links">
              {site.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="primary" className="header__cta">
              Enquire Now
            </Button>
          </nav>

          <button
            type="button"
            className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {createPortal(mobileMenu, document.body)}
    </div>
  );
}

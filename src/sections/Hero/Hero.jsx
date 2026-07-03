import { site } from '../../config/site';
import Button from '../../components/ui/Button';
import './Hero.css';

export default function Hero() {
  const mottoWords = site.motto.split(' ');
  const mottoAccent = mottoWords.pop();
  const mottoLead = mottoWords.join(' ');

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__gradient animate-gradient" />
        <div className="hero__orb hero__orb--1 animate-blob" />
        <div className="hero__orb hero__orb--2 animate-blob" />
        <div className="hero__orb hero__orb--3 animate-pulse-glow" />
        <div className="hero__grid-pattern" />
        <div className="hero__shapes">
          <div className="hero__shape hero__shape--1 animate-float" />
          <div className="hero__shape hero__shape--2 animate-float-reverse" />
          <div className="hero__shape hero__shape--3 animate-spin-slow" />
        </div>
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {site.name} — Trusted Since {site.foundedYear}
        </div>

        <h1 className="hero__title">
          {mottoLead}
          <span className="hero__title-accent"> {mottoAccent}</span>
        </h1>

        <p className="hero__subtitle">
          {site.description}
        </p>

        <div className="hero__boards">
          {['CBSE', 'ICSE', 'State Boards', 'JEE', 'NEET'].map((board) => (
            <span key={board} className="hero__board-tag">{board}</span>
          ))}
        </div>

        <div className="hero__actions">
          <Button href="#programs" variant="primary">
            Explore Programs
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
          <Button href="#contact" variant="outline">
            Book a Free Counselling
          </Button>
        </div>

        <div className="hero__grades">
          <div className="hero__grade-card">
            <span className="hero__grade-num">2–5</span>
            <span className="hero__grade-label">Foundation</span>
          </div>
          <div className="hero__grade-divider" />
          <div className="hero__grade-card">
            <span className="hero__grade-num">6–8</span>
            <span className="hero__grade-label">Middle School</span>
          </div>
          <div className="hero__grade-divider" />
          <div className="hero__grade-card">
            <span className="hero__grade-num">9–12</span>
            <span className="hero__grade-label">Board & Competitive</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

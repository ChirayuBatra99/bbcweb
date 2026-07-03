import { site } from '../../config/site';
import SectionHeading from '../../components/ui/SectionHeading';
import useReveal from '../../hooks/useReveal';
import './Stats.css';

export default function Stats() {
  const ref = useReveal();

  return (
    <section className="stats">
      <div className="stats__bg" aria-hidden="true">
        <div className="stats__gradient" />
      </div>
      <div className="container">
        <div ref={ref}>
          <div className="stats__grid reveal">
          {site.stats.map((stat, i) => (
            <div key={stat.label} className={`stats__item reveal reveal-delay-${i + 1}`}>
              <span className="stats__value">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

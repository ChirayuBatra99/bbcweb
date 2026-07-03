import { site } from '../../config/site';
import { images } from '../../config/images';
import SectionHeading from '../../components/ui/SectionHeading';
import LazyImage from '../../components/ui/LazyImage';
import useReveal from '../../hooks/useReveal';
import './About.css';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={ref}>
          <div className="reveal">
            <SectionHeading
              eyebrow="Our Story"
              title={`Four Decades of Shaping Futures`}
              subtitle={`Founded in ${site.foundedYear}, ${site.name} has been a beacon of academic excellence — a family-run institute where tradition meets innovation.`}
            />
          </div>

          <div className="about__grid">
          <div className="about__visual reveal reveal-delay-1">
            <div className="about__image-main">
              <LazyImage
                src={images.aboutBanner}
                alt="Students learning at the coaching centre"
                width={600}
                height={500}
              />
            </div>
            <div className="about__image-accent">
              <LazyImage
                src={images.classroom}
                alt="Classroom environment"
                width={280}
                height={200}
              />
            </div>
            <div className="about__experience-badge">
              <span className="about__experience-num">{new Date().getFullYear() - site.foundedYear}+</span>
              <span className="about__experience-text">Years of<br />Trust</span>
            </div>
          </div>

          <div className="about__content reveal reveal-delay-2">
            <h3 className="about__heading">A Legacy Built on Love & Learning</h3>
            <p>
              What started as a small tuition centre in {site.foundedYear} has grown into one of the
              region&apos;s most respected coaching institutes — all while staying true to our roots
              as a mother-son partnership dedicated to every student&apos;s success.
            </p>
            <p>
              We believe education is not just about marks — it&apos;s about building confidence,
              curiosity, and character. Our approach combines rigorous academics with genuine care
              for each child&apos;s unique learning journey.
            </p>

            <ul className="about__highlights">
              {site.highlights.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </div>

      <div className="about__deco" aria-hidden="true" />
    </section>
  );
}

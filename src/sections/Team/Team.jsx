import { site } from '../../config/site';
import { images } from '../../config/images';
import SectionHeading from '../../components/ui/SectionHeading';
import LazyImage from '../../components/ui/LazyImage';
import useReveal from '../../hooks/useReveal';
import './Team.css';

export default function Team() {
  const ref = useReveal();
  const founderImages = [images.founders.mother.photo, images.founders.son.photo];

  return (
    <section id="team" className="section team">
      <div className="container">
        <div ref={ref}>
          <div className="reveal">
          <SectionHeading
            eyebrow="Meet Our Family"
            title="The People Behind Your Success"
            subtitle="A dedicated mother-son leadership team supported by experienced faculty who treat every student like family."
          />
          </div>

        {/* Founders */}
        <div className="team__founders">
          {site.founders.map((founder, i) => (
            <article
              key={founder.id}
              className={`team__founder reveal reveal-delay-${i + 1}`}
            >
              <div className="team__founder-image">
                <LazyImage
                  src={founderImages[i]}
                  alt={`${founder.name} - ${founder.role}`}
                  width={400}
                  height={480}
                />
                <div className="team__founder-badge">{founder.relation}</div>
              </div>
              <div className="team__founder-info">
                <h3 className="team__name">{founder.name}</h3>
                <p className="team__role">{founder.role}</p>
                <p className="team__bio">{founder.bio}</p>
                <span className="team__subjects">{founder.subjects}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Staff */}
        <div className="team__staff-header reveal">
          <h3 className="team__staff-title">Our Expert Faculty</h3>
          <p className="team__staff-subtitle">
            {site.staff.length} dedicated educators committed to your child&apos;s growth
          </p>
        </div>

        <div className="team__staff-grid">
          {site.staff.map((member, i) => {
            const staffImage = images.staff.find((s) => s.id === member.id);
            return (
              <article
                key={member.id}
                className={`team__staff-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="team__staff-photo">
                  <LazyImage
                    src={staffImage?.photo || ''}
                    alt={member.name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="team__staff-info">
                  <h4 className="team__staff-name">{member.name}</h4>
                  <p className="team__staff-role">{member.role}</p>
                  <p className="team__staff-subjects">{member.subjects}</p>
                </div>
              </article>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}

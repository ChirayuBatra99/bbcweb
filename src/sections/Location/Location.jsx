import { useState, useEffect, useRef } from 'react';
import { site } from '../../config/site';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import useReveal from '../../hooks/useReveal';
import './Location.css';

export default function Location() {
  const ref = useReveal();
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  const openInMaps = () => {
    window.open(site.location.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="location" className="section section--dark location">
      <div className="container">
        <div ref={ref}>
          <div className="reveal">
          <SectionHeading
            eyebrow="Find Us"
            title="Visit Our Centre"
            subtitle="Conveniently located and easy to reach. Drop by for a campus tour or book a counselling session."
            light
          />
          </div>

        <div className="location__grid reveal reveal-delay-1">
          <div className="location__info">
            <div className="location__card">
              <div className="location__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3>Address</h3>
                <p>{site.location.address}</p>
              </div>
            </div>

            <div className="location__card">
              <div className="location__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3>Timings</h3>
                <p>{site.contact.hours}</p>
              </div>
            </div>

            <div className="location__card">
              <div className="location__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                  {site.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <Button
              variant="primary"
              onClick={openInMaps}
              className="location__directions-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions on Google Maps
            </Button>
          </div>

          <div className="location__map-wrapper" ref={mapRef}>
            {mapLoaded ? (
              <iframe
                title={`${site.name} location on Google Maps`}
                src={site.location.embedUrl}
                className="location__map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="location__map-placeholder"
                onClick={openInMaps}
                aria-label="Load map or open in Google Maps"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Click to view on Google Maps</span>
              </button>
            )}
          </div>
        </div>
        </div>
      </div>

      <div className="location__deco" aria-hidden="true" />
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import './LazyImage.css';

export default function LazyImage({
  src,
  alt = '',
  className = '',
  width,
  height,
  objectFit = 'cover',
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = imgRef.current;
          if (img && img.dataset.src) {
            img.src = img.dataset.src;
            observer.disconnect();
          }
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  return (
    <div
      className={`lazy-image ${loaded ? 'lazy-image--loaded' : ''} ${className}`}
      style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
    >
      {!loaded && !error && <div className="lazy-image__shimmer" aria-hidden="true" />}
      {error ? (
        <div className="lazy-image__fallback" role="img" aria-label={alt}>
          <span>{alt || 'Image'}</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={priority ? src : undefined}
          data-src={!priority ? src : undefined}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          style={{ objectFit }}
          className="lazy-image__img"
        />
      )}
    </div>
  );
}

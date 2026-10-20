"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function HeroGallery({ photos }: { photos: Photo[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(photos.length > 1);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const updateControls = () => {
      setCanGoBack(element.scrollLeft > 2);
      setCanGoForward(element.scrollLeft + element.clientWidth < element.scrollWidth - 2);
    };
    const observer = new ResizeObserver(updateControls);
    observer.observe(element);
    element.addEventListener("scroll", updateControls, { passive: true });
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", updateControls);
    };
  }, []);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: direction * ((card?.offsetWidth ?? element.clientWidth) + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  return (
    <div className="photo-album">
      <ul
        ref={track}
        className="hero-collage"
        id="travel-photos"
        aria-label="Фотографии из поездок. Листайте, чтобы увидеть все снимки"
        tabIndex={0}
      >
        {photos.map((photo, index) => (
          <li className="hero-photo" key={photo.src}>
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading={index < 2 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
            />
          </li>
        ))}
      </ul>
      <div className="album-controls">
        <p>Листайте фотографии</p>
        <div className="album-buttons">
          <button type="button" aria-label="Предыдущие фотографии" aria-controls="travel-photos" disabled={!canGoBack} onClick={() => move(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
          </button>
          <button type="button" aria-label="Следующие фотографии" aria-controls="travel-photos" disabled={!canGoForward} onClick={() => move(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

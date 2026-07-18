"use client";

import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryLightboxProps {
  images: LightboxImage[];
  /** Tailwind aspect-ratio class for each thumbnail, e.g. "aspect-[4/3]" */
  aspect?: string;
  /** Extra classes for the outer grid */
  gridClassName?: string;
  /** Extra classes for each thumbnail's wrapper card */
  cardClassName?: string;
  /** Show each image's caption in its own text block below the thumbnail */
  showCaptions?: boolean;
}

export default function GalleryLightbox({
  images,
  aspect = "aspect-[4/3]",
  gridClassName = "grid grid-cols-2 gap-4 sm:grid-cols-3",
  cardClassName = "rounded-2xl border border-black/8 bg-white shadow-sm",
  showCaptions = false,
}: GalleryLightboxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className={gridClassName}>
        {images.map((image, index) => (
          <div key={image.src} className={`overflow-hidden ${cardClassName}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className={`group relative block w-full ${aspect} cursor-zoom-in overflow-hidden`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            {showCaptions && image.caption && (
              <div className="p-6">
                <p className="leading-relaxed text-body-text">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div
            className="relative flex max-h-full max-w-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            {images[openIndex].caption && (
              <p className="mt-4 max-w-2xl text-center text-sm text-white/75">{images[openIndex].caption}</p>
            )}
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              {openIndex + 1} / {images.length}
            </p>
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "@/lib/image-path";

interface ImageLightboxProps {
  src: string;
  alt: string;
  aspectRatio?: "video" | "square" | "4/3";
  /** For gallery navigation — pass all images in the set */
  gallery?: string[];
  /** Which index to open at (defaults to 0) */
  startIndex?: number;
}

export function ImageLightbox({
  src,
  alt,
  aspectRatio = "4/3",
  gallery,
  startIndex = 0,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = gallery || [src];
  const currentSrc = images[currentIdx];

  const goNext = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, goNext, goPrev]);

  const aspectClass = aspectRatio === "video" ? "aspect-video" : aspectRatio === "square" ? "aspect-square" : "";
  const inlineStyle = aspectRatio === "4/3" ? { aspectRatio: "4/3" } : undefined;

  return (
    <>
      <button
        onClick={() => {
          setCurrentIdx(startIndex);
          setOpen(true);
        }}
        className={`cursor-zoom-in rounded-lg overflow-hidden border border-border hover:border-foreground/20 transition-colors block w-full relative ${aspectClass}`}
        style={inlineStyle}
      >
        <img
          src={img(src)}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gallery indicator */}
        {images.length > 1 && (
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full">
            1/{images.length}
          </span>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setOpen(false)}
        >
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Counter */}
          {images.length > 1 && (
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm z-20">
              {currentIdx + 1} / {images.length}
            </span>
          )}

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-20"
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {/* Image */}
          <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={img(currentSrc)}
              alt={alt}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-20"
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}
        </div>
      )}
    </>
  );
}

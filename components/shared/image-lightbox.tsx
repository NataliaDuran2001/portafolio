"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { img } from "@/lib/image-path";

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  /** Fixed thumbnail aspect ratio for grid consistency */
  aspectRatio?: "video" | "square" | "4/3";
}

export function ImageLightbox({
  src,
  alt,
  aspectRatio = "4/3",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  const aspectClass =
    aspectRatio === "video"
      ? "aspect-video"
      : aspectRatio === "square"
        ? "aspect-square"
        : "";

  const inlineStyle = aspectRatio === "4/3" ? { aspectRatio: "4/3" } : undefined;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`cursor-zoom-in rounded-lg overflow-hidden border border-border hover:border-foreground/20 transition-colors block w-full relative ${aspectClass}`}
        style={inlineStyle}
      >
        <Image
          src={img(src)}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={img(src)}
              alt={alt}
              width={1600}
              height={1000}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

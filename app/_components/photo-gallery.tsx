"use client";

import type { PhotoItem } from "@/lib/types";
import { Carousel, CarouselItem } from "./carousel";

export interface PhotoGalleryProps {
  photos: PhotoItem[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <section className="photo-gallery">
      <Carousel itemWidth={280}>
        {photos.map((photo, index) => (
          <CarouselItem key={index}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="photo-gallery__image"
            />
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
}

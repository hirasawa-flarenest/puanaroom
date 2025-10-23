"use client";

export interface PhotoItem {
  src: string;
  alt: string;
}

export interface PhotoGalleryProps {
  photos: PhotoItem[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <section className="photo-gallery">
      <div className="photo-gallery__scroll">
        {photos.map((photo, index) => (
          <div key={index} className="photo-gallery__item">
            <img
              src={photo.src}
              alt={photo.alt}
              className="photo-gallery__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

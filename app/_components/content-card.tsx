import { ReactNode } from "react";

export interface ContentCardProps {
  image?: string;
  imageAlt?: string;
  date: string;
  title: string;
  description?: string;
  badge?: ReactNode;
}

export function ContentCard({
  image,
  imageAlt,
  date,
  title,
  description,
  badge,
}: ContentCardProps) {
  return (
    <article className="activity-card">
      {image && (
        <div className="activity-card__image-wrapper">
          <img
            src={image}
            alt={imageAlt || title}
            className="activity-card__image"
          />
        </div>
      )}
      <div className="activity-card__content">
        {badge ? (
          <div className="activity-card__meta">
            <time className="activity-card__date">{date}</time>
            {badge}
          </div>
        ) : (
          <time className="activity-card__date">{date}</time>
        )}
        <h3 className="activity-card__title">{title}</h3>
        {description && (
          <p className="activity-card__description">{description}</p>
        )}
      </div>
    </article>
  );
}

import { ReactNode } from "react";
import Image from "next/image";

export interface ContentCardProps {
  image?: string;
  imageAlt?: string;
  date: string;
  title: string;
  description?: string;
  badge?: ReactNode;
  onClick?: () => void;
}

export function ContentCard({
  image,
  imageAlt,
  date,
  title,
  description,
  badge,
  onClick,
}: ContentCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClick && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className={`activity-card ${onClick ? "activity-card--clickable" : ""}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
    >
      {image && (
        <div className="activity-card__image-wrapper">
          <Image
            src={image}
            alt={imageAlt || title}
            className="activity-card__image"
            width={800}
            height={600}
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

import { ReactNode } from "react";
import Image from "next/image";

export interface ContentCardProps {
  image?: string;
  imageAlt?: string;
  date: string;
  dateLabel?: string;
  title: string;
  description?: string;
  badge?: ReactNode;
  onClick?: () => void;
}

export function ContentCard({
  image,
  imageAlt,
  date,
  dateLabel,
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

  // descriptionを80文字で切り詰めて省略記号を追加
  const truncateDescription = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
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
            <time className="activity-card__date">
              {dateLabel && <span className="activity-card__date-label">{dateLabel}</span>}
              {date}
            </time>
            {badge}
          </div>
        ) : (
          <time className="activity-card__date">
            {dateLabel && <span className="activity-card__date-label">{dateLabel}</span>}
            {date}
          </time>
        )}
        <h3 className="activity-card__title">{title}</h3>
        {description && (
          <p className="activity-card__description">{truncateDescription(description)}</p>
        )}
      </div>
    </article>
  );
}

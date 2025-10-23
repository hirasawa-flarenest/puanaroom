"use client";

import { useState, useEffect } from "react";
import { ContentCard } from "./content-card";

export interface Activity {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface ActivitiesSectionProps {
  title: string;
  subtitle: string;
  activities: Activity[];
  itemsPerPage?: number;
}

export function ActivitiesSection({
  title,
  subtitle,
  activities,
  itemsPerPage = 3
}: ActivitiesSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedActivities = activities.slice(startIndex, endIndex);

  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => setDirection(null), 400);
      return () => clearTimeout(timer);
    }
  }, [direction]);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection("left");
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setDirection("right");
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="common-section">
      <div className="common-section__inner">
        <header className="section-header">
          <h2 className="section-header__title">{title}</h2>
          <p className="section-header__subtitle">{subtitle}</p>
        </header>

        <div
          className={`activities-list ${
            direction === "left"
              ? "activities-list--slide-left"
              : direction === "right"
              ? "activities-list--slide-right"
              : ""
          }`}
        >
          {displayedActivities.map((activity, index) => (
            <ContentCard
              key={startIndex + index}
              image={activity.image}
              imageAlt={activity.title}
              date={activity.date}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="activities-section__footer">
            <div className="activities-pagination">
              <button
                className="activities-pagination__button"
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                aria-label="前のページ"
              >
                ← 前へ
              </button>
              <span className="activities-pagination__info">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                className="activities-pagination__button"
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
                aria-label="次のページ"
              >
                次へ →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

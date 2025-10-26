"use client";

import { useState } from "react";
import { ContentCard } from "./content-card";
import { Modal } from "./modal";
import type { Activity } from "@/lib/types";
import { usePageableContent, useSlideAnimation } from "@/lib/hooks";

export interface ActivitiesSectionProps {
  title: string;
  subtitle: string;
  activities: Activity[];
  itemsPerPage?: number;
  instagramUrl?: string;
}

export function ActivitiesSection({
  title,
  subtitle,
  activities,
  itemsPerPage = 3,
  instagramUrl
}: ActivitiesSectionProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );

  const {
    currentPage,
    totalPages,
    displayedItems: displayedActivities,
    goToNextPage: handleNextPage,
    goToPrevPage: handlePrevPage,
  } = usePageableContent({ items: activities, itemsPerPage });

  const { direction, slideLeft, slideRight } = useSlideAnimation();

  const goToNextPage = () => {
    slideLeft();
    handleNextPage();
  };

  const goToPrevPage = () => {
    slideRight();
    handlePrevPage();
  };

  const handleCardClick = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  const handleCloseModal = () => {
    setSelectedActivity(null);
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
              key={`${currentPage}-${index}`}
              image={activity.image}
              imageAlt={activity.title}
              date={activity.date}
              dateLabel="活動日"
              title={activity.title}
              description={activity.content || activity.description}
              onClick={() => handleCardClick(activity)}
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

        {instagramUrl && (
          <div className="activities-instagram-cta">
            <p className="activities-instagram-cta__text">
              日々の活動の様子をInstagramで発信しています
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="activities-instagram-cta__button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagramで見る
            </a>
          </div>
        )}
      </div>

      {selectedActivity && (
        <Modal
          isOpen={!!selectedActivity}
          onClose={handleCloseModal}
          title={selectedActivity.title}
          date={selectedActivity.date}
          dateLabel="活動日"
          image={selectedActivity.image ? {
            url: selectedActivity.image,
            alt: selectedActivity.title,
            width: 800,
            height: 600,
          } : undefined}
          content={selectedActivity.content || ""}
        />
      )}
    </section>
  );
}

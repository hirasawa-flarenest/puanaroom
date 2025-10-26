"use client";

import { useState } from "react";
import { ContentCard } from "./content-card";
import { Modal } from "./modal";
import type { Announcement, AnnouncementCategory } from "@/lib/types";
import { usePageableContent, useSlideAnimation } from "@/lib/hooks";

export interface AnnouncementsSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  announcements: Announcement[];
  itemsPerPage?: number;
}

const categoryLabels: Record<AnnouncementCategory, string> = {
  closure: "休館日",
  event: "イベント",
  notice: "お知らせ",
  other: "その他",
};

const categoryColors: Record<AnnouncementCategory, string> = {
  closure: "announcement-badge--closure",
  event: "announcement-badge--event",
  notice: "announcement-badge--notice",
  other: "announcement-badge--other",
};

export function AnnouncementsSection({
  id,
  title,
  subtitle,
  announcements,
  itemsPerPage = 3,
}: AnnouncementsSectionProps) {
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement | null>(null);

  const {
    currentPage,
    totalPages,
    displayedItems: displayedAnnouncements,
    goToNextPage: handleNextPage,
    goToPrevPage: handlePrevPage,
  } = usePageableContent({ items: announcements, itemsPerPage });

  const { direction, slideLeft, slideRight } = useSlideAnimation();

  const goToNextPage = () => {
    slideLeft();
    handleNextPage();
  };

  const goToPrevPage = () => {
    slideRight();
    handlePrevPage();
  };

  const handleCardClick = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const handleCloseModal = () => {
    setSelectedAnnouncement(null);
  };

  return (
    <section id={id} className="common-section">
      <div className="common-section__inner">
        <header className="section-header">
          <h2 className="section-header__title">{title}</h2>
          <p className="section-header__subtitle">{subtitle}</p>
        </header>

        <div
          className={`announcements-list ${
            direction === "left"
              ? "announcements-list--slide-left"
              : direction === "right"
              ? "announcements-list--slide-right"
              : ""
          }`}
        >
          {displayedAnnouncements.map((announcement, index) => (
            <ContentCard
              key={`${currentPage}-${index}`}
              description={announcement.description}
              date={announcement.date}
              title={announcement.title}
              badge={
                <span
                  className={`announcement-badge ${
                    categoryColors[announcement.category]
                  }`}
                >
                  {categoryLabels[announcement.category]}
                </span>
              }
              onClick={() => handleCardClick(announcement)}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="announcements-section__footer">
            <div className="announcements-pagination">
              <button
                className="announcements-pagination__button"
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                aria-label="前のページ"
              >
                ← 前へ
              </button>
              <span className="announcements-pagination__info">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                className="announcements-pagination__button"
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

      {selectedAnnouncement && (
        <Modal
          isOpen={!!selectedAnnouncement}
          onClose={handleCloseModal}
          title={selectedAnnouncement.title}
          date={selectedAnnouncement.date}
          category={{
            label: categoryLabels[selectedAnnouncement.category],
            className: categoryColors[selectedAnnouncement.category],
          }}
          content={
            selectedAnnouncement.content || selectedAnnouncement.description
          }
        />
      )}
    </section>
  );
}

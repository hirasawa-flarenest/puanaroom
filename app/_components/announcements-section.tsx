"use client";

import { useState, useEffect } from "react";
import { ContentCard } from "./content-card";

export type AnnouncementCategory = "closure" | "event" | "notice" | "other";

export interface Announcement {
  date: string;
  title: string;
  description: string;
  category: AnnouncementCategory;
  image?: string;
}

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
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const totalPages = Math.ceil(announcements.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedAnnouncements = announcements.slice(startIndex, endIndex);

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
              key={startIndex + index}
              image={announcement.image}
              imageAlt={announcement.title}
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
    </section>
  );
}

"use client";

import { useState } from "react";
import type { MonthSchedule } from "@/lib/types";
import { useSlideAnimation } from "@/lib/hooks";

export interface ScheduleCalendarSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  schedules: MonthSchedule[];
  currentMonth?: number; // 初期表示月（1-12）、未指定なら当月
  currentYear?: number; // 初期表示年、未指定なら当年
}

export function ScheduleCalendarSection({
  id,
  title,
  subtitle,
  schedules,
  currentMonth,
  currentYear,
}: ScheduleCalendarSectionProps) {
  const today = new Date();
  const [displayYear, setDisplayYear] = useState(
    currentYear ?? today.getFullYear()
  );
  const [displayMonth, setDisplayMonth] = useState(
    currentMonth ?? today.getMonth() + 1
  );

  const { direction, slideLeft, slideRight } = useSlideAnimation();

  // 現在表示中の月のスケジュールを取得
  const currentSchedule = schedules.find(
    (schedule) =>
      schedule.year === displayYear && schedule.month === displayMonth
  );

  // 現在の日付をタイムスタンプに変換（比較用）
  const getCurrentTimestamp = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getTime();
  };

  const currentTimestamp = getCurrentTimestamp(displayYear, displayMonth);

  // 次のスケジュールを見つける（現在より未来で最も近い月）
  const findNextSchedule = () => {
    return schedules
      .filter((s) => getCurrentTimestamp(s.year, s.month) > currentTimestamp)
      .sort(
        (a, b) =>
          getCurrentTimestamp(a.year, a.month) -
          getCurrentTimestamp(b.year, b.month)
      )[0];
  };

  // 前のスケジュールを見つける（現在より過去で最も近い月）
  const findPrevSchedule = () => {
    return schedules
      .filter((s) => getCurrentTimestamp(s.year, s.month) < currentTimestamp)
      .sort(
        (a, b) =>
          getCurrentTimestamp(b.year, b.month) -
          getCurrentTimestamp(a.year, a.month)
      )[0];
  };

  // 次/前のスケジュールが存在するかチェック
  const hasNextSchedule = () => !!findNextSchedule();
  const hasPrevSchedule = () => !!findPrevSchedule();

  const goToNextSchedule = () => {
    const nextSchedule = findNextSchedule();
    if (!nextSchedule) return;
    slideLeft();
    setDisplayYear(nextSchedule.year);
    setDisplayMonth(nextSchedule.month);
  };

  const goToPrevSchedule = () => {
    const prevSchedule = findPrevSchedule();
    if (!prevSchedule) return;
    slideRight();
    setDisplayYear(prevSchedule.year);
    setDisplayMonth(prevSchedule.month);
  };

  const formatMonthDisplay = (year: number, month: number) => {
    return `${year}年 ${month}月`;
  };

  return (
    <section id={id} className="common-section">
      <div className="common-section__inner">
        <header className="section-header">
          <h2 className="section-header__title">{title}</h2>
          <p className="section-header__subtitle">{subtitle}</p>
        </header>

        <div className="schedule-calendar-section__controls">
          <button
            className="schedule-calendar-section__nav-button"
            onClick={goToPrevSchedule}
            disabled={!hasPrevSchedule()}
            aria-label="前のスケジュールへ"
          >
            ← 前月
          </button>
          <div className="schedule-calendar-section__month-display">
            {formatMonthDisplay(displayYear, displayMonth)}
          </div>
          <button
            className="schedule-calendar-section__nav-button"
            onClick={goToNextSchedule}
            disabled={!hasNextSchedule()}
            aria-label="次のスケジュールへ"
          >
            次月 →
          </button>
        </div>

        <div
          className={`schedule-calendar-section__content ${
            direction === "left"
              ? "schedule-calendar-section__content--slide-left"
              : direction === "right"
              ? "schedule-calendar-section__content--slide-right"
              : ""
          }`}
        >
          {currentSchedule ? (
            <div className="schedule-calendar-section__image-wrapper">
              <img
                src={currentSchedule.imageUrl}
                alt={
                  currentSchedule.imageAlt ??
                  `${formatMonthDisplay(displayYear, displayMonth)}のスケジュール`
                }
                className="schedule-calendar-section__image"
              />
            </div>
          ) : (
            <div className="schedule-calendar-section__no-data">
              <p>
                {schedules.length === 0
                  ? "現在スケジュールがありません"
                  : `${formatMonthDisplay(displayYear, displayMonth)}のスケジュールは準備中です`}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

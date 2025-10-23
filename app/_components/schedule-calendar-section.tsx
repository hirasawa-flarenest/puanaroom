"use client";

import { useState, useEffect } from "react";

export interface MonthSchedule {
  year: number;
  month: number; // 1-12
  imageUrl: string;
  imageAlt?: string;
}

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
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => setDirection(null), 400);
      return () => clearTimeout(timer);
    }
  }, [direction]);

  // 現在表示中の月のスケジュールを取得
  const currentSchedule = schedules.find(
    (schedule) =>
      schedule.year === displayYear && schedule.month === displayMonth
  );

  // 次月/前月にスケジュールがあるかチェック
  const hasNextMonthSchedule = () => {
    const nextYear = displayMonth === 12 ? displayYear + 1 : displayYear;
    const nextMonth = displayMonth === 12 ? 1 : displayMonth + 1;
    return schedules.some(
      (schedule) => schedule.year === nextYear && schedule.month === nextMonth
    );
  };

  const hasPrevMonthSchedule = () => {
    const prevYear = displayMonth === 1 ? displayYear - 1 : displayYear;
    const prevMonth = displayMonth === 1 ? 12 : displayMonth - 1;
    return schedules.some(
      (schedule) => schedule.year === prevYear && schedule.month === prevMonth
    );
  };

  const goToNextMonth = () => {
    if (!hasNextMonthSchedule()) return;
    setDirection("left");
    if (displayMonth === 12) {
      setDisplayYear(displayYear + 1);
      setDisplayMonth(1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };

  const goToPrevMonth = () => {
    if (!hasPrevMonthSchedule()) return;
    setDirection("right");
    if (displayMonth === 1) {
      setDisplayYear(displayYear - 1);
      setDisplayMonth(12);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
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
            onClick={goToPrevMonth}
            disabled={!hasPrevMonthSchedule()}
            aria-label="前月へ"
          >
            ← 前月
          </button>
          <div className="schedule-calendar-section__month-display">
            {formatMonthDisplay(displayYear, displayMonth)}
          </div>
          <button
            className="schedule-calendar-section__nav-button"
            onClick={goToNextMonth}
            disabled={!hasNextMonthSchedule()}
            aria-label="次月へ"
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
                {formatMonthDisplay(displayYear, displayMonth)}
                のスケジュールは準備中です
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

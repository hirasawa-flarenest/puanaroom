"use client";

import { useState } from "react";
import type { FAQ, FAQCategory } from "@/lib/types";

export interface FAQSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  faqs: FAQ[];
  showCategories?: boolean; // カテゴリーフィルターを表示するか
}

const categoryLabels: Record<FAQCategory, string> = {
  usage: "利用について",
  facility: "施設について",
  event: "イベントについて",
  reservation: "予約について",
  other: "その他",
};

export function FAQSection({
  id,
  title,
  subtitle,
  faqs,
  showCategories = false,
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    FAQCategory | "all"
  >("all");

  // カテゴリーフィルタリング
  const filteredFAQs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (faqId: string) => {
    setOpenId(openId === faqId ? null : faqId);
  };

  // カテゴリー一覧を取得
  const categories: FAQCategory[] = Array.from(
    new Set(faqs.map((faq) => faq.category).filter(Boolean) as FAQCategory[])
  );

  return (
    <section id={id} className="common-section faq-section">
      <div className="common-section__inner">
        <header className="section-header">
          <h2 className="section-header__title">{title}</h2>
          <p className="section-header__subtitle">{subtitle}</p>
        </header>

        {showCategories && categories.length > 0 && (
          <div className="faq-categories">
            <button
              className={`faq-categories__button ${
                selectedCategory === "all"
                  ? "faq-categories__button--active"
                  : ""
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              すべて
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`faq-categories__button ${
                  selectedCategory === category
                    ? "faq-categories__button--active"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        )}

        <div className="faq-list">
          {filteredFAQs.length === 0 ? (
            <p className="faq-list__empty">該当するFAQがありません。</p>
          ) : (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${
                  openId === faq.id ? "faq-item--open" : ""
                }`}
              >
                <button
                  className="faq-item__question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-item__question-icon">Q</span>
                  <span className="faq-item__question-text">
                    {faq.question}
                  </span>
                  <span
                    className={`faq-item__toggle-icon ${
                      openId === faq.id
                        ? "faq-item__toggle-icon--open"
                        : ""
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className="faq-item__answer-wrapper"
                  aria-hidden={openId !== faq.id}
                >
                  <div className="faq-item__answer">
                    <span className="faq-item__answer-icon">A</span>
                    <p className="faq-item__answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

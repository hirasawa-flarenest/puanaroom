"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date?: string;
  description?: string;
  category?: {
    label: string;
    className: string;
  };
  image?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  content: string; // HTML文字列
}

export function Modal({
  isOpen,
  onClose,
  title,
  date,
  description,
  category,
  image,
  content,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // モーダルが開いたときの処理
  useEffect(() => {
    if (isOpen) {
      // 現在のアクティブ要素を保存
      previousActiveElement.current = document.activeElement as HTMLElement;

      // bodyのスクロールを無効化（iOS対応を含む）
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      // モーダルにフォーカス
      modalRef.current?.focus();

      return () => {
        // bodyのスクロールを復元
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    } else {
      // 以前のアクティブ要素にフォーカスを戻す
      previousActiveElement.current?.focus();
    }
  }, [isOpen]);

  // Escapeキーでモーダルを閉じる
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // オーバーレイクリックでモーダルを閉じる
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-container"
        ref={modalRef}
        tabIndex={-1}
        role="document"
      >
        <div className="modal-body">
          <div className="modal-meta">
            {date && <time className="modal-date">{date}</time>}
            {category && (
              <span className={`modal-category ${category.className}`}>
                {category.label}
              </span>
            )}
          </div>

          <h2 id="modal-title" className="modal-title">
            {title}
          </h2>

          {description && (
            <p className="modal-description">{description}</p>
          )}

          {image && (
            <div className="modal-image">
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          )}

          <div
            className="modal-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="modal-footer">
          <button
            className="modal-close-button"
            onClick={onClose}
            aria-label="閉じる"
            type="button"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}

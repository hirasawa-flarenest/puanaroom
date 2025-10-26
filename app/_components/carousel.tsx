"use client";

import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
  itemWidth?: number; // デフォルトの幅（px）
}

/**
 * 横スクロール可能なカルーセルコンポーネント
 * スマホ対応のスクロールバーデザインを含む
 */
export function Carousel({ children, className = "", itemWidth = 280 }: CarouselProps) {
  return (
    <div className={`carousel ${className}`}>
      <div
        className="carousel__scroll"
        style={{
          ['--carousel-item-width' as string]: `${itemWidth}px`
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * カルーセルのアイテムコンポーネント
 */
export function CarouselItem({ children, className = "" }: CarouselItemProps) {
  return (
    <div className={`carousel__item ${className}`}>
      {children}
    </div>
  );
}

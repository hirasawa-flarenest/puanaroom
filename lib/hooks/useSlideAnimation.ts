import { useState, useEffect } from "react";

type SlideDirection = "left" | "right" | null;

interface UseSlideAnimationReturn {
  direction: SlideDirection;
  setDirection: (direction: SlideDirection) => void;
  slideLeft: () => void;
  slideRight: () => void;
}

/**
 * スライドアニメーション機能を提供するカスタムフック
 * @param duration - アニメーション終了後にdirectionをリセットするまでの時間(ms)
 * @returns スライドアニメーション関連の状態と関数
 */
export function useSlideAnimation(
  duration: number = 400
): UseSlideAnimationReturn {
  const [direction, setDirection] = useState<SlideDirection>(null);

  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => setDirection(null), duration);
      return () => clearTimeout(timer);
    }
  }, [direction, duration]);

  const slideLeft = () => setDirection("left");
  const slideRight = () => setDirection("right");

  return {
    direction,
    setDirection,
    slideLeft,
    slideRight,
  };
}

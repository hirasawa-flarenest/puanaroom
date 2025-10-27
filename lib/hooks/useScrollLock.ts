import { useEffect } from "react";

/**
 * スクロールをロックするカスタムフック
 * モーダルやサイドバーを開いたときに背景のスクロールを防ぐ
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      // 現在のスクロール位置を保存
      const scrollY = window.scrollY;

      // bodyのスクロールを無効化（iOS対応を含む）
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        // bodyのスクロールを復元
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isLocked]);
}

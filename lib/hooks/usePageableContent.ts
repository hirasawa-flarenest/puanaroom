import { useState, useMemo } from "react";

interface UsePageableContentProps<T> {
  items: T[];
  itemsPerPage: number;
}

interface UsePageableContentReturn<T> {
  currentPage: number;
  totalPages: number;
  displayedItems: T[];
  goToNextPage: () => void;
  goToPrevPage: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

/**
 * ページネーション機能を提供するカスタムフック
 * @param items - ページネーション対象のアイテム配列
 * @param itemsPerPage - 1ページあたりのアイテム数
 * @returns ページネーション関連の状態と関数
 */
export function usePageableContent<T>({
  items,
  itemsPerPage,
}: UsePageableContentProps<T>): UsePageableContentReturn<T> {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const displayedItems = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;

  const goToNextPage = () => {
    if (canGoNext) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (canGoPrev) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    displayedItems,
    goToNextPage,
    goToPrevPage,
    canGoNext,
    canGoPrev,
  };
}

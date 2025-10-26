/**
 * microCMSのよくあるご質問データを内部型にマッピング
 */

import type { MicroCMSFAQ } from "../types/microcms";
import type { FAQ, FAQCategory } from "../types";

/**
 * カテゴリ名から内部カテゴリ型へマッピング
 */
function mapCategoryName(categoryNames: string[]): FAQCategory {
  // 最初のカテゴリ名を使用
  const categoryName = categoryNames[0]?.toLowerCase() || "";

  if (categoryName.includes("利用") || categoryName.includes("使い方")) {
    return "usage";
  }
  if (categoryName.includes("施設") || categoryName.includes("設備")) {
    return "facility";
  }
  if (categoryName.includes("イベント") || categoryName.includes("催し")) {
    return "event";
  }
  if (categoryName.includes("予約")) {
    return "reservation";
  }
  return "other";
}

/**
 * microCMSのFAQデータを内部型にマッピング
 */
export function mapMicroCMSFAQ(data: MicroCMSFAQ, index: number): FAQ {
  return {
    id: data.id,
    question: data.question,
    answer: data.answer,
    category: mapCategoryName(data.category),
    order: index + 1, // 配列のインデックスから順序を生成
  };
}

/**
 * microCMSのFAQ配列を内部型にマッピング
 */
export function mapMicroCMSFAQs(data: MicroCMSFAQ[]): FAQ[] {
  return data.map((faq, index) => mapMicroCMSFAQ(faq, index));
}

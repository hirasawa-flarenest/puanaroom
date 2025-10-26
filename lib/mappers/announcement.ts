/**
 * microCMSのお知らせデータを内部型にマッピング
 */

import type { MicroCMSAnnouncement } from "../types/microcms";
import type { Announcement, AnnouncementCategory } from "../types";

/**
 * カテゴリ名から内部カテゴリ型へマッピング
 */
function mapCategoryName(categoryNames: string[]): AnnouncementCategory {
  // 最初のカテゴリ名を使用
  const categoryName = categoryNames[0]?.toLowerCase() || "";

  if (categoryName.includes("お知らせ") || categoryName.includes("通知") || categoryName.includes("更新")) {
    return "notice";
  }
  if (categoryName.includes("イベント") || categoryName.includes("催し")) {
    return "event";
  }
  if (categoryName.includes("休館") || categoryName.includes("閉館") || categoryName.includes("休み")) {
    return "closure";
  }
  return "other";
}

/**
 * 日付を YYYY.MM.DD 形式にフォーマット
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

/**
 * microCMSのお知らせデータを内部型にマッピング
 */
export function mapMicroCMSAnnouncement(
  data: MicroCMSAnnouncement
): Announcement {
  return {
    date: formatDate(data.publishedAt || data.createdAt),
    title: data.title,
    content: data.content,
    category: mapCategoryName(data.category),
  };
}

/**
 * microCMSのお知らせ配列を内部型にマッピング
 */
export function mapMicroCMSAnnouncements(
  data: MicroCMSAnnouncement[]
): Announcement[] {
  return data.map(mapMicroCMSAnnouncement);
}

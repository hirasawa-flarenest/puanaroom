/**
 * microCMSの活動紹介データを内部型にマッピング
 */

import type { MicroCMSActivity } from "../types/microcms";
import type { Activity } from "../types";

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
 * microCMSの活動紹介データを内部型にマッピング
 */
export function mapMicroCMSActivity(data: MicroCMSActivity): Activity {
  return {
    date: formatDate(data.activityDate || data.publishedAt || data.createdAt),
    title: data.title,
    description: data.description,
    content: data.content,
    image: data.image.url,
  };
}

/**
 * microCMSの活動紹介配列を内部型にマッピング
 */
export function mapMicroCMSActivities(data: MicroCMSActivity[]): Activity[] {
  return data.map(mapMicroCMSActivity);
}

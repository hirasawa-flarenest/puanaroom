/**
 * microCMSの月間スケジュールデータを内部型にマッピング
 */

import type { MicroCMSMonthSchedule } from "../types/microcms";
import type { MonthSchedule } from "../types";

/**
 * microCMSの月間スケジュールデータを内部型にマッピング
 */
export function mapMicroCMSMonthSchedule(data: MicroCMSMonthSchedule): MonthSchedule {
  // ISO日付文字列から年と月を抽出（日本時間JST=UTC+9で表示）
  const date = new Date(data.year);

  // 日本時間での年と月を取得
  const jstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const year = jstDate.getUTCFullYear();
  const month = jstDate.getUTCMonth() + 1; // 0-indexedなので+1

  return {
    year,
    month,
    imageUrl: data.scheduleImage?.url || "",
    imageAlt: `${year}年${month}月のスケジュール表`,
  };
}

/**
 * microCMSの月間スケジュール配列を内部型にマッピング
 */
export function mapMicroCMSMonthSchedules(data: MicroCMSMonthSchedule[]): MonthSchedule[] {
  return data.map(mapMicroCMSMonthSchedule);
}

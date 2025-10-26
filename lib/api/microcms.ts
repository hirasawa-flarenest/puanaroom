import { client } from "../microcms";
import type {
  MicroCMSAnnouncement,
  MicroCMSActivity,
  MicroCMSMonthSchedule,
  MicroCMSFAQ,
  MicroCMSClosureNotice,
} from "../types/microcms";
import type { MicroCMSQueries } from "microcms-js-sdk";

/**
 * お知らせ一覧を取得
 */
export const getAnnouncements = async (queries?: MicroCMSQueries) => {
  const data = await client.get<{
    contents: MicroCMSAnnouncement[];
    totalCount: number;
    offset: number;
    limit: number;
  }>({
    endpoint: "news",
    queries: {
      orders: "-publishedAt",
      ...queries,
    },
  });

  return data;
};

/**
 * お知らせ詳細を取得
 */
export const getAnnouncement = async (contentId: string) => {
  const data = await client.get<MicroCMSAnnouncement>({
    endpoint: "news",
    contentId,
  });

  return data;
};

/**
 * 活動紹介一覧を取得
 */
export const getActivities = async (queries?: MicroCMSQueries) => {
  const data = await client.get<{
    contents: MicroCMSActivity[];
    totalCount: number;
    offset: number;
    limit: number;
  }>({
    endpoint: "activities",
    queries: {
      orders: "-publishedAt",
      ...queries,
    },
  });

  return data;
};

/**
 * 活動紹介詳細を取得
 */
export const getActivity = async (contentId: string) => {
  const data = await client.get<MicroCMSActivity>({
    endpoint: "activities",
    contentId,
  });

  return data;
};

/**
 * 月間スケジュール一覧を取得
 */
export const getMonthSchedules = async (queries?: MicroCMSQueries) => {
  const data = await client.get<{
    contents: MicroCMSMonthSchedule[];
    totalCount: number;
    offset: number;
    limit: number;
  }>({
    endpoint: "schedules",
    queries: {
      orders: "-year,-month",
      ...queries,
    },
  });

  return data;
};

/**
 * 月間スケジュール詳細を取得
 */
export const getMonthSchedule = async (contentId: string) => {
  const data = await client.get<MicroCMSMonthSchedule>({
    endpoint: "schedules",
    contentId,
  });

  return data;
};

/**
 * よくあるご質問一覧を取得
 */
export const getFAQs = async (queries?: MicroCMSQueries) => {
  const data = await client.get<{
    contents: MicroCMSFAQ[];
    totalCount: number;
    offset: number;
    limit: number;
  }>({
    endpoint: "faqs",
    queries: {
      orders: "order",
      ...queries,
    },
  });

  return data;
};

/**
 * よくあるご質問詳細を取得
 */
export const getFAQ = async (contentId: string) => {
  const data = await client.get<MicroCMSFAQ>({
    endpoint: "faqs",
    contentId,
  });

  return data;
};

/**
 * ヘッダーお知らせバナーを取得（単一コンテンツ）
 */
export const getClosureNotice = async () => {
  const data = await client.get<MicroCMSClosureNotice>({
    endpoint: "closure-notice",
  });

  return data;
};

import type { NavigationItem } from "../types";

/**
 * サイト共通の定数
 */

// ヘッダーお知らせバナーはmicroCMSから取得するため空文字列
export const CLOSURE_NOTICE = "";

export const HERO_TAGLINE = "横浜市補助事業";

export const INSTAGRAM_URL = "https://www.instagram.com/hanairo_aoba?igsh=MTJncnh4enFsd2VyZA==";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: "about", title: "ひろば紹介" },
  { id: "guide", title: "ご利用案内" },
  { id: "news", title: "月間スケジュール" },
  { id: "announcements", title: "お知らせ" },
  { id: "faq", title: "よくあるご質問" },
  { id: "contact", title: "お問い合わせ" },
  { id: "company", title: "運営会社" },
];

export const FOOTER_LINKS = [
  "個人情報保護方針（準備中）",
  "サイトマップ（構成案）",
  "著作権表示 © Puanaroom",
  "関連リンク：地域子育て支援センター一覧",
];

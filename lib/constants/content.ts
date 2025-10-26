import type {
  PhotoItem,
  Activity,
  Announcement,
  FAQ,
  MonthSchedule,
  SectionContent,
} from "../types";

/**
 * コンテンツデータ定数
 */

export const PHOTO_GALLERY_PHOTOS: PhotoItem[] = [
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_1.jpg",
    alt: "ひろばの様子1",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_2.jpg",
    alt: "ひろばの様子2",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_5.jpg",
    alt: "ひろばの様子3",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_6.jpg",
    alt: "ひろばの様子4",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_9.jpg",
    alt: "ひろばの様子5",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_11.jpg",
    alt: "ひろばの様子6",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_14.jpg",
    alt: "ひろばの様子7",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_17.jpg",
    alt: "ひろばの様子8",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_19.jpg",
    alt: "ひろばの様子9",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_20.jpg",
    alt: "ひろばの様子10",
  },
];

// 活動紹介データはmicroCMSから取得するため空配列
export const ACTIVITIES: Activity[] = [];

// 月間スケジュールデータはmicroCMSから取得するため空配列
export const MONTHLY_SCHEDULES: MonthSchedule[] = [];

// お知らせデータはmicroCMSから取得するため空配列
export const ANNOUNCEMENTS: Announcement[] = [];

// よくあるご質問データはmicroCMSから取得するため空配列
export const FAQS: FAQ[] = [];

export const SECTIONS: SectionContent[] = [
  {
    id: "guide",
    title: "ご利用案内",
    summary:
      "初めて利用する方が安心できるように、利用方法や料金、注意事項をまとめる実務的な内容です。",
    groups: [
      {
        title: "押さえておきたいポイント",
        items: [
          {
            label: "利用方法（登録制／自由利用）",
            description:
              "初回来館時の登録手順と、予約が不要な自由利用枠の案内を分かりやすく記載します。",
          },
          {
            label: "開館日時・利用時間",
            description:
              "平日・土曜の開館時間、休館日、混雑しやすい時間帯などをタイムテーブル形式で掲載予定です。",
          },
          {
            label: "利用料金",
            description:
              "ひろば利用料、イベント参加費、親子セット料金などの目安を表にまとめます。",
            note: "料金改定の可能性があるため、最新情報更新日も併記します。",
          },
          {
            label: "一時預かり／予約制サービス",
            description:
              "一時預かりの利用枠や予約フォームへの導線。キャンセルポリシーもここで案内します。",
          },
          {
            label: "注意事項（持ち物・安全面）",
            description:
              "必要な持ち物、アレルギー対応、体調不良時のお願いなど安全面のガイドラインを箇条書きで掲載します。",
          },
          {
            label: "LINE／電話での予約案内",
            description:
              "公式LINEの友だち追加QRコードや、予約専用電話番号の受付時間を記載する予定です。",
          },
        ],
      },
    ],
  },
  {
    id: "news",
    title: "最新情報・お知らせ",
    summary:
      "イベントや休館情報など、最新のトピックスを更新するニュースエリアです。",
    groups: [
      {
        title: "更新予定のトピック",
        items: [
          {
            label: "新着イベント",
            description:
              "申し込み受付中のイベントをカード形式で3件ほど表示し、詳細ページへ誘導予定です。",
          },
          {
            label: "休館日・特別開館日",
            description:
              "祝日やメンテナンスによる休館情報、講座前後の特別開館時間をカレンダーと連動させます。",
          },
          {
            label: "お知らせ一覧",
            description:
              "ブログ形式の記事一覧を作成し、カテゴリーやタグで絞り込みできる仕様を想定しています。",
          },
        ],
      },
    ],
  },
];

import type { Metadata, Viewport } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-maru-gothic",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://puanaroom.com'),
  title: {
    default: "おやこの広場 はないろ｜横浜市青葉区の子育てひろば",
    template: "%s | おやこの広場 はないろ",
  },
  icons: {
    icon: "/images/Puana-Logo.jpg",
    apple: "/images/Puana-Logo.jpg",
  },
  description: "横浜市青葉区市ヶ尾にある0歳から3歳の未就園児と保護者が集う子育てひろば。子育て相談、イベント開催、親子交流の場として地域に根ざした温かい空間を提供しています。",
  keywords: [
    "子育てひろば",
    "親子ひろば",
    "横浜市",
    "青葉区",
    "市ヶ尾",
    "0歳",
    "1歳",
    "2歳",
    "3歳",
    "未就園児",
    "子育て支援",
    "育児相談",
    "親子イベント",
    "地域子育て支援拠点",
    "はないろ",
  ],
  authors: [{ name: "株式会社Puana" }],
  creator: "株式会社Puana",
  publisher: "株式会社Puana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://puanaroom.com",
    siteName: "おやこの広場 はないろ",
    title: "おやこの広場 はないろ｜横浜市青葉区の子育てひろば",
    description: "横浜市青葉区市ヶ尾にある0歳から3歳の未就園児と保護者が集う子育てひろば。子育て相談、イベント開催、親子交流の場として地域に根ざした温かい空間を提供しています。",
    images: [
      {
        url: "/images/アイキャッチ_puanaroom.jpg",
        width: 1920,
        height: 1080,
        alt: "おやこの広場 はないろの様子",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "おやこの広場 はないろ｜横浜市青葉区の子育てひろば",
    description: "横浜市青葉区市ヶ尾にある0歳から3歳の未就園児と保護者が集う子育てひろば。子育て相談、イベント開催、親子交流の場として地域に根ざした温かい空間を提供しています。",
    images: ["/images/アイキャッチ_puanaroom.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console の確認コード（必要に応じて追加）
    // google: "your-verification-code",
  },
  alternates: {
    canonical: "https://puanaroom.com",
  },
  category: "子育て支援",
  other: {
    "geo.region": "JP-14",
    "geo.placename": "横浜市青葉区",
    "geo.position": "35.5619458;139.5448289",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0ea89b",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={zenMaruGothic.className}>{children}</body>
    </html>
  );
}

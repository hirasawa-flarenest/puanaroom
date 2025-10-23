import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-maru-gothic",
});

export const metadata: Metadata = {
  title: "Puanaroom",
  description: "Connect, share, and discover comfortable work and study spots.",
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

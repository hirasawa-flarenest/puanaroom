/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ← 完全SSGにする
  images: { unoptimized: true }, // next/imageの最適化を無効化（SSR依存のため）
  // trailingSlash: true,     // 404回避で有効にするケースも。必要に応じてON
};
module.exports = nextConfig;

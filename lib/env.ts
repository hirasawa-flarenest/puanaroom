import { z } from "zod";

/**
 * 環境変数のスキーマ定義
 */
const envSchema = z.object({
  MICROCMS_SERVICE_DOMAIN: z.string().min(1, "MICROCMS_SERVICE_DOMAIN is required"),
  MICROCMS_API_KEY: z.string().min(1, "MICROCMS_API_KEY is required"),
});

/**
 * 環境変数をバリデーションして返す
 */
function validateEnv() {
  const env = {
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  };

  const result = envSchema.safeParse(env);

  if (!result.success) {
    console.error("❌ 環境変数のバリデーションに失敗しました:");
    console.error(result.error.format());
    throw new Error("環境変数が正しく設定されていません");
  }

  return result.data;
}

/**
 * バリデーション済み環境変数
 */
export const env = validateEnv();

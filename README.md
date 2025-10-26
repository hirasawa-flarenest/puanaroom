# Puanaroom

「おやこの広場 はないろ」の公式Webサイト。横浜市青葉区市ヶ尾にある0歳から3歳の未就園児と保護者が集う子育てひろばの情報を提供しています。

## 技術スタック

- **フレームワーク**: Next.js 14.2.3 (App Router)
- **言語**: TypeScript 5.4.5
- **スタイリング**: CSS Modules + CSS Variables
- **CMS**: microCMS (ヘッドレスCMS)
- **パッケージマネージャー**: pnpm
- **デプロイ**: AWS Amplify (静的エクスポート)

## 主な機能

- レスポンシブデザイン（モバイルファースト）
- PWA対応（Progressive Web App）
- SEO最適化（構造化データ、サイトマップ、robots.txt）
- microCMS連携（お知らせ、活動紹介、FAQ、月間スケジュール）
- アクセシビリティ対応（WAI-ARIA、セマンティックHTML）
- Instagram連携

## セットアップ

### 前提条件

- Node.js 18.17.0 以上
- pnpm 10.14.0 以上

### インストール

```bash
pnpm install
```

asdf を利用している場合は、Node.js と pnpm を揃えるために事前に以下を実行してください。

```bash
asdf install
```

### 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```bash
MICROCMS_SERVICE_DOMAIN=your-service-name
MICROCMS_API_KEY=your-api-key
```

microCMSの詳細な設定方法については、[microCMSセットアップガイド](./docs/MICROCMS_SETUP.md)を参照してください。

## 開発

### 開発サーバーの起動

```bash
pnpm dev
```

`http://localhost:3001` にアクセスするとアプリを確認できます。

### ビルド

```bash
pnpm build
```

静的ファイルが `out/` ディレクトリに出力されます。

### リント

```bash
pnpm lint
```

## プロジェクト構成

```
puanaroom/
├── app/                        # Next.js App Router
│   ├── _components/           # Reactコンポーネント
│   ├── globals.css            # グローバルスタイル
│   ├── layout.tsx             # ルートレイアウト
│   ├── page.tsx               # トップページ
│   ├── manifest.ts            # PWAマニフェスト
│   ├── robots.ts              # robots.txt生成
│   └── sitemap.ts             # サイトマップ生成
├── lib/                       # ユーティリティ・共通ロジック
│   ├── api/                   # API クライアント
│   ├── constants/             # 定数定義
│   ├── hooks/                 # カスタムフック
│   ├── mappers/               # データマッパー
│   └── types/                 # TypeScript型定義
├── public/                    # 静的ファイル
│   └── images/                # 画像アセット
├── docs/                      # ドキュメント
│   └── MICROCMS_SETUP.md     # microCMS設定ガイド
└── README.md                  # このファイル
```

## デプロイ

このプロジェクトはAWS Amplifyにデプロイされています。

- `main` ブランチへのpushで自動デプロイが実行されます
- microCMS更新時もWebhookで自動ビルドされます

## ライセンス

Private - 株式会社Puana

## お問い合わせ

- 電話: 090-6510-3126
- Instagram: [@hanairo_ichigao](https://www.instagram.com/hanairo_ichigao/)

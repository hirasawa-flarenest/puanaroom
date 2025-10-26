# microCMS セットアップガイド

このドキュメントでは、「おやこの広場 はないろ」Webサイトで使用するmicroCMSの設定と実装仕様について説明します。

## 目次

1. [microCMS API設定](#1-microcms-api設定)
2. [環境変数の設定](#2-環境変数の設定)
3. [API実装仕様](#3-api実装仕様)
4. [UI/UX仕様](#4-uiux仕様)
5. [Webhook設定](#5-webhook設定)

---

## 1. microCMS API設定

### 1.1 サービスの作成

1. [microCMS](https://microcms.io/)にログイン
2. 新しいサービスを作成
3. サービスIDをメモ（例: `puanaroom`）

### 1.2 APIエンドポイント

以下の5つのAPIを作成します。

#### (1) お知らせ (news)

**API設定**:
- **API種別**: リスト形式
- **エンドポイント**: `news`

**フィールド設定**:

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|-------------|--------|------|------|------|
| title | タイトル | テキストフィールド | ✓ | お知らせのタイトル（60文字以内推奨） |
| postDate | 投稿日 | 日時 | ✓ | お知らせの投稿日（カード表示用） |
| description | 要約 | テキストエリア | ✓ | カード一覧表示用の要約（80-100文字程度） |
| content | 本文 | リッチエディタ | ✓ | モーダルで表示される詳細な本文（HTML対応） |
| category | カテゴリ | コンテンツ参照（カテゴリAPI） | ✓ | お知らせの種別（リレーション型） |

**カテゴリAPIについて**:
- カテゴリは別途「カテゴリAPI」として作成されており、リレーション型で参照
- カテゴリAPIには以下のようなデータを登録:
  - "更新情報", "お知らせ", "イベント", "休館情報", "その他" など
- カテゴリの表示スタイル（背景色など）はフロントエンド側で`category.name`に基づいて判定

**表示仕様**:
- **カード表示**: タイトル、description、カテゴリバッジ、日付を表示
- **モーダル表示**: カード内のコンテンツをクリックすると、title、content、カテゴリ、日付を含むモーダルを表示

---

#### (2) 活動紹介 (activities)

**API設定**:
- **API種別**: リスト形式
- **エンドポイント**: `activities`

**フィールド設定**:

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|-------------|--------|------|------|------|
| title | タイトル | テキストフィールド | ✓ | 活動のタイトル（40文字以内推奨） |
| activityDate | 活動日 | 日時 | ✓ | 活動が行われた日付（カード表示用） |
| description | 要約 | テキストエリア | ✓ | カード一覧表示用の要約（80-100文字程度） |
| content | 本文 | リッチエディタ | ✓ | モーダルで表示される詳細な内容（HTML対応） |
| image | メイン画像 | 画像 | ✓ | カードおよびモーダル表示用の画像 |

**表示仕様**:
- **カード表示**: image、title、descriptionを表示
- **モーダル表示**: カード内のコンテンツをクリックすると、title、content、image、日付を含むモーダルを表示

---

#### (3) 月間スケジュール (schedules)

**API設定**:
- **API種別**: リスト形式
- **エンドポイント**: `schedules`

**フィールド設定**:

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|-------------|--------|------|------|------|
| year | 年 | 数値 | ✓ | スケジュールの年（例: 2025） |
| month | 月 | 数値 | ✓ | スケジュールの月（1-12） |
| scheduleImage | スケジュール画像 | 画像 | ✓ | 月間スケジュール表の画像（PDF等を画像化したもの） |

**表示仕様**:
- 最新3ヶ月分のスケジュールを表示
- 各月のスケジュール画像をクリックすると拡大表示

---

#### (4) よくあるご質問 (faqs)

**API設定**:
- **API種別**: リスト形式
- **エンドポイント**: `faqs`

**フィールド設定**:

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|-------------|--------|------|------|------|
| question | 質問 | テキストフィールド | ✓ | 質問内容（100文字以内推奨） |
| answer | 回答 | テキストエリア | ✓ | 回答内容（改行可能） |
| category | カテゴリ | セレクトフィールド | ✓ | 質問のカテゴリ |
| order | 表示順序 | 数値 | ✓ | 表示順（小さい順に表示、推奨: 10, 20, 30...） |

**カテゴリの選択肢**:
- `usage`: 利用について
- `facility`: 施設について
- `event`: イベントについて
- `reservation`: 予約について
- `other`: その他

**表示仕様**:
- アコーディオン形式で表示
- `order`フィールドの昇順でソート

---

#### (5) ヘッダーお知らせバナー (closure-notice)

**API設定**:
- **API種別**: オブジェクト形式
- **エンドポイント**: `closure-notice`

**フィールド設定**:

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|-------------|--------|------|------|------|
| message | メッセージ | テキストフィールド | ✓ | ヘッダーに表示するメッセージ（50文字以内推奨） |
| isVisible | 表示/非表示 | 真偽値 | ✓ | バナーを表示するかどうか |

**表示仕様**:
- `isVisible`が`true`の場合、サイドバーのヘッダー部分にメッセージを表示
- 緊急のお知らせや重要な情報を伝えるために使用

---

## 2. 環境変数の設定

### 2.1 ローカル開発環境

プロジェクトルートに`.env.local`ファイルを作成し、以下を設定:

```bash
MICROCMS_SERVICE_DOMAIN=your-service-name
MICROCMS_API_KEY=your-api-key
```

**パラメータ説明**:
- `MICROCMS_SERVICE_DOMAIN`: microCMSのサービスID（例: `puanaroom`）
- `MICROCMS_API_KEY`: microCMSで取得したAPIキー（GET権限）

**APIキーの取得方法**:
1. microCMS管理画面で「API設定」→「APIキー」を開く
2. 「GET」権限のあるAPIキーを作成
3. APIキーをコピー

### 2.2 本番環境（AWS Amplify）

1. Amplifyコンソールで該当アプリを開く
2. 「環境変数」セクションに移動
3. 以下の環境変数を追加:
   - キー: `MICROCMS_SERVICE_DOMAIN`、値: サービスID
   - キー: `MICROCMS_API_KEY`、値: APIキー

---

## 3. API実装仕様

### 3.1 APIクライアント

`lib/api/microcms.ts`にmicroCMS API クライアントを実装しています。

**利用可能な関数**:

```typescript
// お知らせ
getAnnouncements(queries?: MicroCMSQueries): Promise<MicroCMSListResponse<Announcement>>
getAnnouncement(contentId: string): Promise<Announcement>

// 活動紹介
getActivities(queries?: MicroCMSQueries): Promise<MicroCMSListResponse<Activity>>
getActivity(contentId: string): Promise<Activity>

// 月間スケジュール
getMonthSchedules(queries?: MicroCMSQueries): Promise<MicroCMSListResponse<MonthSchedule>>
getMonthSchedule(contentId: string): Promise<MonthSchedule>

// よくあるご質問
getFAQs(queries?: MicroCMSQueries): Promise<MicroCMSListResponse<FAQ>>
getFAQ(contentId: string): Promise<FAQ>

// ヘッダーお知らせバナー
getClosureNotice(): Promise<ClosureNotice>
```

### 3.2 使用例

```typescript
import { getAnnouncements, getFAQs } from "@/lib/api/microcms";

// お知らせ一覧を取得（最新5件）
const announcements = await getAnnouncements({
  limit: 5,
  orders: '-publishedAt'
});

// FAQをカテゴリでフィルタリングして取得
const usageFAQs = await getFAQs({
  filters: "category[equals]usage",
  orders: 'order'
});

// 特定のお知らせを取得
const announcement = await getAnnouncement('content-id');
```

### 3.3 型定義

主要な型は`lib/types.ts`に定義されています:

```typescript
// お知らせのカテゴリ
interface AnnouncementCategory {
  id: string;
  name: string; // 例: "更新情報", "お知らせ", "イベント"
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// お知らせ
interface Announcement {
  id: string;
  title: string;
  postDate: string; // 投稿日（表示用）
  description: string; // 一覧表示用の要約
  content: string;
  category: AnnouncementCategory; // リレーション型
  publishedAt: string;
  updatedAt: string;
}

// 活動紹介
interface Activity {
  id: string;
  title: string;
  activityDate: string; // 活動日（表示用）
  description: string;
  content: string;
  image: { url: string; width: number; height: number };
  publishedAt: string;
  updatedAt: string;
}

// 月間スケジュール
interface MonthSchedule {
  id: string;
  year: number;
  month: number;
  scheduleImage: { url: string; width: number; height: number };
  publishedAt: string;
  updatedAt: string;
}

// FAQ
interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'usage' | 'facility' | 'event' | 'reservation' | 'other';
  order: number;
  publishedAt: string;
  updatedAt: string;
}

// ヘッダーお知らせバナー
interface ClosureNotice {
  message: string;
  isVisible: boolean;
  publishedAt: string;
  updatedAt: string;
}
```

---

## 4. UI/UX仕様

### 4.1 モーダル表示仕様

お知らせと活動紹介のコンテンツをクリックすると、詳細内容をモーダルで表示します。

**モーダルコンポーネント**: `app/_components/modal.tsx`

**モーダル構造**:

```
┌─────────────────────────────────┐
│      オーバーレイ（半透明）        │
│  ┌───────────────────────────┐  │
│  │  コンテンツエリア（白背景） │  │
│  │  ┌─────────────────────┐  │  │
│  │  │ メタ情報（日付・カテゴリ）│  │
│  │  ├─────────────────────┤  │  │
│  │  │ タイトル              │  │  │
│  │  ├─────────────────────┤  │  │
│  │  │ 画像（オプション）     │  │  │
│  │  ├─────────────────────┤  │  │
│  │  │ 本文コンテンツ        │  │  │
│  │  │ （スクロール可能）     │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │    [閉じる] ボタン        │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**デザイン仕様**:
- **コンテンツエリア**:
  - 白背景（`var(--bg-surface)`）
  - 角丸（`var(--radius-lg)` = 32px）
  - ドロップシャドウ
  - 縦スクロール可能
  - 最大高さ: 90dvh（動的ビューポート対応）

- **閉じるボタン**:
  - コンテンツエリアと完全分離
  - 背景なし（透明）
  - 画面下部に固定表示
  - ボタンスタイル: ピンクのグラデーション背景、白文字

- **操作方法**:
  - オーバーレイクリックで閉じる
  - Escキーで閉じる
  - 閉じるボタンクリックで閉じる

**アクセシビリティ**:
- `role="dialog"` および `aria-modal="true"` 属性
- モーダル表示時は背景スクロールを無効化
- フォーカストラップ実装
- キーボード操作対応

### 4.2 レスポンシブ対応

**モバイル（スマートフォン）**:
- モーダルとサイドバーは画面全体に表示
- iOS SafariのアドレスバーやツールバーをカバーするためのViewport設定
- `dvh`（動的ビューポート）を使用して画面サイズに対応
- タッチ操作最適化（`touch-action`, `overscroll-behavior`）
- セーフエリア対応（`env(safe-area-inset-*)`）

**タブレット・デスクトップ**:
- モーダルは中央配置、最大幅800px
- サイドバーは右側からスライドイン

### 4.3 カテゴリバッジスタイル

お知らせのカテゴリ名に応じて異なる背景色を適用:

| カテゴリ名 | 背景色 | テキスト色 | 判定方法 |
|---------|--------|-----------|---------|
| 「お知らせ」を含む | パステルブルー | ブルーグレー | `category.name`に「お知らせ」が含まれる |
| 「イベント」を含む | パステルピンク | ブランドダーク | `category.name`に「イベント」が含まれる |
| 「休館」を含む | インフォ背景 | オレンジ | `category.name`に「休館」が含まれる |
| その他 | セクションヘッダー背景 | ミュート | 上記以外 |

**実装例**:
```typescript
const getCategoryStyle = (categoryName: string) => {
  if (categoryName.includes('お知らせ')) return 'announcement-badge--notice';
  if (categoryName.includes('イベント')) return 'announcement-badge--event';
  if (categoryName.includes('休館')) return 'announcement-badge--closure';
  return 'announcement-badge--other';
};
```

---

## 5. Webhook設定

microCMSのコンテンツが更新されたときに自動的にビルドを実行するため、Webhookを設定します。

### 5.1 Webhook URLの取得

1. Amplifyコンソールで該当アプリを開く
2. 「ビルド設定」→「Webhook」セクションを開く
3. 新しいWebhookを作成し、URLをコピー

### 5.2 microCMSでWebhookを設定

各APIエンドポイント（announcements、activities、schedules、faqs、closure-notice）で以下の設定を行います:

1. microCMS管理画面で対象のAPIを開く
2. 「API設定」→「Webhook」タブを開く
3. 「追加」をクリック
4. AmplifyのWebhook URLを入力
5. トリガーを選択:
   - ✓ コンテンツの公開
   - ✓ コンテンツの更新
   - ✓ コンテンツの削除
6. 保存

**動作確認**:
- microCMSでコンテンツを公開・更新・削除
- Amplifyで自動ビルドが開始されることを確認

---

## 6. トラブルシューティング

### 6.1 API接続エラー

**症状**: データが取得できない

**確認事項**:
1. `.env.local`または環境変数が正しく設定されているか
2. `MICROCMS_SERVICE_DOMAIN`がサービスIDと一致しているか
3. `MICROCMS_API_KEY`が正しいか、GET権限があるか
4. microCMSでコンテンツが公開されているか

### 6.2 画像が表示されない

**症状**: 画像URLが取得できているが表示されない

**確認事項**:
1. Next.jsの`next.config.js`で画像ドメインが許可されているか
2. microCMSの画像URLが正しいか

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
}
```

### 6.3 モーダルが正しく表示されない

**症状**: スマホでモーダルが画面全体に表示されない

**確認事項**:
1. `app/layout.tsx`で`viewport.viewportFit: "cover"`が設定されているか
2. CSSで`dvh`（動的ビューポート）が使用されているか
3. `touch-action`と`overscroll-behavior`が適切に設定されているか

---

## 7. ベストプラクティス

### 7.1 コンテンツ作成ガイドライン

**お知らせ・活動紹介**:
- **タイトル**: 簡潔で分かりやすく（40-60文字）
- **description**: カード表示用の要約、結論を先に書く（80-100文字）
- **content**: 詳細情報、リッチエディタでHTML装飾可能
- **画像**: 横長推奨（16:9または3:2）、最小1200px幅

**FAQ**:
- **question**: 具体的な質問形式で記述
- **answer**: 簡潔で分かりやすく、必要に応じて改行
- **order**: 10刻みで設定（10, 20, 30...）し、後から挿入しやすくする

**月間スケジュール**:
- **scheduleImage**: PDFを画像化（PNG/JPG）して登録
- 推奨サイズ: 1200px以上
- 過去のスケジュールも保持（アーカイブとして）

### 7.2 パフォーマンス最適化

- microCMS APIのレスポンスは自動的にキャッシュされます
- 画像は Next.js の Image コンポーネントで最適化されます
- 不要なフィールドは取得しない（`fields`パラメータを使用）

### 7.3 セキュリティ

- APIキーは環境変数で管理、リポジトリにコミットしない
- `.env.local`は`.gitignore`に含める
- 本番環境のAPIキーは読み取り専用権限のみ付与

---

## 8. 参考リンク

- [microCMS 公式ドキュメント](https://document.microcms.io/)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [AWS Amplify 環境変数](https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html)

# Puanaroom

Next.js アプリケーションの開発用リポジトリです。

## セットアップ

```bash
pnpm install
```

asdf を利用している場合は、Node.js と pnpm を揃えるために事前に以下を実行してください。

```bash
asdf install
```

## 開発サーバーの起動

```bash
pnpm dev
```

`http://localhost:3000` にアクセスするとアプリを確認できます。

## 主なスクリプト

- `pnpm dev` 開発サーバーを起動します。
- `pnpm build` 本番ビルドを作成します。
- `pnpm start` 本番ビルドを起動します。
- `pnpm lint` ESLint による静的解析を実行します。

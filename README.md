# FUJI RAG LP

FUJI RAGの問い合わせ獲得向けランディングページ（Next.js）です。

## セットアップ

1. 依存関係をインストール

```bash
npm install
```

2. 環境変数を設定

`.env.example` を `.env.local` にコピーして値を設定してください。

```bash
cp .env.example .env.local
```

必須項目:

- `SMTP_HOST`
- `SMTP_PORT` (例: 587)
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL` (通知を受け取る宛先。複数指定はカンマ区切り)

任意:

- `CONTACT_FROM_EMAIL` (未指定時は `SMTP_USER`)
- `NEXT_PUBLIC_SITE_URL` (OGP/metadata用の本番URL)

3. 開発サーバー起動

```bash
npm run dev
```

## お問い合わせAPI

- エンドポイント: `POST /api/contact`
- 実装ファイル: `app/api/contact/route.js`
- 送信項目: `company`, `name`, `email`, `inquiryType`, `message`

フォーム送信時にSMTP経由でメール通知されます。

例:

`CONTACT_TO_EMAIL=recipient1@example.com,recipient2@example.com`

import Link from "next/link";

export const metadata = {
  title: "送信完了 | FUJI RAG",
  description: "お問い合わせの送信が完了しました。"
};

export default function ThanksPage() {
  return (
    <main className="thanks-page">
      <section className="thanks-panel panel">
        <p className="eyebrow">お問い合わせ完了</p>
        <h1>送信ありがとうございました。</h1>
        <p>
          内容を確認のうえ、担当者よりご連絡いたします。
          <br />
          ご入力いただいたメールアドレスへご案内する場合があります。
        </p>
        <div className="cta-group">
          <Link href="/" className="cta-button primary">
            LPトップへ戻る
          </Link>
          <Link href="/#contact-form" className="cta-button secondary">
            追加で問い合わせる
          </Link>
        </div>
      </section>
    </main>
  );
}

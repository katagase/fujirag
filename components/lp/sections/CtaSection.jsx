"use client";

import { useEffect } from "react";
import Script from "next/script";
import { CtaButtons } from "@/components/lp/common/CtaButtons";
import { finalEntryPoints } from "@/lib/lp-content";

export function CtaSection() {
  useEffect(() => {
    const timerId = setInterval(() => {
      const response = document.getElementById("g-recaptcha-response");
      if (response && String(response.value ?? "").trim() !== "") {
        return;
      }

      const captchaInput = document.getElementsByName("captcha_settings")[0];
      if (!captchaInput) {
        return;
      }

      try {
        const currentValue = captchaInput.value || "{}";
        const parsed = JSON.parse(currentValue);
        parsed.ts = JSON.stringify(new Date().getTime());
        captchaInput.value = JSON.stringify(parsed);
      } catch {
        // Ignore malformed values and keep form usable.
      }
    }, 500);

    return () => clearInterval(timerId);
  }, []);

  return (
    <section className="section-block cta-section" id="final-cta">
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <div className="container cta-wrapper">
        <div>
          <p className="eyebrow">最終CTA</p>
          <h2>
            まずは、話を聞いてみてください。
            <br className="title-break-desktop" />
            費用も契約も、一切不要です。
          </h2>
          <p className="section-description">
            「デモだけ見たい」「文書作成を相談したい」「環境相談をしたい」どの入口でも歓迎します。
          </p>
          <div className="entry-grid">
            {finalEntryPoints.map((item) => (
              <article key={item.title} className="panel entry-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="entry-note">{item.note}</p>
              </article>
            ))}
          </div>
          <CtaButtons />
        </div>
        <form
          id="contact-form"
          className="panel contact-form"
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgC000001jUaN"
          method="POST"
        >
          <input
            type="hidden"
            name="captcha_settings"
            value='{"keyname":"FUJIRAG","fallback":"true","orgId":"00DgC000001jUaN","ts":""}'
          />
          <input type="hidden" name="oid" value="00DgC000001jUaN" />
          <input type="hidden" name="retURL" value="https://fujirag.voitex.biz/thanks" />

          <h3>お問い合わせフォーム</h3>
          <label htmlFor="company">会社名</label>
          <input id="company" maxLength={40} name="company" type="text" autoComplete="organization" required />

          <label htmlFor="state">都道府県</label>
          <input id="state" maxLength={20} name="state" type="text" autoComplete="address-level1" />

          <label htmlFor="city">市区郡</label>
          <input id="city" maxLength={40} name="city" type="text" autoComplete="address-level2" />

          <label htmlFor="phone">電話</label>
          <input id="phone" maxLength={40} name="phone" type="tel" autoComplete="tel" />

          <label htmlFor="last_name">姓</label>
          <input id="last_name" maxLength={80} name="last_name" type="text" autoComplete="family-name" required />

          <label htmlFor="first_name">名</label>
          <input id="first_name" maxLength={40} name="first_name" type="text" autoComplete="given-name" />

          <label htmlFor="email">メールアドレス</label>
          <input id="email" maxLength={80} name="email" type="email" autoComplete="email" required />

          <label htmlFor="description">説明</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="お問い合わせ内容をご入力ください"
          />

          <label className="consent-row" htmlFor="privacyConsent">
            <input id="privacyConsent" type="checkbox" required />
            <span>
              <a
                href="https://ktgs.llc/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="policy-link"
              >
                プライバシーポリシー
              </a>
              に同意のうえ送信します。
            </span>
          </label>
          <p className="consent-note">
            送信情報はお問い合わせ対応のため、Salesforce（Web-to-Lead）に連携されます。
          </p>

          <div className="g-recaptcha" data-sitekey="6LdDYY8sAAAAAGcK1HZxISrSpauIOBvc5jqFuiRk" />
          <button type="submit" className="cta-button primary full">
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}

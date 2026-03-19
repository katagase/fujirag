import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const REQUIRED_FIELDS = ["company", "name", "email", "inquiryType"];

function getMissingFields(payload) {
  return REQUIRED_FIELDS.filter((field) => !String(payload[field] ?? "").trim());
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parseRecipients(recipientValue) {
  return String(recipientValue ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTransportConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  };
}

function createMailContent({ company, name, email, inquiryType, message }) {
  const text = [
    "FUJI RAG LPからお問い合わせが届きました。",
    "",
    `会社名: ${company}`,
    `氏名: ${name}`,
    `メールアドレス: ${email}`,
    `問い合わせ種別: ${inquiryType}`,
    `お問い合わせ内容: ${message || "（未入力）"}`
  ].join("\n");

  const html = `
    <h2>FUJI RAG LPからお問い合わせが届きました</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      <tr><th align="left">会社名</th><td>${escapeHtml(company)}</td></tr>
      <tr><th align="left">氏名</th><td>${escapeHtml(name)}</td></tr>
      <tr><th align="left">メールアドレス</th><td>${escapeHtml(email)}</td></tr>
      <tr><th align="left">問い合わせ種別</th><td>${escapeHtml(inquiryType)}</td></tr>
      <tr><th align="left">お問い合わせ内容</th><td>${escapeHtml(message || "（未入力）")}</td></tr>
    </table>
  `;

  return { text, html };
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const company = String(payload.company ?? "").trim();
    const name = String(payload.name ?? "").trim();
    const email = String(payload.email ?? "").trim();
    const inquiryType = String(payload.inquiryType ?? "").trim();
    const message = String(payload.message ?? "").trim();

    const missingFields = getMissingFields({ company, name, email, inquiryType });
    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: "必須項目が不足しています。", fields: missingFields },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "メールアドレスの形式が正しくありません。" },
        { status: 400 }
      );
    }

    const transportConfig = getTransportConfig();
    const recipients = parseRecipients(process.env.CONTACT_TO_EMAIL);
    const from = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER;

    if (!transportConfig || recipients.length === 0 || !from) {
      return NextResponse.json(
        {
          message:
            "メール送信設定が不足しています。SMTP_HOST / SMTP_USER / SMTP_PASS / CONTACT_TO_EMAIL を設定してください。"
        },
        { status: 500 }
      );
    }

    const invalidRecipients = recipients.filter((item) => !isValidEmail(item));
    if (invalidRecipients.length > 0) {
      return NextResponse.json(
        { message: "CONTACT_TO_EMAIL に不正なメールアドレスが含まれています。" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport(transportConfig);
    await transporter.verify();

    const { text, html } = createMailContent({
      company,
      name,
      email,
      inquiryType,
      message
    });

    await transporter.sendMail({
      from,
      to: recipients,
      replyTo: email,
      subject: `【FUJI RAG LP】お問い合わせ: ${inquiryType}`,
      text,
      html
    });

    return NextResponse.json({ message: "お問い合わせを受け付けました。" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}

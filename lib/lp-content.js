export const siteMeta = {
  title: "FUJI RAG | 企業で使えるナレッジAI",
  description:
    "オンプレ対応・Active Directory連携・出典付き回答。企業で使えるナレッジAI「FUJI RAG」の無料デモを受付中です。",
  ogImage: "/ogp-fuji-rag.svg"
};

export const heroBadges = [
  "オンプレ対応",
  "Active Directory連携",
  "出典表示",
  "NAS連携"
];

export const ctaItems = [
  { label: "無料デモを体験する", href: "#contact-form", variant: "primary" },
  { label: "資料を問い合わせる", href: "#contact-form", variant: "secondary" }
];

export const releaseAnnouncement = {
  label: "お知らせ",
  dateText: "投稿日: 2026年3月19日",
  title: "FUJI RAG 4月リリース予定！",
  description: "現在、無料デモ・PoC相談を先行受付中です。"
};

export const proofItems = [
  {
    title: "情シス・DX・IT企画で検討しやすい",
    description: "要件整理からPoCまで、部門横断で合意形成しやすい進め方を支援。"
  },
  {
    title: "オンプレ前提で提供",
    description: "クラウド利用が難しい環境を前提に、運用条件に合わせてご提案しています。"
  },
  {
    title: "スモールスタートが可能",
    description: "まずは対象文書と部門を絞り、段階的に活用範囲を広げられます。"
  }
];

export const voiceItems = [
  {
    quote: "検索では辿り着けなかった情報に、質問ベースで早く到達できるようになりました。",
    role: "IT企画部門 ご担当者様"
  },
  {
    quote: "出典確認ができるため、現場へ展開する際の説明がしやすい点を評価しています。",
    role: "情報システム部門 ご担当者様"
  }
];

export const problemItems = [
  "社内資料が見つからない",
  "検索しても欲しい情報に辿り着けない",
  "結局、詳しい人に聞いている",
  "ナレッジが属人化している",
  "クラウドAIはセキュリティ上使いづらい"
];

export const solutionItems = [
  {
    title: "NAS文書を横断して活用",
    description: "差分更新を前提に文書インデックスを保守し、必要な情報へ素早く到達できます。"
  },
  {
    title: "チャットで自然に質問できる",
    description: "通常応答とストリーミング応答に対応し、業務の言葉でそのまま質問できます。"
  },
  {
    title: "回答根拠を厳格に提示",
    description: "回答内で参照した出典だけを返すため、判断時の確認がしやすくなります。"
  },
  {
    title: "検索専用APIも使い分け可能",
    description: "生成なしの文書探索APIとチャット回答APIを用途に応じて使い分けできます。"
  }
];

export const reasonItems = [
  "オンプレ対応",
  "Active Directory連携",
  "部署・役職ベースの権限制御",
  "NAS上の文書をそのまま活用",
  "出典付き回答",
  "OCRフォールバック対応"
];

export const benefitItems = [
  { title: "検索業務の効率化", description: "文書探索にかかる時間を短縮し、回答確認までを一本化できます。" },
  { title: "ナレッジ活用率の向上", description: "埋もれた社内文書に再アクセスしやすくなり、再利用が進みます。" },
  { title: "教育負荷の軽減", description: "会話履歴を活用しながら自己解決しやすく、引き継ぎ負荷を軽減できます。" },
  { title: "問い合わせ対応の効率化", description: "根拠付き回答により、一次対応の品質と速度を両立しやすくなります。" },
  { title: "属人化の解消", description: "詳しい人への依存を減らし、組織でナレッジを扱える状態へ近づけます。" }
];

export const faqItems = [
  {
    question: "クラウド環境でも使えますか？",
    answer:
      "FUJI RAGはオンプレミス提供を前提としています。社内ネットワークやセキュリティ要件に合わせた構成でご提案します。"
  },
  {
    question: "オンプレ環境でも運用できますか？",
    answer:
      "はい。オンプレミス提供を基本としており、社内ポリシーや既存インフラに合わせて導入できます。"
  },
  {
    question: "Active Directory連携は可能ですか？",
    answer:
      "可能です。既存の認証基盤と連携し、利用者ごとのアクセス制御を実現できます。"
  },
  {
    question: "どのような文書形式に対応していますか？",
    answer:
      "PDF、Office文書、テキスト、コード系ファイルなどの業務文書に対応しています。詳細は対象文書を確認のうえご案内します。"
  },
  {
    question: "導入までどのくらいかかりますか？",
    answer:
      "環境規模や要件により異なりますが、段階導入やPoCからのスモールスタートが可能です。"
  },
  {
    question: "セキュリティ要件の厳しい環境でも利用できますか？",
    answer:
      "対応可能です。オンプレ前提の構成に加え、ネットワーク制約や部署・役職ベースの権限制御を踏まえてご提案します。"
  },
  {
    question: "ボイテキ2！との連携は可能ですか？",
    answer:
      "可能です。通話分析結果をFUJI RAGに連携し、関連ナレッジ提示や改善支援まで拡張できます。SSO連携を含め、要件に応じてご案内します。"
  }
];

export const inquiryTypes = ["無料デモ", "資料請求", "PoC相談", "その他"];

export const companyProfile = {
  nameJa: "ケーティージーエス合同会社",
  nameEn: "KTGS G.K.",
  representative: "片ケ瀬 敏夫",
  employees: "若干名",
  postalCode: "〒164-0001",
  address: "東京都中野区中野4丁目6-10-102",
  phone: "050-3668-5008",
  phoneNote: "外出が多いため、お繋ぎできない場合があります。お問い合わせフォームをご利用ください。",
  telecomLicense: "関東総合通信局 電気通信事業者届出番号: A-04-20100",
  invoiceNumber: "T5011103011738",
  securityAction: "SECURITY ACTION（二つ星）宣言",
  businessItems: [
    "ソフトウェア及びハードウェアの販売・保守・役務提供及びコンサルティング業務",
    "ISO認証に関するコンサルティング業務",
    "コールセンター業務（電話受信発信事務代行業）",
    "スポーツ・健康教授業務",
    "広告代理業及び各種の宣伝に関する業務（印刷物・広告等のデザイン・イラスト制作）"
  ],
  banks: ["三菱UFJ銀行 東中野支店", "GMOあおぞらネット銀行", "東京三協信用金庫 本店"]
};

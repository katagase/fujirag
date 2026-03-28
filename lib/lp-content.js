export const siteMeta = {
  title: "FUJI RAG | 企業で使えるナレッジAI",
  description:
    "オンプレ対応・Active Directory連携・出典付き回答。企業で使えるナレッジAI「FUJI RAG」の無料デモを受付中です。",
  ogImage: "/ogp-fuji-rag.svg"
};

export const heroBadges = [
  "オンプレ前提",
  "Active Directory連携",
  "ローカル認証対応",
  "出典表示",
  "NAS連携"
];

export const ctaItems = [
  { label: "無料デモを体験する", href: "#contact-form", variant: "primary" },
  { label: "文書作成を相談する", href: "#contact-form", variant: "secondary" }
];

export const releaseAnnouncement = {
  label: "お知らせ",
  dateText: "投稿日: 2026年3月19日",
  title: "FUJI RAG 4月リリース予定！",
  description: "現在、無料デモ・PoC相談を先行受付中です。"
};

export const proofItems = [
  {
    title: "安心① NASクロール",
    description: "今あるファイルサーバーをそのまま接続。整理・移行なしで利用開始できます。",
    points: [
      "整理・移行コストゼロ",
      "PDF/Office/テキストを横断検索（画像PDFはOCR対応）",
      "差分クロールで常に最新情報を反映"
    ]
  },
  {
    title: "安心② 権限制御",
    description: "Active Directoryの権限を継承し、見せてよい情報だけを表示します。",
    points: [
      "AD連携で既存設定を活用",
      "AD非連携でもFUJI RAG上でユーザー作成・権限設定が可能",
      "部署・役職単位でアクセス制御",
      "完全オンプレ運用で外部送信なし"
    ]
  },
  {
    title: "安心③ 出典表示",
    description: "すべての回答に出典を表示し、元資料にワンクリックで遷移できます。",
    points: ["ファイル名・ページ番号まで明示", "回答の根拠を即確認", "ハルシネーションを大幅低減"]
  }
];

export const problemItems = [
  "Excelを探して見つけたら古い版だった",
  "担当者に聞かないと判断できない",
  "クラウドAI提案がセキュリティで却下される",
  "ファイル整理・移行コストで計画が止まる",
  "部門間で情報が分断され会議が長引く",
  "同じ質問対応が繰り返される"
];

export const scenarioItems = [
  {
    title: "法務・購買",
    summary: "与信・稟議判断の抜け漏れを防止",
    prompt: "新規取引先A社への業務委託で注意点は？",
    answer:
      "A社は与信管理規程に基づき要注意先に該当します。決算書提出と取引上限500万円以内の確認が必要です。",
    sources: ["与信管理規程 v2.1 第4条", "購買ガイドライン 2024 p.12"]
  },
  {
    title: "製造・品質",
    summary: "品質不良の初動判断を標準化",
    prompt: "ライン3のキズ不良、過去事例と出荷判断は？",
    answer:
      "類似事例3件を参照すると、部位確認後に受入基準と照合し、基準内は全数検査後に出荷可と判断できます。",
    sources: ["品質管理手順書 第6章", "顧客受入基準 rev.4"]
  },
  {
    title: "人事・総務",
    summary: "定型問い合わせの対応工数を削減",
    prompt: "育休申請の期限と必要書類を教えて。",
    answer:
      "育休開始予定日の1ヶ月前までに申請が必要です。申請書、母子健康手帳コピー、復帰予定日確認書を提出します。",
    sources: ["育児・介護休業規程 第3〜8条", "社内申請フォーム"]
  },
  {
    title: "情シス",
    summary: "障害初動の対応品質を均一化",
    prompt: "DB-CONNECTION-TIMEOUT時の初動手順は？",
    answer:
      "接続状況確認後、接続プール枯渇時は再起動手順を実施し、15分以内に解消しない場合は部門責任者へエスカレーションします。",
    sources: ["障害ログ #INC-2024-1114", "DBサーバ運用手順書 v3.2"]
  },
  {
    title: "営業・CS・PM",
    summary: "顧客引き継ぎ時の属人化を解消",
    prompt: "B商事の取引経緯と注意点をまとめて。",
    answer:
      "取引開始時期、過去トラブル、引き継ぎポイントを整理します。納期バッファ設定や請求書宛名ルールも提示できます。",
    sources: ["顧客管理台帳 B商事", "前任者引き継ぎメモ"]
  },
  {
    title: "部門横断",
    summary: "サイロ化した情報を横断整理",
    prompt: "D社の特注要望に対する各部門の検討状況は？",
    answer:
      "営業要望、技術検討、製造影響を横断して要約します。試作費概算と追加工数まで確認したうえで判断できます。",
    sources: ["営業NAS D社要望書", "製造影響確認シート_D社"]
  }
];

export const flowSteps = [
  {
    title: "STEP 1 無料デモ・PoC相談（最短1週間）",
    detail: "現状ヒアリングとデモを実施。条件が揃えば最短1週間でPoC開始判断まで進められます。"
  },
  {
    title: "STEP 2 環境確認・個別提案（2〜4週間）",
    detail: "NAS接続設計、AD権限確認、対象部門を整理して提案します。"
  },
  {
    title: "STEP 3 PoC（1〜2ヶ月）",
    detail: "1部門・1テーマで小さく検証し、本番導入可否を判断できます。"
  },
  {
    title: "STEP 4 本番導入・スモールスタート",
    detail: "部門限定で運用開始し、定着後に段階展開します。"
  },
  {
    title: "STEP 5 活用拡大・連携",
    detail: "Pro版（ボイテキオンプレ！連携モデル）への拡張やSSO連携へ展開できます。"
  }
];

export const fitItems = [
  "社内にNAS（ファイルサーバー）がある",
  "Active Directoryで社員アカウントを管理している",
  "データをクラウドに出せない/出したくない",
  "従業員50名以上で部門間共有課題がある",
  "属人化・引き継ぎ課題が慢性化している",
  "検索工数が大きくAI導入を検討している"
];

export const notFitItems = [
  "社内NASがなく、すべてクラウド管理",
  "従業員20名以下で情報共有課題が小さい",
  "クラウドRAGで問題なく運用済み",
  "社内文書が少なくナレッジ活用ニーズが低い"
];

export const comparisonRows = [
  { label: "社内データ外部送信", fuji: "なし", saas: "あり", si: "設計次第", search: "なし" },
  { label: "NAS直接接続・自動クロール", fuji: "対応", saas: "非対応", si: "要開発", search: "一部対応" },
  { label: "AD権限連携", fuji: "対応", saas: "非対応", si: "要開発", search: "一部対応" },
  { label: "出典付き回答", fuji: "対応", saas: "一部", si: "設計次第", search: "非対応" },
  { label: "導入期間", fuji: "数ヶ月", saas: "即日", si: "6ヶ月〜1年", search: "数週間" }
];

export const pricingPlans = [
  {
    name: "Starterプラン",
    subtitle: "初回導入向け",
    initial: "〜800万円",
    monthly: "10〜15万円",
    items: ["NASクロール", "AD権限連携", "出典付き回答", "OCR対応", "PoC対応", "個別連携相談"]
  },
  {
    name: "Proプラン",
    subtitle: "ボイテキオンプレ！連携モデル",
    initial: "〜1,200万円",
    monthly: "15〜20万円",
    items: ["Starter全機能", "ボイテキオンプレ！連携", "SSO連携", "広範文書対応", "PoC対応", "個別連携対応"]
  }
];

export const roiSummary = {
  currentCost: "社員50名で情報探索1時間/日の場合、年間約3,750万円の探索コスト。",
  starterCost: "Starter初年度は約944万円（初期800万円 + 月額12万円想定）。",
  effect: "探索時間を30%削減できれば、年間約1,125万円の削減効果が見込めます。"
};

export const finalEntryPoints = [
  {
    title: "無料デモを申し込む",
    body: "実際の動作画面をご覧いただけます。業界・部門別シナリオにも対応します。",
    note: "完全無料 / 60分以内 / オンライン対応"
  },
  {
    title: "文書作成を相談する",
    body: "社内説明や申請向けの文書作成をサポートします。必要情報の整理からご相談いただけます。",
    note: "要件ヒアリング対応 / オンライン相談可"
  },
  {
    title: "個別相談をする",
    body: "自社環境での適用可否や構成相談を担当者が直接ご案内します。",
    note: "平日 10:00〜18:00 / 電話 050-3668-5008"
  }
];

export const faqItems = [
  {
    question: "今使っているNASをそのまま使えますか？",
    answer: "はい。既存NASに接続するだけで利用できます。整理・移行・再分類は不要です。"
  },
  {
    question: "クラウドに移行する必要はありますか？",
    answer: "ありません。FUJI RAGは完全オンプレミス運用で、データは社外に出ません。"
  },
  {
    question: "導入までどれくらいかかりますか？",
    answer: "PoC開始までは最短1週間、PoC実施は1〜2ヶ月、本番導入まで含めると3〜6ヶ月が目安です。"
  },
  {
    question: "対応ファイル形式は？",
    answer: "PDF・Word・Excel・PowerPoint・テキスト・ソースコードに対応し、画像PDFはOCRで取り込みます。"
  },
  {
    question: "部門ごとに見える情報を制限できますか？",
    answer: "はい。AD連携により、部署・役職・個人単位でアクセス制御できます。"
  },
  {
    question: "Active Directory連携がない環境でも運用できますか？",
    answer:
      "はい。FUJI RAG上でユーザーを作成し、部署・役職単位の権限設定で運用できます。将来的なAD連携にも対応可能です。"
  },
  {
    question: "回答の根拠は確認できますか？",
    answer: "すべての回答に出典（ファイル名・パス・ページ）を表示し、元資料に遷移できます。"
  },
  {
    question: "ボイテキオンプレ！との連携は可能ですか？",
    answer: "可能です。通話分析結果を取り込み、関連ナレッジ提示や改善支援まで拡張できます。"
  },
  {
    question: "社内システムとの連携はできますか？",
    answer: "はい。連携要件に応じて、必要なAPIを個別にご提供します。まずは運用要件をご相談ください。"
  },
  {
    question: "StarterからProへ移行できますか？",
    answer: "はい。利用定着後にPro版（ボイテキオンプレ！連携モデル）へ段階的に移行できます。再導入は不要です。"
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

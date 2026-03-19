import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { companyProfile } from "@/lib/lp-content";

export function CompanySection() {
  return (
    <section className="section-block subtle company-section" id="company">
      <div className="container">
        <SectionHeader
          eyebrow="運営会社"
          title="信頼できる運営体制"
          description="必要な会社情報を明示し、安心してご相談いただける体制を整えています。"
          tone="balanced"
        />

        <div className="panel company-message">
          <p>
            ケーティージーエス合同会社（KTGS G.K.）は、企業の情報基盤を支えるパートナーとして、
            現場で運用しやすいソリューションの提供を行っています。
          </p>
        </div>

        <div className="panel company-grid">
          <dl>
            <dt>会社名</dt>
            <dd>{companyProfile.nameJa}</dd>

            <dt>英文社名</dt>
            <dd>{companyProfile.nameEn}</dd>

            <dt>代表</dt>
            <dd>{companyProfile.representative}</dd>

            <dt>従業員数</dt>
            <dd>{companyProfile.employees}</dd>

            <dt>所在地</dt>
            <dd>
              {companyProfile.postalCode}
              <br />
              {companyProfile.address}
            </dd>

            <dt>電話番号</dt>
            <dd>
              {companyProfile.phone}
              <br />
              <span className="sub-note">{companyProfile.phoneNote}</span>
            </dd>

            <dt>許認可</dt>
            <dd>{companyProfile.telecomLicense}</dd>

            <dt>適格請求書発行事業者登録番号</dt>
            <dd>{companyProfile.invoiceNumber}</dd>
            <dt>セキュリティ宣言</dt>
            <dd>{companyProfile.securityAction}</dd>
          </dl>
        </div>

        <p className="company-more-link">
          詳細な事業内容・会社情報は
          <a href="https://ktgs.llc/" target="_blank" rel="noopener noreferrer">
            コーポレートサイト
          </a>
          をご確認ください。
        </p>
      </div>
    </section>
  );
}

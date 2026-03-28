import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { comparisonRows } from "@/lib/lp-content";

export function ExpansionSection() {
  return (
    <section className="section-block subtle" id="comparison">
      <div className="container">
        <SectionHeader
          title={
            <>
              なぜFUJI RAGなのか、
              <br className="title-break-desktop" />
              他の選択肢と比べる
            </>
          }
          description="SaaS型・SI個別開発・検索ツールとの違いを、導入観点で整理します。"
        />
        <div className="panel comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>比較項目</th>
                <th>FUJI RAG</th>
                <th>SaaS型RAG</th>
                <th>SI個別開発</th>
                <th>検索ツール</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.fuji}</td>
                  <td>{row.saas}</td>
                  <td>{row.si}</td>
                  <td>{row.search}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

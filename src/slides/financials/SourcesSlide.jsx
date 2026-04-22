export default function SourcesSlide() {
  const sources = [
    { id: 1, title: 'Bangladesh’s Emerging Turf Industry', org: 'BBF Digital', date: 'June 2024', link: 'https://bbf.digital/bangladeshs-emerging-turf-industry' },
    { id: 2, title: 'Competition heats up as Ctg’s artificial turf business expands', org: 'The Business Standard', date: 'February 2024', link: 'https://www.tbsnews.net/bangladesh/competition-heats-ctgs-artificial-turf-business-expands-797054' },
    { id: 3, title: 'Cost for Company Formation in Bangladesh / RJSC References', org: 'Counsels Law / RJSC', date: '2024', link: 'https://www.counselslaw.com/cost-for-company-formation-in-bangladesh/' },
    { id: 4, title: 'RJSC Fee Calculator & Filing Fees', org: 'Govt of Bangladesh', date: 'Active', link: 'https://app.roc.gov.bd/psp/fee_calculator' },
    { id: 5, title: 'Facebook Ads Cost in Bangladesh 2026', org: 'MediaBD / AgentWise', date: '2026', link: 'https://agentwisex.com/facebook-ads-cost-bangladesh/' },
    { id: 6, title: 'Tournament Entry Fee Benchmarks (Dhaka Football Groups)', org: 'Local FB Communities', date: '2025/2026', link: 'https://www.facebook.com/groups/1399374044002149/' },
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto styled-scrollbar">
      <div className="mb-8">
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '32px', color: 'var(--white)', letterSpacing: '-0.02em' }}>Sources & Footnotes</h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>External Market Validation</p>
      </div>

      <div className="grid gap-4">
        {sources.map((source) => (
          <div 
            key={source.id} 
            className="p-5 rounded-xl border flex flex-col gap-2 hover:bg-[rgba(255,255,255,0.02)] transition-colors"
            style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <span className="text-[var(--accent)] font-mono font-bold text-lg">[{source.id}]</span>
                <div>
                  <h3 className="text-[16px] text-[var(--white)] font-semibold mb-1">{source.title}</h3>
                  <div className="flex gap-3 text-[13px] text-[var(--white-muted)]">
                    <span className="flex items-center gap-1"><span className="text-[var(--ash-light)]">🏢</span> {source.org}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><span className="text-[var(--ash-light)]">📅</span> {source.date}</span>
                  </div>
                </div>
              </div>
              
              <a 
                href={source.link} 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 rounded bg-[var(--black)] border border-[var(--border)] text-[12px] text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                View Source ↗
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 rounded-xl border bg-[var(--black)] border-[var(--border)]">
        <p className="text-[13px] text-[var(--white-muted)] leading-relaxed">
          <strong className="text-[var(--white)]">Disclaimer:</strong> The market data referenced above represents externally sourced facts to baseline the industry size, regulatory costs, and ad pricing. All internal financial models (Revenue, Breakeven, Tranches) shown in previous tabs are <em>assumptions</em> based on target operations and are not guaranteed.
        </p>
      </div>
    </div>
  );
}

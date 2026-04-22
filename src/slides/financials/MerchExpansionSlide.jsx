export default function MerchExpansionSlide() {
  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto styled-scrollbar">
      <div className="mb-8">
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '32px', color: 'var(--white)', letterSpacing: '-0.02em' }}>Merchandise Expansion</h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Ecosystem Vertical</p>
      </div>

      <div className="p-6 mb-8 rounded-xl border relative overflow-hidden bg-[rgba(68,214,44,0.05)] border-[var(--accent-dim)] flex items-start gap-6">
        <div className="text-4xl">🏭</div>
        <div>
          <h3 className="text-[14px] text-[var(--accent)] uppercase tracking-wider font-bold mb-2">The Factory Advantage</h3>
          <p className="text-[14px] leading-relaxed text-[var(--white)]">
            Because the founding team already has direct factory access and production knowledge, Book My Turf possesses a distinct operational advantage in sports merchandise compared to typical software startups. The risk is <strong className="text-[var(--accent)]">not production</strong> — the risk is <strong className="text-white">diverting focus too early</strong>.
          </p>
        </div>
      </div>

      <p style={{ fontSize: '14px', color: 'var(--white-muted)', marginBottom: '24px' }}>
        Merchandise is a highly credible expansion vertical, but should not consume core launch capital. It can become a powerful ecosystem extension (jerseys, kits, fan wear) if sequenced properly.
      </p>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {/* Option 1 */}
        <div className="p-6 rounded-xl border flex flex-col" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
          <div className="mb-4">
            <span className="text-[11px] text-[var(--white-muted)] uppercase tracking-wider mb-1 block">Strategy 1</span>
            <h3 className="text-[18px] text-[var(--white)] font-bold">No Merch at Launch</h3>
          </div>
          <p className="text-[13px] text-[var(--white-muted)] mb-6 flex-1">
            Focus 100% of the initial BDT 20 lakh on booking liquidity, supply onboarding, and core transaction growth.
          </p>
          <div className="text-[12px] font-semibold text-[var(--ash-light)]">Safest Capital Deployment</div>
        </div>

        {/* Option 2 (Recommended) */}
        <div className="p-6 rounded-xl border flex flex-col relative" style={{ background: 'var(--ash-dark)', borderColor: 'var(--accent)', boxShadow: '0 0 20px rgba(68,214,44,0.05)' }}>
          <div className="absolute top-0 right-0 bg-[var(--accent)] text-black text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">Recommended</div>
          <div className="mb-4">
            <span className="text-[11px] text-[var(--accent)] uppercase tracking-wider mb-1 block">Strategy 2</span>
            <h3 className="text-[18px] text-[var(--white)] font-bold">Light Test Model</h3>
          </div>
          <p className="text-[13px] text-[var(--white-muted)] mb-6 flex-1">
            Made-to-order drops, tournament jerseys, and team kits with zero upfront inventory risk.
          </p>
          <ul className="text-[12px] text-[var(--white)] space-y-2 mb-6">
            <li className="flex items-center gap-2"><span className="text-[var(--accent)]">✓</span> Low upfront inventory</li>
            <li className="flex items-center gap-2"><span className="text-[var(--accent)]">✓</span> Funded from revenue/reserve</li>
            <li className="flex items-center gap-2"><span className="text-[var(--accent)]">✓</span> Builds brand visibly</li>
          </ul>
        </div>

        {/* Option 3 */}
        <div className="p-6 rounded-xl border flex flex-col" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
          <div className="mb-4">
            <span className="text-[11px] text-[var(--white-muted)] uppercase tracking-wider mb-1 block">Strategy 3</span>
            <h3 className="text-[18px] text-[var(--white)] font-bold">Full Vertical Scale</h3>
          </div>
          <p className="text-[13px] text-[var(--white-muted)] mb-6 flex-1">
            Large inventory-heavy merch expansion requiring separate budgets, tracking, and dedicated supply chain management.
          </p>
          <div className="text-[12px] text-[var(--accent)] uppercase font-semibold">Future Phase Only</div>
        </div>
      </div>
    </div>
  );
}

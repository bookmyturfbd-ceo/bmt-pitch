export default function MerchExpansionSlide() {
  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.012)' }}>MERCH</div>
      <div className="ambient-glow" style={{ width: '600px', height: '600px', background: 'rgba(68,214,44,0.04)', bottom: '-10%', right: '-5%' }} />

      <div className="slide-inner">
        <div>
          <span className="slide-label">Raise & Financials — 08</span>
          <h2 className="slide-title">Merch <span style={{ color: 'var(--accent)' }}>Expansion.</span></h2>
        </div>

        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          {/* Left */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="glass-panel-accent" style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--accent)' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '12px' }}>The Factory Advantage</h3>
              <p style={{ fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.65 }}>
                Bangladesh is one of the world's largest garment exporters. Direct manufacturing partnerships allow BMT to offer branded sports kits, jerseys, and accessories at domestic factory costs — giving us 3–5× the margin of any imported sportswear competitor.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '24px', flex: 1 }}>
              <h3 style={{ fontSize: '13px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid var(--border)' }}>Product Roadmap</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { phase: 'Phase 1 — Quick Win', items: 'Branded jerseys, training bibs, goalkeeper gloves with BMT logo. Ordered per-tournament.', color: 'var(--accent)' },
                  { phase: 'Phase 2 — Seasonal',  items: 'Team kits sold per season. Players customise with name, number, team badge. Pre-orders only.', color: '#8EC8E8' },
                  { phase: 'Phase 3 — Platform',  items: 'BMT Shop live in-app. Browse, customise, order, track. Partner with academies & clubs.', color: '#E8A0C0' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color, marginTop: '4px', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)', marginBottom: '3px' }}>{item.phase}</p>
                      <p style={{ fontSize: '12px', color: 'var(--white-muted)', lineHeight: 1.5 }}>{item.items}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '13px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Unit Economics (Jersey Example)</h3>
              <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                <tbody>
                  {[
                    { label: 'Factory Cost (per kit)',  value: '৳350–500' },
                    { label: 'Logistics & Packaging',   value: '৳80–120' },
                    { label: 'Suggested Retail Price',  value: '৳1,200–1,800' },
                    { label: 'Estimated Margin',        value: '~50–60%', accent: true },
                  ].map((r, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '12px 0', color: 'var(--white-muted)' }}>{r.label}</td>
                      <td style={{ padding: '12px 0', textAlign: 'right', color: r.accent ? 'var(--accent)' : 'var(--white)', fontFamily: 'monospace', fontWeight: r.accent ? 700 : 400 }}>{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {[
              { title: 'Why Now?',       body: 'Tournaments create natural demand spikes. Sell kits before the tournament season — zero inventory risk using pre-order model.' },
              { title: 'Focus Risk',     body: 'Merch expansion is Phase 3 only. We will not let commerce distract from the core platform during the first 12 months of operations.' },
              { title: 'Revenue Scale',  body: '200 kits per season at ৳1,500 avg = ৳3L in merch revenue. Non-dilutive, high-margin, community-branded.' },
            ].map((item, i) => (
              <div key={i} className="glass-panel" style={{ padding: '18px 20px', flex: 1 }}>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)', marginBottom: '6px' }}>{item.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--white-muted)', lineHeight: 1.55 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

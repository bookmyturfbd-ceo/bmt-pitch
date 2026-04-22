export default function BusinessModelSlide() {
  const primary = [
    { title: 'Booking Commission', desc: '10–15% flat take-rate on every slot booked through the BMT ecosystem.', icon: '৳' },
    { title: 'Owner Premium ERP',  desc: 'SaaS subscription for turf owners: advanced analytics, offline walk-in management, and dynamic pricing.', icon: '📊' },
  ];
  const upside = [
    { title: 'Tournament Fees',      desc: 'Entry fees and operational cuts for BMT-managed seasonal tournaments.' },
    { title: 'Featured Listings',    desc: 'Promoted spots for turfs wanting higher visibility in the discovery feed.' },
    { title: 'BMT Shop / Commerce',  desc: 'Direct-to-consumer sales of kits, boots, and official BMT merchandise.' },
    { title: 'Coaching Marketplace', desc: 'Discovery and booking fees for professional coaches and training academies.' },
    { title: 'Brand Sponsorships',   desc: 'Ad placements and sponsored leagues within the app interface.' },
  ];

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.01)' }}>REVENUE</div>
      <div className="ambient-glow" style={{ width: '700px', height: '700px', background: 'rgba(68,214,44,0.04)', top: '10%', right: '10%' }} />
      <div className="slide-inner">
        <div>
          <span className="slide-label">07 — Business Model</span>
          <h2 className="slide-title">Monetizing the <span style={{ color: 'var(--accent)' }}>Ecosystem.</span></h2>
        </div>
        <div style={{ display: 'flex', gap: '24px', flex: 1 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', paddingBottom: '10px', borderBottom: '1px solid var(--border)' }}>Immediate Revenue Focus</h3>
            {primary.map((s, i) => (
              <div key={i} className="glass-panel" style={{ borderLeft: '4px solid var(--accent)', padding: '22px', display: 'flex', gap: '18px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(68,214,44,0.1)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '18px', color: 'var(--white)', marginBottom: '6px' }}>{s.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.55 }}>{s.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid var(--border)', borderRadius: '0 6px 6px 0', marginTop: 'auto' }}>
              <p style={{ fontSize: '12px', color: 'var(--white-muted)', fontStyle: 'italic', lineHeight: 1.5 }}>"The core platform prints cash on transaction volume and B2B SaaS lock-in. Everything else is upside."</p>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '11px', color: 'var(--white-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', paddingBottom: '10px', borderBottom: '1px solid var(--border)' }}>Future Upside / Flywheel</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1 }}>
              {upside.map((s, i) => (
                <div key={i} className="glass-panel" style={{ padding: '18px', display: 'flex', flexDirection: 'column', gridColumn: i === 4 ? 'span 2' : 'auto' }}>
                  <h4 style={{ fontWeight: 700, fontSize: '15px', color: 'var(--white)', marginBottom: '6px' }}>{s.title}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--white-muted)', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

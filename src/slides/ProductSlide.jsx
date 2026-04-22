export default function ProductSlide() {
  const modules = [
    { id: 'A', title: 'Booking & Payments',       tagline: 'Utility drives acquisition',     color: '#44D62C', features: ['Real-time slot inventory', 'Instant bKash payment', 'Automated split-cost', 'Wallet deduction per player'] },
    { id: 'B', title: 'Social & Team Layer',       tagline: 'Social graph drives retention',  color: '#8EC8E8', features: ['Team creation & management', 'Friend invites / Roster builder', 'Find players & Transfer market', 'Casual group creation'] },
    { id: 'C', title: 'Competitive Layer',          tagline: 'MMR drives habit',               color: '#E8A0C0', features: ['Challenge Market matchmaking', 'Team MMR & Player MMR', 'Global Leaderboards & Badges', 'Seasonal play & Live scoring'] },
    { id: 'D', title: 'Owner Infrastructure',       tagline: 'ERP drives supply lock-in',     color: '#A8D8A0', features: ['Turf owner dashboard', 'Mini-ERP / Profit-Loss', 'Automated utilization tracking', 'Dynamic pricing controls'] },
    { id: 'E', title: 'Professionals Dashboard',    tagline: 'Gig economy drives ecosystem',  color: '#E8D8A0', features: ['Coach & Physio profiles', 'Direct player connection', 'Service booking & payments', 'Verified reviews & ratings'] },
  ];

  return (
    <div className="slide-shell noise">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--accent-dim), var(--accent), var(--accent-dim))', zIndex: 1 }} />
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.01)' }}>ECOSYSTEM</div>
      <div className="ambient-glow" style={{ width: '700px', height: '700px', background: 'rgba(68,214,44,0.04)', bottom: '-20%', right: '10%' }} />

      <div className="slide-inner">
        <div>
          <span className="slide-label">03 — The Product</span>
          <h2 className="slide-title">Five Modules. <span style={{ color: 'var(--accent)' }}>One Ecosystem.</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px', flex: 1 }}>
          {modules.map((mod) => (
            <div key={mod.id} className="glass-panel" style={{ borderTop: `3px solid ${mod.color}90`, padding: '24px 18px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: `${mod.color}18`, border: `1px solid ${mod.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', color: mod.color, marginBottom: '14px' }}>
                {mod.id}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '16px', color: 'var(--white)', marginBottom: '8px', lineHeight: 1.3 }}>{mod.title}</h3>
              <div style={{ background: `${mod.color}14`, padding: '4px 8px', borderRadius: '4px', marginBottom: '18px', width: 'fit-content' }}>
                <span style={{ fontSize: '10px', color: mod.color, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{mod.tagline}</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', flex: 1 }}>
                {mod.features.map((feat, i) => (
                  <li key={i} style={{ fontSize: '12px', color: 'var(--white-muted)', display: 'flex', gap: '8px', alignItems: 'flex-start', lineHeight: 1.4 }}>
                    <span style={{ color: mod.color, fontSize: '13px', flexShrink: 0 }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

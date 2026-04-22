export default function OverviewSlide() {
  return (
    <div className="slide-shell noise">
      <div className="watermark">BMT</div>
      <div className="ambient-glow" style={{ width: '700px', height: '700px', background: 'rgba(68,214,44,0.06)', top: '-15%', right: '-10%' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(68,214,44,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(68,214,44,0.025) 1px, transparent 1px)', backgroundSize: '80px 80px', zIndex: 0 }} />

      <div className="slide-inner" style={{ justifyContent: 'space-between' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span className="slide-label">01 — Overview</span>
            <h2 className="slide-title" style={{ marginTop: '10px' }}>
              The Sports <span style={{ color: 'var(--accent)' }}>Operating System.</span>
            </h2>
          </div>
          {/* Logo */}
          <div className="glass-panel-accent" style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <img src="/logo.png" alt="BMT Logo" style={{ width: '72px', height: '72px', objectFit: 'contain' }}
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
            <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontWeight: 800, fontSize: '28px', color: 'var(--accent)', letterSpacing: '0.05em' }}>BMT</span>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--white-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Book My Turf</span>
          </div>
        </div>

        {/* Thesis */}
        <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent)', padding: '32px 40px' }}>
          <p style={{ fontSize: '18px', color: 'var(--white)', lineHeight: 1.65, fontWeight: 400 }}>
            Book My Turf is building Bangladesh's sports operating system — combining venue booking, competitive matchmaking, payments, rankings, and turf-owner infrastructure in one unified platform.
          </p>
        </div>

        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {[
            { label: 'Status',         value: 'Product Built',  color: 'var(--accent)' },
            { label: 'Launch City',    value: 'Dhaka',          color: 'var(--white)' },
            { label: 'Initial Target', value: '40+ Turfs',      color: 'var(--white)' },
            { label: 'Player Target',  value: '10,000+',        color: 'var(--accent)', sub: 'Via Aggressive Marketing' },
            { label: 'Next Market',    value: 'Chattogram',     color: '#8EC8E8' },
          ].map((kpi, i) => (
            <div key={i} className="glass-panel" style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '10px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{kpi.label}</span>
              <span style={{ fontWeight: 700, fontSize: '20px', color: kpi.color, lineHeight: 1.15 }}>{kpi.value}</span>
              {kpi.sub && <span style={{ fontSize: '10px', color: 'var(--white-muted)', fontStyle: 'italic' }}>{kpi.sub}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

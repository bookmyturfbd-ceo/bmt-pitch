export default function RaiseOverviewSlide() {
  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.012)' }}>RAISE</div>
      <div className="ambient-glow" style={{ width: '600px', height: '600px', background: 'rgba(68,214,44,0.05)', top: '-10%', right: '-5%' }} />

      <div className="slide-inner" style={{ justifyContent: 'space-between' }}>
        <div>
          <span className="slide-label">Raise & Financials — 01</span>
          <h2 className="slide-title">Raise <span style={{ color: 'var(--accent)' }}>Overview.</span></h2>
        </div>

        {/* Top KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { label: 'Raise Ask',                       value: 'BDT 20 Lakh' },
            { label: 'Equity Offered',                  value: '10%' },
            { label: 'Post-Money Valuation (Implied)',   value: 'BDT 2 Crore' },
          ].map((kpi, i) => (
            <div key={i} className="glass-panel" style={{ padding: '28px 24px' }}>
              <p style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>{kpi.label}</p>
              <p style={{ fontSize: '32px', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Status & Note */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '20px' }}>
          <div className="glass-panel" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '13px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid var(--border)' }}>Current Status</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              {[
                { label: 'Stage',          value: 'Launch / Early Commercialization' },
                { label: 'Product',        value: 'Already Built & Tested' },
                { label: 'Launch Market',  value: 'Dhaka, Bangladesh' },
                { label: 'Initial Target', value: '40+ Turfs Onboarded' },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: 'var(--white-muted)' }}>{item.label}</span>
                  <span style={{ color: 'var(--white)', fontWeight: 500 }}>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel-accent" style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--accent)' }} />
            <h4 style={{ fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px', fontWeight: 700 }}>Strategic Note</h4>
            <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--white)' }}>
              "This raise is designed to fund commercialization, not product development. Core product risk is already reduced because the platform is built. Capital is being used to acquire supply, acquire users, activate transactions, and validate repeatable unit economics."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

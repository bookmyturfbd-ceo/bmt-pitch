import { useMemo } from 'react';

export default function RevenueModelSlide({ financialState, setFinancialState }) {
  const { turfs, bookingsPerDay, slotPrice, takeRate } = financialState;

  const live = useMemo(() => {
    const gmv = turfs * bookingsPerDay * slotPrice * 30;
    const rev = gmv * (takeRate / 100);
    return { gmv, rev, ann: rev * 12 };
  }, [turfs, bookingsPerDay, slotPrice, takeRate]);

  const fmt = v => `৳${(v / 100000).toFixed(2)}L`;

  const benchmarks = [
    { name: 'Conservative', b: 3,  gmv: 40*3*2750*30, rev: 40*3*2750*30*0.1 },
    { name: 'Base',         b: 5,  gmv: 40*5*2750*30, rev: 40*5*2750*30*0.1 },
    { name: 'Aggressive',   b: 7,  gmv: 40*7*2750*30, rev: 40*7*2750*30*0.1 },
  ];

  const sliders = [
    { label: 'Turfs Onboarded',       key: 'turfs',          min: 10,   max: 80,   step: 1,   val: turfs,          unit: '' },
    { label: 'Avg Bookings/Day/Turf', key: 'bookingsPerDay', min: 1,    max: 10,   step: 0.5, val: bookingsPerDay, unit: '' },
    { label: 'Avg Slot Price (BDT)',  key: 'slotPrice',      min: 1500, max: 3500, step: 50,  val: slotPrice,      unit: ' ৳' },
    { label: 'Platform Take Rate',    key: 'takeRate',        min: 5,    max: 15,   step: 0.5, val: takeRate,       unit: '%' },
  ];

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.012)' }}>REVENUE</div>

      <div className="slide-inner">
        <div>
          <span className="slide-label">Raise & Financials — 05</span>
          <h2 className="slide-title">Revenue <span style={{ color: 'var(--accent)' }}>Model.</span></h2>
        </div>

        <div className="glass-panel" style={{ padding: '12px 16px', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '13px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '16px' }}>⚠</span>
          <span style={{ color: 'var(--white-muted)' }}><strong style={{ color: 'var(--white)' }}>Internal Model Assumption:</strong> These are raw gross projections. Real-world dynamics (churn, friction, ramp-up) will apply.</span>
        </div>

        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          {/* Sliders */}
          <div className="glass-panel" style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Live Control Panel</h3>
            {sliders.map(s => (
              <div key={s.key}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--white)' }}>{s.label}</label>
                  <span style={{ fontSize: '14px', fontFamily: 'monospace', color: 'var(--accent)', fontWeight: 600 }}>{s.val}{s.unit}</span>
                </div>
                <input type="range" min={s.min} max={s.max} step={s.step} value={s.val}
                  onChange={e => setFinancialState(p => ({ ...p, [s.key]: Number(e.target.value) }))} />
              </div>
            ))}
          </div>

          {/* Live output */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="glass-panel-accent" style={{ padding: '28px' }}>
              <p style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Live Monthly GMV</p>
              <p style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'monospace', color: 'var(--white)' }}>{fmt(live.gmv)}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', flex: 1 }}>
              {[
                { label: 'Monthly Platform Revenue', value: fmt(live.rev) },
                { label: 'Annualised Revenue',       value: fmt(live.ann) },
              ].map((k, i) => (
                <div key={i} className="glass-panel" style={{ padding: '22px' }}>
                  <p style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{k.label}</p>
                  <p style={{ fontSize: '26px', fontWeight: 700, fontFamily: 'monospace', color: 'var(--accent)' }}>{k.value}</p>
                </div>
              ))}
            </div>

            {/* Benchmark table */}
            <div className="glass-panel" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>Benchmarks (40 Turfs · ৳2,750 · 10%)</h3>
              <table style={{ width: '100%', fontSize: '12px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    {['Scenario', 'Bkgs/Day', 'Monthly GMV', 'Monthly Rev', 'Annual Rev'].map(h => (
                      <th key={h} style={{ textAlign: h === 'Scenario' ? 'left' : 'right', paddingBottom: '8px', color: 'var(--white-muted)', fontWeight: 500 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((r, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i === 1 ? 'rgba(68,214,44,0.04)' : 'transparent' }}>
                      <td style={{ padding: '9px 0', color: 'var(--white)', fontWeight: i === 1 ? 600 : 400 }}>{r.name}</td>
                      <td style={{ padding: '9px 0', textAlign: 'right', color: 'var(--white)' }}>{r.b}</td>
                      <td style={{ padding: '9px 0', textAlign: 'right', fontFamily: 'monospace', color: 'var(--white-muted)' }}>{fmt(r.gmv)}</td>
                      <td style={{ padding: '9px 0', textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)' }}>{fmt(r.rev)}</td>
                      <td style={{ padding: '9px 0', textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)' }}>{fmt(r.rev * 12)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

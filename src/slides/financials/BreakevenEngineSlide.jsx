import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';

export default function BreakevenEngineSlide({ financialState }) {
  const [adjusted, setAdjusted] = useState(false);
  const { turfs, bookingsPerDay, slotPrice, takeRate } = financialState;

  const monthlyOpex = 76000;
  const data = useMemo(() => {
    return [
      { label: 'Conservative', b: 3 },
      { label: 'Base',         b: 5 },
      { label: 'Aggressive',   b: 7 },
      { label: '🔴 Live',      b: bookingsPerDay },
    ].map(s => {
      const rev = turfs * s.b * slotPrice * (takeRate / 100) * 30;
      const eff = adjusted ? rev * 0.75 : rev;
      const months = eff >= monthlyOpex ? '< 1 Month' : `${Math.ceil(monthlyOpex / eff)} Mo`;
      return { name: s.label, rev: Math.round(eff), months: eff >= monthlyOpex ? 0.5 : Math.ceil(monthlyOpex / eff) };
    });
  }, [turfs, bookingsPerDay, slotPrice, takeRate, adjusted]);

  const liveRev   = turfs * bookingsPerDay * slotPrice * (takeRate / 100) * 30;
  const effRev    = adjusted ? liveRev * 0.75 : liveRev;
  const breakEven = effRev >= monthlyOpex ? '< 1 Month' : `${Math.ceil(monthlyOpex / effRev)} Months`;

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.012)' }}>BREAKEVEN</div>

      <div className="slide-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span className="slide-label">Raise & Financials — 06</span>
            <h2 className="slide-title">Breakeven <span style={{ color: 'var(--accent)' }}>Engine.</span></h2>
          </div>
          <button onClick={() => setAdjusted(v => !v)} style={{ padding: '10px 20px', borderRadius: '8px', border: `1px solid ${adjusted ? 'var(--accent)' : 'var(--border)'}`, background: adjusted ? 'rgba(68,214,44,0.1)' : 'var(--ash-mid)', color: adjusted ? 'var(--accent)' : 'var(--white-muted)', fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
            {adjusted ? '✓ 25% Realism Applied' : '⊘ Apply 25% Realism'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          {/* Chart */}
          <div className="glass-panel" style={{ flex: 1.3, padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Months to Breakeven Sensitivity</h3>
            <div style={{ flex: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#666', fontSize: 12, fontFamily: 'Poppins' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 11, fontFamily: 'Poppins' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#111', border: '1px solid #252525', borderRadius: '8px' }} itemStyle={{ fontFamily: 'Poppins', fontSize: '12px' }} formatter={v => [`${v} months`, 'Time to Breakeven']} />
                  <ReferenceLine y={1} stroke="var(--accent)" strokeDasharray="4 4" label={{ value: 'Target', fill: 'var(--accent)', fontSize: 11, fontFamily: 'Poppins' }} />
                  <Bar dataKey="months" fill="var(--accent)" radius={[6,6,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right panel */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="glass-panel-accent" style={{ padding: '24px' }}>
              <p style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
                {adjusted ? 'Adjusted (75%)' : 'Gross'} — Live Inputs
              </p>
              <p style={{ fontSize: '40px', fontWeight: 700, color: 'var(--accent)', fontFamily: 'monospace' }}>{breakEven}</p>
              <p style={{ fontSize: '12px', color: 'var(--white-muted)', marginTop: '6px' }}>
                Monthly Revenue: ৳{Math.round(effRev).toLocaleString()} vs OpEx: ৳{monthlyOpex.toLocaleString()}
              </p>
            </div>

            {[
              { title: 'OpEx Assumption', body: 'BDT 76,000/month in Phase 1. Covers 3 C-Suite at ৳20K, 1 HOD at ৳10K, 1 Field Ops at ৳6K.' },
              { title: 'Realism Toggle', body: 'The 25% haircut models early churn, partial adoption, and payment friction. Useful for investor sensitivity testing.' },
              { title: 'Capital Buffer', body: 'BDT 6.5L in reserve extends the breakeven window by 8+ months even in a conservative scenario.' },
            ].map((item, i) => (
              <div key={i} className="glass-panel" style={{ padding: '18px 20px' }}>
                <h4 style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 600, marginBottom: '6px' }}>{item.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--white-muted)', lineHeight: 1.55 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

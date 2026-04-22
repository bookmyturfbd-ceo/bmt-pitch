import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

function fmt(v) {
  if (v >= 10000000) return `৳${(v/10000000).toFixed(2)}Cr`;
  if (v >= 100000)   return `৳${(v/100000).toFixed(2)}L`;
  return `৳${v.toLocaleString()}`;
}

export default function MarketSlide() {
  const scenarios = [
    { name: 'Conservative', bookings: 3 },
    { name: 'Base',         bookings: 5 },
    { name: 'Aggressive',   bookings: 7 },
  ].map(s => {
    const gmv = 40 * s.bookings * 2750 * 30;
    return { ...s, gmv, rev: gmv * 0.1 };
  });

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.015)' }}>MARKET</div>
      <div className="ambient-glow" style={{ width: '700px', height: '700px', background: 'rgba(68,214,44,0.04)', top: '10%', right: '10%' }} />

      <div className="slide-inner" style={{ flexDirection: 'row', gap: '32px' }}>
        {/* Left */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <span className="slide-label">04 — The Market</span>
            <h2 className="slide-title">A <span style={{ color: 'var(--accent)' }}>BDT 100 Crore</span> Economy.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {[
              { label: 'Dhaka Turfs',  value: '32+', note: 'Density, early adopters, tighter execution.', ref: '[1]' },
              { label: 'Ctg Turfs',   value: '70+', note: '10 more under construction. Proven culture.', ref: '[1][2]' },
            ].map((k, i) => (
              <div key={i} className="glass-panel" style={{ padding: '20px' }}>
                <span style={{ fontSize: '10px', color: 'var(--white-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{k.label}</span>
                <p style={{ fontWeight: 800, fontSize: '32px', color: 'var(--white)', marginTop: '4px' }}>
                  {k.value} <span style={{ fontSize: '12px', color: 'var(--accent)', verticalAlign: 'top' }}>{k.ref}</span>
                </p>
                <p style={{ fontSize: '12px', color: 'var(--white-muted)', marginTop: '6px', lineHeight: 1.4 }}>{k.note}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            {[
              { title: 'Market Value', body: 'Bangladesh turf facilities represent ~BDT 100 Crore in collective investment, generating ~BDT 6 Crore in monthly market value.' },
              { title: 'Unit Economics', body: 'Small turfs generate BDT 8K–12K/day. Large courts generate BDT 30K–35K/day.' },
              { title: 'Player Affordability', body: 'A squad of 12–14 players pays ~Tk2,000/hr — extremely accessible at a per-player cost.' },
            ].map((item, i) => (
              <p key={i} className="glass-panel" style={{ fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.6, padding: '16px 20px', borderLeft: '4px solid var(--accent)' }}>
                <span style={{ color: 'var(--white)', fontWeight: 600 }}>{item.title}: </span>{item.body} <span style={{ color: 'var(--accent)', fontSize: '11px' }}>[1][2]</span>
              </p>
            ))}
          </div>

          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', lineHeight: 1.5 }}>
              [1] BBF Digital, "Bangladesh's Emerging Turf Industry" (June 2024) &nbsp;·&nbsp; [2] TBS, "Competition heats up as Ctg's artificial turf business expands" (Feb 2024)
            </p>
          </div>
        </div>

        {/* Right — chart */}
        <div style={{ width: '44%', display: 'flex', flexDirection: 'column' }}>
          <div className="glass-panel" style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column', borderTop: '3px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '20px', color: 'var(--white)' }}>Dhaka Launch Model</h3>
                <p style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.06em', marginTop: '4px', fontWeight: 600 }}>MONTHLY · INTERNAL ASSUMPTIONS</p>
              </div>
              <div style={{ textAlign: 'right', background: 'rgba(255,255,255,0.04)', padding: '10px 14px', borderRadius: '8px', fontSize: '12px', color: 'var(--white)' }}>
                <div>Slot: BDT 2,750</div>
                <div>Take Rate: 10%</div>
                <div style={{ color: 'var(--accent)', fontWeight: 600 }}>Turfs: 40</div>
              </div>
            </div>
            <div style={{ flex: 1, minHeight: '200px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scenarios} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#666', fontSize: 12, fontFamily: 'Poppins' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 11, fontFamily: 'Poppins' }} axisLine={false} tickLine={false} tickFormatter={fmt} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                    contentStyle={{ background: '#111', border: '1px solid #252525', borderRadius: '8px' }}
                    itemStyle={{ fontFamily: 'Poppins', fontSize: '12px' }}
                    formatter={(v, n) => [fmt(v), n === 'gmv' ? 'Monthly GMV' : 'Net Revenue']} />
                  <Legend wrapperStyle={{ fontFamily: 'Poppins', fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="gmv" name="Monthly GMV" fill="#272727" radius={[4,4,0,0]} />
                  <Bar dataKey="rev" name="Net Revenue (10%)" fill="#44D62C" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

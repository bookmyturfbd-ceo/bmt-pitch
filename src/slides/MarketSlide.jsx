// Slide 4: Market
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

function formatBDT(value) {
  if (value >= 10000000) return `৳${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000)   return `৳${(value / 100000).toFixed(2)} L`;
  return `৳${value.toLocaleString('en-BD')}`;
}

export default function MarketSlide() {
  const turfs = 40;
  const avgSlot = 2750;
  const days = 30;
  const takeRate = 0.10;

  const scenarios = [
    { name: 'Conservative', bookings: 3 },
    { name: 'Base', bookings: 5 },
    { name: 'Aggressive', bookings: 7 },
  ].map(s => {
    const gmv = turfs * s.bookings * avgSlot * days;
    const rev = gmv * takeRate;
    return { ...s, gmv, rev, label: `${s.bookings} Bookings/Day` };
  });

  return (
    <div className="relative w-full h-full flex flex-col overflow-y-auto styled-scrollbar noise" style={{ background: '#050505' }}>
      
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.015)' }}>MARKET</div>
      <div className="ambient-glow" style={{ width: '800px', height: '800px', background: 'rgba(68,214,44,0.03)', top: '10%', right: '10%' }} />

      <div className="relative z-10 flex flex-col md:flex-row h-full px-16 py-12 gap-16 justify-between min-h-max">
        {/* Left: Market Facts */}
        <div className="flex flex-col flex-1">
          <div className="mb-8">
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
              color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
            }}>
              04 — The Market
            </span>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 56px)',
              color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
            }}>
              A <span style={{ color: 'var(--accent)' }}>BDT 100 Crore</span> Economy.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="glass-panel" style={{ padding: '24px' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'var(--white-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Dhaka Turfs</span>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '36px', color: 'var(--white)', marginTop: '4px' }}>32+ <span style={{fontSize:'14px', color:'var(--accent)', verticalAlign:'top'}}>[1]</span></p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--white-muted)', marginTop: '8px', lineHeight: 1.4 }}>Density, early adopters, tighter execution.</p>
            </div>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'var(--white-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ctg Turfs</span>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '36px', color: 'var(--white)', marginTop: '4px' }}>70+ <span style={{fontSize:'14px', color:'var(--accent)', verticalAlign:'top'}}>[1][2]</span></p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--white-muted)', marginTop: '8px', lineHeight: 1.4 }}>Proven culture, 10 more under construction.</p>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="glass-panel" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: 'var(--white-muted)', lineHeight: 1.6, padding: '20px 24px', borderLeft: '4px solid var(--accent)' }}>
              <span style={{ color: 'var(--white)', fontWeight: 600 }}>Market Value:</span> Bangladesh turf facilities represent ~BDT 100 Crore in collective investment, generating ~BDT 6 Crore in monthly market value. ⁽¹⁾
            </p>
            <p className="glass-panel" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: 'var(--white-muted)', lineHeight: 1.6, padding: '20px 24px', borderLeft: '4px solid var(--accent)' }}>
              <span style={{ color: 'var(--white)', fontWeight: 600 }}>Unit Economics:</span> Small turfs generate BDT 8K–12K daily. Large courts generate BDT 30K–35K daily. ⁽¹⁾⁽²⁾
            </p>
            <p className="glass-panel" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: 'var(--white-muted)', lineHeight: 1.6, padding: '20px 24px', borderLeft: '4px solid var(--accent)' }}>
              <span style={{ color: 'var(--white)', fontWeight: 600 }}>Player Cost:</span> A squad of 12-14 players pays ~Tk2,000/hr, making the per-player cost highly affordable. ⁽¹⁾⁽²⁾
            </p>
          </div>

          {/* Footnotes */}
          <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em', lineHeight: 1.4 }}>
              [1] BBF Digital, "Bangladesh's Emerging Turf Industry" (June 2024)<br/>
              [2] TBS, "Competition heats up as Ctg's artificial turf business expands" (Feb 2024)
            </p>
          </div>
        </div>

        {/* Right: Model Scenarios */}
        <div style={{ width: '45%', display: 'flex', flexDirection: 'column' }}>
          <div className="glass-panel" style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '24px', color: 'var(--white)' }}>Dhaka Launch Model (Monthly)</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--accent)', letterSpacing: '0.05em', marginTop: '6px', fontWeight: 600 }}>INTERNAL ASSUMPTIONS (PER MONTH)</p>
              </div>
              <div style={{ textAlign: 'right', background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '4px' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: 'var(--white)', display: 'block', marginBottom: '4px' }}>Base Slot: BDT 2,750</span>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: 'var(--white)', display: 'block', marginBottom: '4px' }}>Take Rate: 10%</span>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: 'var(--accent)', display: 'block', fontWeight: 600 }}>Turfs: 40</span>
              </div>
            </div>

            <div style={{ flex: 1, minHeight: '200px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scenarios} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#888', fontSize: 12, fontFamily: 'Poppins' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#888', fontSize: 12, fontFamily: 'Poppins' }} axisLine={false} tickLine={false} tickFormatter={formatBDT} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                    contentStyle={{ background: '#111', border: '1px solid #333', borderRadius: '4px' }}
                    itemStyle={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px' }}
                    labelStyle={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#888', marginBottom: '4px' }}
                    formatter={(val, name) => [formatBDT(val), name === 'gmv' ? 'Monthly GMV' : 'Net Revenue']}
                  />
                  <Legend wrapperStyle={{ fontFamily: 'Poppins', fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="gmv" name="Monthly GMV" fill="#333" radius={[2,2,0,0]} />
                  <Bar dataKey="rev" name="Net Revenue (10%)" fill="#44D62C" radius={[2,2,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

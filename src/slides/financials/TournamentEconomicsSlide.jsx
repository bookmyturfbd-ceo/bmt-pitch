import { useState } from 'react';

export default function TournamentEconomicsSlide() {
  const [buyIn, setBuyIn] = useState(2000);

  const teams = 8, players = 11;
  const totalBuyIn = teams * players * buyIn;
  const opsCost = 50000;
  const refCost = 5000;
  const totalCost = opsCost + refCost;
  const net = totalBuyIn - totalCost;

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.012)' }}>TOURNAMENT</div>

      <div className="slide-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span className="slide-label">Raise & Financials — 07</span>
            <h2 className="slide-title">Tournament <span style={{ color: 'var(--accent)' }}>Economics.</span></h2>
          </div>
          <div style={{ display: 'flex', gap: '8px', background: 'var(--ash-mid)', borderRadius: '10px', padding: '4px', border: '1px solid var(--border)' }}>
            {[2000, 3500].map(v => (
              <button key={v} onClick={() => setBuyIn(v)} style={{ padding: '8px 18px', borderRadius: '7px', border: 'none', cursor: 'pointer', fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, background: buyIn === v ? 'var(--accent)' : 'transparent', color: buyIn === v ? 'var(--black)' : 'var(--white-muted)', transition: 'all 0.2s' }}>
                ৳{v.toLocaleString()} Buy-in
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          {/* P&L card */}
          <div className="glass-panel" style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tournament P&L — 8 Teams · 11 Players</h3>
            <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
              <tbody>
                {[
                  { label: 'Total Buy-in Collected', value: `৳${totalBuyIn.toLocaleString()}`, accent: true },
                  { label: 'Turf Rental (2 days)', value: `−৳${opsCost.toLocaleString()}` },
                  { label: 'Referees & Staff',       value: `−৳${refCost.toLocaleString()}` },
                ].map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '14px 0', color: 'var(--white)' }}>{r.label}</td>
                    <td style={{ padding: '14px 0', textAlign: 'right', color: r.accent ? 'var(--accent)' : 'var(--white-muted)', fontFamily: 'monospace', fontWeight: r.accent ? 700 : 400 }}>{r.value}</td>
                  </tr>
                ))}
                <tr style={{ background: net >= 0 ? 'rgba(68,214,44,0.06)' : 'rgba(255,59,59,0.06)', borderRadius: '8px' }}>
                  <td style={{ padding: '18px 0', color: 'var(--white)', fontWeight: 700, fontSize: '16px' }}>Net Tournament Margin</td>
                  <td style={{ padding: '18px 0', textAlign: 'right', fontFamily: 'monospace', fontWeight: 800, fontSize: '24px', color: net >= 0 ? 'var(--accent)' : 'var(--red-accent)' }}>
                    {net >= 0 ? '+' : ''}৳{net.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={{ padding: '14px', background: net >= 0 ? 'rgba(68,214,44,0.06)' : 'rgba(255,59,59,0.06)', borderRadius: '8px', border: `1px solid ${net >= 0 ? 'rgba(68,214,44,0.2)' : 'rgba(255,59,59,0.2)'}` }}>
              <p style={{ fontSize: '13px', color: net >= 0 ? 'var(--accent)' : 'var(--red-accent)', fontWeight: 600, marginBottom: '4px' }}>
                {net >= 0 ? '✓ Net Positive — Self-Funding Event' : '⚠ Net Negative — Community Building Play'}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--white-muted)' }}>
                {net >= 0 ? 'At ৳3,500 buy-in, tournaments become a profit centre on top of the engagement flywheel.' : 'At ৳2,000 buy-in, the event runs at a cost to BMT. Justified by virality, MMR activations, and brand exposure.'}
              </p>
            </div>
          </div>

          {/* Strategic Value */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { emoji: '🏆', title: 'Virality Engine', body: 'Tournaments drive the highest organic word-of-mouth. A 64-player event means 64 active BMT app users bringing squad members to sign up.' },
              { emoji: '📈', title: 'MMR Catalyst', body: 'Every competitive match creates rating changes, pushes users up leaderboards, and creates a reason to play the following week.' },
              { emoji: '💰', title: 'Future Revenue', body: 'Brand sponsorships, banner ads, streaming rights, and official BMT merchandise sales all attach naturally to organized events.' },
              { emoji: '📊', title: 'Scalable Format', body: '8-team brackets can grow to 16, 32-team city leagues. Each season can be co-branded with sports companies, energy drinks, or sports academies.' },
            ].map((item, i) => (
              <div key={i} className="glass-panel" style={{ padding: '18px 20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '24px', lineHeight: 1, flexShrink: 0 }}>{item.emoji}</span>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>{item.title}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--white-muted)', lineHeight: 1.55 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

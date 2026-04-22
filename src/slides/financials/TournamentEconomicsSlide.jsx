import { useState } from 'react';

export default function TournamentEconomicsSlide() {
  const [isPremiumBuyIn, setIsPremiumBuyIn] = useState(false);

  const costs = [
    { item: 'Venue Hire', amount: 25000 },
    { item: 'Referees', amount: 4000 },
    { item: 'Trophies / Medals', amount: 15000 },
    { item: 'Branding / Banners', amount: 8000 },
    { item: 'Logistics / Refreshments', amount: 5000 },
    { item: 'Social Media Coverage', amount: 5000 },
    { item: 'Flyers / Invitations', amount: 5000 },
    { item: 'Contingency', amount: 5000 },
  ];

  const grossCost = costs.reduce((acc, curr) => acc + curr.amount, 0);
  const TEAMS = 32;
  const buyInPerTeam = isPremiumBuyIn ? 3500 : 2000;
  const recovered = TEAMS * buyInPerTeam;
  const netMargin = recovered - grossCost;

  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto styled-scrollbar">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '32px', color: 'var(--white)', letterSpacing: '-0.02em' }}>Tournament Economics</h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Growth & Monetization Events</p>
        </div>
        
        <div className="flex items-center bg-[var(--ash-dark)] rounded-lg p-1 border border-[var(--border)]">
          <button 
            onClick={() => setIsPremiumBuyIn(false)}
            className={`px-4 py-2 text-xs font-semibold rounded ${!isPremiumBuyIn ? 'bg-[var(--accent)] text-black' : 'text-[var(--white-muted)]'}`}
          >
            BDT 2,000 Buy-In
          </button>
          <button 
            onClick={() => setIsPremiumBuyIn(true)}
            className={`px-4 py-2 text-xs font-semibold rounded ${isPremiumBuyIn ? 'bg-[var(--accent)] text-black' : 'text-[var(--white-muted)]'}`}
          >
            BDT 3,500 Buy-In
          </button>
        </div>
      </div>

      <div className="flex gap-8 flex-1">
        {/* Cost Breakdown */}
        <div className="w-1/2 p-6 rounded-xl border flex flex-col" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
          <h3 style={{ fontSize: '14px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Launch Event Cost Profile</h3>
          
          <div className="flex-1 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {costs.map((c, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="py-3 text-[var(--white)]">{c.item}</td>
                    <td className="py-3 text-right font-mono text-[var(--white-muted)]">BDT {c.amount.toLocaleString()}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: '1px solid var(--border)' }}>
                  <td className="py-4 text-[var(--white)] font-bold">Gross Cost</td>
                  <td className="py-4 text-right font-mono font-bold text-[var(--white)]">BDT {grossCost.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Buy-In Model & Narrative */}
        <div className="w-1/2 flex flex-col gap-6">
          <div className="p-6 rounded-xl border relative" style={{ background: netMargin >= 0 ? 'rgba(68,214,44,0.05)' : 'var(--ash-dark)', borderColor: netMargin >= 0 ? 'var(--accent-dim)' : 'var(--border)' }}>
            <h3 style={{ fontSize: '14px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Recovery Model</h3>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-[var(--white-muted)] text-sm">Teams Participating</span>
              <span className="font-mono text-[var(--white)] font-bold text-lg">{TEAMS}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[var(--white-muted)] text-sm">Buy-In per Team</span>
              <span className="font-mono text-[var(--accent)] text-lg font-bold">BDT {buyInPerTeam.toLocaleString()}</span>
            </div>
            
            <div className="w-full h-[1px] bg-[var(--border)] my-4"></div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-[var(--white-muted)] text-sm uppercase">Total Recovered</span>
              <span className="font-mono text-[var(--white)] text-xl font-bold">BDT {recovered.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between items-center p-4 rounded-lg bg-[var(--black)] border border-[var(--border)]">
              <span className="text-[var(--white)] text-sm font-bold uppercase">{netMargin >= 0 ? 'Net Margin' : 'Net Event Cost'}</span>
              <span className="font-mono text-2xl font-bold" style={{ color: netMargin >= 0 ? 'var(--accent)' : 'var(--ash-light)' }}>
                {netMargin >= 0 ? '+' : ''}BDT {Math.abs(netMargin).toLocaleString()}
              </span>
            </div>
            
            {netMargin >= 0 && (
              <p className="text-xs text-[var(--accent)] mt-3 text-center">Positive event margin before prize pool scaling.</p>
            )}
          </div>

          <div className="p-6 rounded-xl border relative overflow-hidden" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--white-muted)' }} />
            <h3 style={{ fontSize: '14px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Strategic Value</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--white-muted)' }}>
              Tournaments act as both a <strong className="text-[var(--white)]">growth channel</strong> and a <strong className="text-[var(--white)]">monetization mechanism</strong>. They strengthen platform retention and build deep community identity. Economics improve significantly when corporate sponsorships or scaling entry fees are introduced later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

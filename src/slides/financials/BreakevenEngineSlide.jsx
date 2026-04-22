import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';

export default function BreakevenEngineSlide({ financialState }) {
  const [isAdjusted, setIsAdjusted] = useState(false);
  const RAISE_AMOUNT = 2000000; // 20 Lakh

  // Calculate live revenue
  const monthlyGMV = financialState.turfs * financialState.bookingsPerDay * financialState.slotPrice * 30;
  const liveMonthlyRev = monthlyGMV * (financialState.takeRate / 100);
  
  // Adjusted is 25% conversion
  const activeRev = isAdjusted ? liveMonthlyRev * 0.25 : liveMonthlyRev;
  const liveBreakeven = RAISE_AMOUNT / activeRev;

  const scenariosData = [
    { name: 'Conservative (3/day)', pureRev: (40 * 3 * 2750 * 30 * 0.1), get rev() { return isAdjusted ? this.pureRev * 0.25 : this.pureRev; } },
    { name: 'Base (5/day)', pureRev: (40 * 5 * 2750 * 30 * 0.1), get rev() { return isAdjusted ? this.pureRev * 0.25 : this.pureRev; } },
    { name: 'Aggressive (7/day)', pureRev: (40 * 7 * 2750 * 30 * 0.1), get rev() { return isAdjusted ? this.pureRev * 0.25 : this.pureRev; } },
  ].map(s => ({
    name: s.name,
    months: parseFloat((RAISE_AMOUNT / s.rev).toFixed(2)),
  }));

  // Add the live one
  scenariosData.push({
    name: 'Live Model',
    months: parseFloat(liveBreakeven.toFixed(2)),
    isLive: true
  });

  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto styled-scrollbar">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '32px', color: 'var(--white)', letterSpacing: '-0.02em' }}>Breakeven Engine</h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Path to 20 Lakh Recovery</p>
        </div>
        
        <div className="flex items-center gap-3 bg-[var(--ash-dark)] p-1 rounded-lg border border-[var(--border)]">
          <button 
            onClick={() => setIsAdjusted(false)}
            className={`px-4 py-2 text-xs font-semibold rounded ${!isAdjusted ? 'bg-[var(--accent)] text-black' : 'text-[var(--white-muted)]'}`}
          >
            Pure Gross Model
          </button>
          <button 
            onClick={() => setIsAdjusted(true)}
            className={`px-4 py-2 text-xs font-semibold rounded ${isAdjusted ? 'bg-[var(--accent)] text-black' : 'text-[var(--white-muted)]'}`}
          >
            25% Adjusted Realism
          </button>
        </div>
      </div>

      <div className="flex gap-8 mb-8">
        <div className="w-1/3 flex flex-col gap-6">
          <div className="p-6 rounded-xl border flex flex-col justify-center items-center text-center relative overflow-hidden" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
            <h3 style={{ fontSize: '12px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Estimated Breakeven</h3>
            <p style={{ fontSize: '48px', fontWeight: 700, color: 'var(--accent)', fontFamily: 'mono', lineHeight: 1 }}>{liveBreakeven.toFixed(1)}</p>
            <p style={{ fontSize: '14px', color: 'var(--white)', marginTop: '8px' }}>Months</p>
            <p style={{ fontSize: '10px', color: 'var(--white-muted)', marginTop: '8px' }}>Based on live slider inputs</p>
          </div>
          
          <div className="p-5 rounded-xl border bg-[rgba(68,214,44,0.05)] border-[var(--accent-dim)]">
            <h4 style={{ fontSize: '12px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontWeight: 600 }}>Commercial Realism</h4>
            <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--white)' }}>
              {isAdjusted ? 
                "Currently viewing real-world adjusted metrics. This assumes early months face churn, delays, inactive turfs, and operational frictions, realizing only 25% of gross projected GMV." : 
                "Currently viewing pure gross metrics. Real commercial breakeven should be communicated as a multi-month path rather than a literal short-term recovery."}
            </p>
          </div>
        </div>

        <div className="w-2/3 p-6 rounded-xl border flex flex-col" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
          <h3 style={{ fontSize: '14px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Breakeven Sensitivity (Months to Recover)</h3>
          <div className="flex-1 w-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scenariosData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <XAxis type="number" stroke="var(--white-muted)" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="var(--white-muted)" fontSize={12} width={120} />
                <RechartsTooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: 'var(--black)', borderColor: 'var(--border)', color: 'var(--white)', fontSize: '12px' }}
                  formatter={(value) => [`${value} Months`, 'Breakeven']}
                />
                <Bar dataKey="months" radius={[0, 4, 4, 0]}>
                  {scenariosData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.isLive ? 'var(--accent)' : 'var(--ash-light)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

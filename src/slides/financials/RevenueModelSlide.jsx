import { useMemo } from 'react';

export default function RevenueModelSlide({ financialState, setFinancialState }) {
  // Scenario calculations
  const calculateMetrics = (turfs, bookings, slot, rate) => {
    const monthlyGMV = turfs * bookings * slot * 30;
    const monthlyRev = monthlyGMV * (rate / 100);
    const annualRev = monthlyRev * 12;
    return { monthlyGMV, monthlyRev, annualRev };
  };

  const currentMetrics = useMemo(() => 
    calculateMetrics(financialState.turfs, financialState.bookingsPerDay, financialState.slotPrice, financialState.takeRate),
  [financialState]);

  const baseMetrics = calculateMetrics(40, 5, 2750, 10);
  const consMetrics = calculateMetrics(40, 3, 2750, 10);
  const aggMetrics = calculateMetrics(40, 7, 2750, 10);

  const handleSliderChange = (e, key) => {
    setFinancialState(prev => ({ ...prev, [key]: Number(e.target.value) }));
  };

  const formatBDT = (val) => `BDT ${(val / 100000).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}L`;

  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto styled-scrollbar">
      <div className="mb-6">
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '32px', color: 'var(--white)', letterSpacing: '-0.02em' }}>Revenue Model</h2>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Interactive Assumption Engine</p>
      </div>

      <div className="p-4 mb-6 rounded-lg flex items-center gap-3 border border-[var(--accent-dim)] bg-[rgba(68,214,44,0.05)] text-sm text-[var(--white)]">
        <span className="text-[var(--accent)]">⚠️</span>
        <strong>Internal Model Assumption:</strong> The following are raw platform gross projections, not external market facts. Real-world dynamics will apply friction.
      </div>

      <div className="flex gap-8 mb-8">
        {/* Sliders */}
        <div className="flex-1 p-6 rounded-xl border flex flex-col gap-6" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
          <h3 style={{ fontSize: '14px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Control Panel</h3>
          
          {[
            { label: 'Turfs Onboarded', key: 'turfs', min: 10, max: 80, step: 1, val: financialState.turfs, unit: '' },
            { label: 'Avg Bookings/Day/Turf', key: 'bookingsPerDay', min: 1, max: 10, step: 0.5, val: financialState.bookingsPerDay, unit: '' },
            { label: 'Avg Slot Price (BDT)', key: 'slotPrice', min: 1500, max: 3500, step: 50, val: financialState.slotPrice, unit: ' ৳' },
            { label: 'Platform Take Rate', key: 'takeRate', min: 5, max: 15, step: 0.5, val: financialState.takeRate, unit: '%' },
          ].map((slider) => (
            <div key={slider.key}>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-[var(--white)]">{slider.label}</label>
                <span className="text-sm font-mono text-[var(--accent)]">{slider.val}{slider.unit}</span>
              </div>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={slider.val}
                onChange={(e) => handleSliderChange(e, slider.key)}
                className="w-full accent-[var(--accent)]"
              />
            </div>
          ))}
        </div>

        {/* Live Output */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="col-span-2 p-6 rounded-xl border" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
            <p className="text-[12px] text-[var(--white-muted)] uppercase tracking-wider mb-2">Live Monthly GMV</p>
            <p className="text-3xl font-mono text-[var(--white)]">{formatBDT(currentMetrics.monthlyGMV)}</p>
          </div>
          <div className="p-6 rounded-xl border" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
            <p className="text-[12px] text-[var(--white-muted)] uppercase tracking-wider mb-2">Live Monthly Rev</p>
            <p className="text-2xl font-mono text-[var(--accent)]">{formatBDT(currentMetrics.monthlyRev)}</p>
          </div>
          <div className="p-6 rounded-xl border" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
            <p className="text-[12px] text-[var(--white-muted)] uppercase tracking-wider mb-2">Live Annual Rev</p>
            <p className="text-2xl font-mono text-[var(--accent)]">{formatBDT(currentMetrics.annualRev)}</p>
          </div>
        </div>
      </div>

      {/* Static Scenario Table */}
      <div className="p-6 rounded-xl border" style={{ background: 'var(--black)', borderColor: 'var(--border)' }}>
        <h3 style={{ fontSize: '14px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Baseline Benchmarks (40 Turfs, 2750 Slot, 10% Take)</h3>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th className="text-left pb-3 font-medium text-[var(--white-muted)]">Scenario</th>
              <th className="text-right pb-3 font-medium text-[var(--white-muted)]">Bookings/Day</th>
              <th className="text-right pb-3 font-medium text-[var(--white-muted)]">Monthly GMV</th>
              <th className="text-right pb-3 font-medium text-[var(--white-muted)]">Monthly Rev</th>
              <th className="text-right pb-3 font-medium text-[var(--white-muted)]">Annual Rev</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Conservative', bookings: 3, gmv: formatBDT(consMetrics.monthlyGMV), rev: formatBDT(consMetrics.monthlyRev), ann: formatBDT(consMetrics.annualRev) },
              { name: 'Base', bookings: 5, gmv: formatBDT(baseMetrics.monthlyGMV), rev: formatBDT(baseMetrics.monthlyRev), ann: formatBDT(baseMetrics.annualRev), highlight: true },
              { name: 'Aggressive', bookings: 7, gmv: formatBDT(aggMetrics.monthlyGMV), rev: formatBDT(aggMetrics.monthlyRev), ann: formatBDT(aggMetrics.annualRev) },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: row.highlight ? 'rgba(68,214,44,0.05)' : 'transparent' }}>
                <td className="py-3 text-[var(--white)] font-medium">{row.name}</td>
                <td className="py-3 text-right text-[var(--white)]">{row.bookings}</td>
                <td className="py-3 text-right text-[var(--white)] font-mono">{row.gmv}</td>
                <td className="py-3 text-right text-[var(--accent)] font-mono">{row.rev}</td>
                <td className="py-3 text-right text-[var(--accent)] font-mono">{row.ann}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

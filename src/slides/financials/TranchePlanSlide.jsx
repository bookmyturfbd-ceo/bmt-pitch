import { useState } from 'react';

export default function TranchePlanSlide() {
  const [activeOption, setActiveOption] = useState('A');

  const options = {
    A: {
      name: 'Option A (Recommended)',
      tranches: [
        { title: 'Tranche 1', amount: 'BDT 4 Lakh', trigger: 'At Signing', use: 'Legal setup, first 2 mos payroll, field onboarding, launch ads', risk: 'Proves operational readiness' },
        { title: 'Tranche 2', amount: 'BDT 6 Lakh', trigger: '20 Turfs + Public App + 300 MAU', use: 'Accelerated marketing, mid-stage payroll', risk: 'Proves initial product-market fit' },
        { title: 'Tranche 3', amount: 'BDT 10 Lakh', trigger: '40 Turfs + 1000 MAU + 1 Tournament', use: 'Scaling, Phase 2 salaries, buffer', risk: 'Proves repeatable growth engine' }
      ]
    },
    B: {
      name: 'Option B (Stricter Control)',
      tranches: [
        { title: 'Tranche 1', amount: 'BDT 3 Lakh', trigger: 'At Signing', use: 'Legal & setup only', risk: 'Minimal capital at risk' },
        { title: 'Tranche 2', amount: 'BDT 4 Lakh', trigger: 'App Launch', use: 'Initial marketing blast', risk: 'Verifies tech delivery' },
        { title: 'Tranche 3', amount: 'BDT 5 Lakh', trigger: '20 Turfs', use: 'Sustained operations', risk: 'Verifies supply acquisition' },
        { title: 'Tranche 4', amount: 'BDT 8 Lakh', trigger: '40 Turfs', use: 'Growth and reserves', risk: 'Scale capital' }
      ]
    },
    C: {
      name: 'Option C (Founder Friendly)',
      tranches: [
        { title: 'Tranche 1', amount: 'BDT 7 Lakh', trigger: 'At Signing', use: 'First 6 months full ops & marketing', risk: 'Higher upfront trust' },
        { title: 'Tranche 2', amount: 'BDT 13 Lakh', trigger: '40 Turfs or Month 6', use: 'Phase 2 & Strategic Reserve', risk: 'Smooth operations' }
      ]
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto styled-scrollbar">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '32px',
            color: 'var(--white)',
            letterSpacing: '-0.02em',
          }}>Tranche Plan</h2>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginTop: '4px',
          }}>Derisking Investor Capital</p>
        </div>
        
        <div className="flex gap-2">
          {['A', 'B', 'C'].map(opt => (
            <button
              key={opt}
              onClick={() => setActiveOption(opt)}
              className={`px-4 py-2 rounded border transition-colors ${activeOption === opt ? 'bg-[var(--accent)] text-black border-[var(--accent)]' : 'bg-[var(--ash-dark)] text-[var(--white-muted)] border-[var(--border)] hover:border-[var(--accent-dim)]'}`}
              style={{ fontSize: '12px', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}
            >
              Option {opt}
            </button>
          ))}
        </div>
      </div>

      <p style={{ fontSize: '14px', color: 'var(--white-muted)', marginBottom: '24px' }}>
        Assume the investor will not release BDT 20 lakh at once. We recommend Option A as the primary structure unless the investor prefers tighter control.
      </p>

      <div className="flex gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h3 style={{ fontSize: '18px', color: 'var(--white)', fontWeight: 600 }}>{options[activeOption].name}</h3>
          
          <div className="space-y-4">
            {options[activeOption].tranches.map((tranche, i) => (
              <div key={i} className="p-5 rounded-xl border relative" style={{ background: 'var(--ash-dark)', borderLeft: '4px solid var(--accent)', borderColor: 'var(--border)' }}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 style={{ fontSize: '14px', color: 'var(--white)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{tranche.title}</h4>
                    <p style={{ fontSize: '13px', color: 'var(--accent)', marginTop: '4px', fontWeight: 500 }}>Trigger: {tranche.trigger}</p>
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', fontFamily: 'monospace' }}>
                    {tranche.amount}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Funds Used For</span>
                    <span style={{ fontSize: '13px', color: 'var(--white)' }}>{tranche.use}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Risk Mitigation</span>
                    <span style={{ fontSize: '13px', color: 'var(--white)' }}>{tranche.risk}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[300px] p-6 rounded-xl border flex flex-col" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
          <h3 style={{ fontSize: '14px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px' }}>Expected Runway</h3>
          
          <div className="flex-1 flex flex-col justify-between">
            <div className="relative pl-6 pb-6 border-l border-[var(--border)]">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[var(--accent)]" />
              <h4 style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 600 }}>Months 1–2</h4>
              <p style={{ fontSize: '12px', color: 'var(--white-muted)', marginTop: '4px' }}>Setup, Launch & Initial Acquisition</p>
            </div>
            <div className="relative pl-6 pb-6 border-l border-[var(--border)]">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[var(--accent-dim)]" />
              <h4 style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 600 }}>Months 3–4</h4>
              <p style={{ fontSize: '12px', color: 'var(--white-muted)', marginTop: '4px' }}>Traction Building & Tournament 1</p>
            </div>
            <div className="relative pl-6 pb-6 border-l border-[var(--border)]">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[var(--accent-dim)]" />
              <h4 style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 600 }}>Months 5–6</h4>
              <p style={{ fontSize: '12px', color: 'var(--white-muted)', marginTop: '4px' }}>Hitting 40 Turfs, Stabilizing Velocity</p>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[var(--ash-light)]" />
              <h4 style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 600 }}>Months 7–12</h4>
              <p style={{ fontSize: '12px', color: 'var(--white-muted)', marginTop: '4px' }}>Scale, Optimization & Reserve Buffer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

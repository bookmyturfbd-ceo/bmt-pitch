import { useState } from 'react';

const OPTIONS = {
  A: {
    label: 'Option A — Recommended',
    tranches: [
      { t: 'Tranche 1', amount: 'BDT 4 Lakh', trigger: 'At Signing', use: 'Legal setup, 2 months payroll, field onboarding, launch materials + ads test', risk: 'Proves operational readiness' },
      { t: 'Tranche 2', amount: 'BDT 6 Lakh', trigger: '20 Turfs + Public App + 300 MAU', use: 'Accelerated marketing, mid-stage payroll', risk: 'Proves initial product-market fit' },
      { t: 'Tranche 3', amount: 'BDT 10 Lakh', trigger: '40 Turfs + 1000 MAU + 1 Tournament', use: 'Scale, Phase 2 salaries, reserve buffer', risk: 'Proves repeatable growth engine' },
    ],
  },
  B: {
    label: 'Option B — Stricter Control',
    tranches: [
      { t: 'Tranche 1', amount: 'BDT 3 Lakh',  trigger: 'At Signing',   use: 'Legal & setup only', risk: 'Minimal capital at risk' },
      { t: 'Tranche 2', amount: 'BDT 4 Lakh',  trigger: 'App Launch',   use: 'Initial marketing',  risk: 'Verifies tech delivery' },
      { t: 'Tranche 3', amount: 'BDT 5 Lakh',  trigger: '20 Turfs',     use: 'Sustained ops',      risk: 'Verifies supply acquisition' },
      { t: 'Tranche 4', amount: 'BDT 8 Lakh',  trigger: '40 Turfs',     use: 'Growth & reserves',  risk: 'Scale capital' },
    ],
  },
  C: {
    label: 'Option C — Founder Friendly',
    tranches: [
      { t: 'Tranche 1', amount: 'BDT 7 Lakh',  trigger: 'At Signing',           use: 'First 6 months full ops & marketing', risk: 'Higher upfront trust' },
      { t: 'Tranche 2', amount: 'BDT 13 Lakh', trigger: '40 Turfs or Month 6',  use: 'Phase 2 & Strategic Reserve',         risk: 'Smooth operations' },
    ],
  },
};

export default function TranchePlanSlide() {
  const [active, setActive] = useState('A');
  const opt = OPTIONS[active];

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.012)' }}>TRANCHE</div>

      <div className="slide-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span className="slide-label">Raise & Financials — 04</span>
            <h2 className="slide-title">Tranche <span style={{ color: 'var(--accent)' }}>Plan.</span></h2>
          </div>
          <div style={{ display: 'flex', gap: '8px', background: 'var(--ash-mid)', borderRadius: '10px', padding: '4px', border: '1px solid var(--border)' }}>
            {['A', 'B', 'C'].map(o => (
              <button key={o} onClick={() => setActive(o)} style={{ padding: '8px 18px', borderRadius: '7px', border: 'none', cursor: 'pointer', fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, background: active === o ? 'var(--accent)' : 'transparent', color: active === o ? 'var(--black)' : 'var(--white-muted)', transition: 'all 0.2s' }}>
                Option {o}
              </button>
            ))}
          </div>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--white-muted)', marginTop: '-8px' }}>Milestone-gated releases derisk the investor. We recommend Option A unless tighter control is preferred.</p>

        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '14px', color: 'var(--white)', fontWeight: 600 }}>{opt.label}</h3>
            {opt.tranches.map((tr, i) => (
              <div key={i} className="glass-panel" style={{ padding: '20px 22px', borderLeft: '4px solid var(--accent)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: 'var(--white)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tr.t}</span>
                    <p style={{ fontSize: '12px', color: 'var(--accent)', marginTop: '3px', fontWeight: 500 }}>Trigger: {tr.trigger}</p>
                  </div>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--white)', fontFamily: 'monospace' }}>{tr.amount}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <span style={{ fontSize: '10px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '2px' }}>Funds Used For</span>
                    <span style={{ fontSize: '12px', color: 'var(--white)' }}>{tr.use}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '10px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '2px' }}>Risk Mitigation</span>
                    <span style={{ fontSize: '12px', color: 'var(--white)' }}>{tr.risk}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="glass-panel" style={{ width: '260px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h3 style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Expected Runway</h3>
            {[
              { period: 'Months 1–2', desc: 'Setup, Launch & Initial Acquisition' },
              { period: 'Months 3–4', desc: 'Traction Building & Tournament 1' },
              { period: 'Months 5–6', desc: 'Hitting 40 Turfs, Stable Velocity' },
              { period: 'Months 7–12', desc: 'Scale, Optimise & Reserve Buffer' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', paddingBottom: '18px', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: i === 0 ? 'var(--accent)' : 'var(--border)', flexShrink: 0 }} />
                  {i < 3 && <div style={{ width: '2px', flex: 1, background: 'var(--border)' }} />}
                </div>
                <div style={{ paddingBottom: '4px' }}>
                  <p style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 600 }}>{item.period}</p>
                  <p style={{ fontSize: '12px', color: 'var(--white-muted)', marginTop: '2px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

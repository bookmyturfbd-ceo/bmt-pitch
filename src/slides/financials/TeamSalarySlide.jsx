export default function TeamSalarySlide() {
  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.01)' }}>TEAM</div>

      <div className="slide-inner">
        <div>
          <span className="slide-label">Raise & Financials — 03</span>
          <h2 className="slide-title">Team & <span style={{ color: 'var(--accent)' }}>Salary Plan.</span></h2>
        </div>

        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          {/* Payroll table */}
          <div className="glass-panel" style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '13px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>Payroll Evolution</h3>
            <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Role', 'Phase 1 / Launch', 'Phase 2 / Traction'].map(h => (
                    <th key={h} style={{ textAlign: h === 'Role' ? 'left' : 'right', paddingBottom: '10px', color: 'var(--white-muted)', fontWeight: 500, fontSize: '11px' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { role: 'C-Suite (×3)', p1: 'BDT 20,000', p2: 'BDT 35,000' },
                  { role: 'HOD (×1)',     p1: 'BDT 10,000', p2: 'BDT 18,000' },
                  { role: 'Field Ops (×1)', p1: 'BDT 6,000', p2: 'BDT 10,000' },
                ].map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '13px 0', color: 'var(--white)' }}>{r.role}</td>
                    <td style={{ padding: '13px 0', textAlign: 'right', color: 'var(--accent)', fontFamily: 'monospace' }}>{r.p1}</td>
                    <td style={{ padding: '13px 0', textAlign: 'right', color: 'var(--white)', fontFamily: 'monospace' }}>{r.p2}</td>
                  </tr>
                ))}
                <tr style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)' }}>
                  <td style={{ padding: '14px 0', color: 'var(--white)', fontWeight: 600 }}>Monthly Total</td>
                  <td style={{ padding: '14px 0', textAlign: 'right', color: 'var(--accent)', fontWeight: 700, fontFamily: 'monospace' }}>BDT 76,000</td>
                  <td style={{ padding: '14px 0', textAlign: 'right', color: 'var(--white)', fontWeight: 700, fontFamily: 'monospace' }}>BDT 1,33,000</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: '11px', color: 'var(--white-muted)' }}>* Monthly delta after Phase 2 trigger: +BDT 57,000/month</p>
          </div>

          {/* Narrative */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="glass-panel" style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--accent)' }} />
              <h4 style={{ fontSize: '13px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>The Founder Sacrifice</h4>
              <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--white-muted)' }}>
                The founding team is intentionally underpaying itself during the launch phase. BDT 20,000 per C-Suite is a founder sacrifice, not a market salary. The explicit purpose is to maximize runway and prove traction first.
              </p>
            </div>

            <div className="glass-panel-accent" style={{ padding: '24px', flex: 1 }}>
              <h4 style={{ fontSize: '13px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px', fontWeight: 700 }}>Phase 2 Trigger — Any 2 of 3</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '18px' }}>
                {['40+ turfs live and transacting', '1,000+ Monthly Active Users in Dhaka', 'First tournament completed with buy-in recovery above BDT 50,000'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--white-muted)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span><span>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ padding: '14px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <p style={{ fontSize: '12px', color: 'var(--white-muted)', fontStyle: 'italic', lineHeight: 1.55 }}>
                  Investor Reassurance: "This structure ties team compensation to traction and execution, not just time passed."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

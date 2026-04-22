import { motion } from 'framer-motion';

export default function TeamSalarySlide() {
  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto styled-scrollbar">
      <div className="mb-8">
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '32px',
          color: 'var(--white)',
          letterSpacing: '-0.02em',
        }}>Team & Salary Plan</h2>
        <p style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginTop: '4px',
        }}>Milestone-Driven Compensation</p>
      </div>

      <div className="flex gap-8 mb-8">
        {/* Phase 1 vs Phase 2 Table */}
        <div className="flex-1 p-6 rounded-xl border" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
          <h3 style={{ fontSize: '14px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Payroll Evolution</h3>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th className="text-left pb-3 font-medium text-[var(--white-muted)]">Role</th>
                <th className="text-right pb-3 font-medium text-[var(--white-muted)]">Phase 1 (Launch)</th>
                <th className="text-right pb-3 font-medium text-[var(--white-muted)]">Phase 2 (Traction)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { role: 'C-Suite (x3)', phase1: 'BDT 20,000', phase2: 'BDT 35,000' },
                { role: 'HOD (x1)', phase1: 'BDT 10,000', phase2: 'BDT 18,000' },
                { role: 'Field Operator (x1)', phase1: 'BDT 6,000', phase2: 'BDT 10,000' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="py-3 text-[var(--white)]">{row.role}</td>
                  <td className="py-3 text-right text-[var(--accent)] font-mono">{row.phase1}</td>
                  <td className="py-3 text-right text-[var(--white)] font-mono">{row.phase2}</td>
                </tr>
              ))}
              <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                <td className="py-4 text-[var(--white)] font-medium">Total Monthly</td>
                <td className="py-4 text-right text-[var(--accent)] font-bold font-mono">BDT 76,000</td>
                <td className="py-4 text-right text-[var(--white)] font-bold font-mono">BDT 1,33,000</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-xs" style={{ color: 'var(--white-muted)' }}>
            * Monthly increase required after Phase 2 trigger: BDT 57,000/month.
          </p>
        </div>

        {/* Narrative & Milestone */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="p-6 rounded-xl border relative overflow-hidden" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent)' }} />
            <h3 style={{ fontSize: '14px', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>The Founder Sacrifice</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--white-muted)' }}>
              The founding team is intentionally underpaying itself during the launch phase. BDT 20,000 for each C-Suite is a founder sacrifice, not a market salary. The explicit purpose is to maximize runway and prove traction first.
            </p>
          </div>

          <div className="p-6 rounded-xl border relative overflow-hidden" style={{ background: 'rgba(68, 214, 44, 0.05)', borderColor: 'var(--accent-dim)' }}>
            <h3 style={{ fontSize: '14px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontWeight: 600 }}>Phase 2 Trigger Milestones</h3>
            <p style={{ fontSize: '13px', color: 'var(--white)', marginBottom: '12px' }}>
              Phase 2 salaries unlock at Month 6 OR once any 2 of these 3 milestones are achieved:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                '40+ turfs live and transacting',
                '1,000+ Monthly Active Users in Dhaka',
                'First tournament completed with buy-in recovery above BDT 50,000',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--white-muted)] items-start">
                  <span style={{ color: 'var(--accent)' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-3 rounded bg-black/40 border border-[var(--border)] mt-4">
              <p style={{ fontSize: '12px', color: 'var(--white-muted)', fontStyle: 'italic' }}>
                Investor Reassurance: “This structure ties team compensation to traction and execution, not just time passed. If the raise starts in Month 7, the strategic reserve safely absorbs the Phase 2 delta.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

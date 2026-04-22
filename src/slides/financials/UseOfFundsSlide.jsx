import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const ALLOC = [
  { name: 'Team & Payroll',  value: 912000,  pct: '45.6%', color: '#44D62C' },
  { name: 'Marketing',       value: 280000,  pct: '14.0%', color: '#33A121' },
  { name: 'Tech (1yr)',      value: 59400,   pct: '3.0%',  color: '#226D16' },
  { name: 'Ops & Legal',     value: 97000,   pct: '4.8%',  color: '#11360B' },
  { name: 'Reserve',         value: 651600,  pct: '32.6%', color: '#66F84D' },
];

const stackedData = [{ name: 'Funds', Fixed: 1068400, Growth: 280000, Reserve: 651600 }];

export default function UseOfFundsSlide() {
  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.012)' }}>FUNDS</div>
      <div className="ambient-glow" style={{ width: '600px', height: '600px', background: 'rgba(68,214,44,0.04)', bottom: '-10%', left: '-5%' }} />

      <div className="slide-inner">
        <div>
          <span className="slide-label">Raise & Financials — 02</span>
          <h2 className="slide-title">Use of <span style={{ color: 'var(--accent)' }}>Funds.</span></h2>
        </div>

        <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
          {/* Table + bar */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Allocation Breakdown</h3>
              <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    {['Category', 'Amount', '% of Total'].map(h => (
                      <th key={h} style={{ textAlign: h === 'Category' ? 'left' : 'right', paddingBottom: '10px', fontWeight: 500, color: 'var(--white-muted)', fontSize: '11px' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ALLOC.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '11px 0', color: 'var(--white)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: row.color, flexShrink: 0, display: 'inline-block' }} />
                        {row.name}
                      </td>
                      <td style={{ padding: '11px 0', textAlign: 'right', fontFamily: 'monospace', color: 'var(--white)' }}>BDT {row.value.toLocaleString()}</td>
                      <td style={{ padding: '11px 0', textAlign: 'right', color: 'var(--accent)', fontWeight: 600 }}>{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="glass-panel" style={{ padding: '24px', flex: 1 }}>
              <h3 style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Deployment Profile</h3>
              <div style={{ height: '110px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={stackedData}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" hide />
                    <Tooltip contentStyle={{ background: 'var(--ash-dark)', border: '1px solid var(--border)', color: 'var(--white)', fontSize: '12px' }} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                    <Bar dataKey="Fixed"   stackId="a" fill="#226D16" name="Fixed & Ops" />
                    <Bar dataKey="Growth"  stackId="a" fill="#44D62C" name="Growth & Marketing" />
                    <Bar dataKey="Reserve" stackId="a" fill="#11360B" name="Strategic Reserve" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Pie */}
          <div className="glass-panel" style={{ width: '42%', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Visual Distribution</h3>
            <div style={{ flex: 1, minHeight: '280px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={ALLOC} cx="50%" cy="50%" innerRadius={75} outerRadius={115} paddingAngle={2} dataKey="value" stroke="none">
                    {ALLOC.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip formatter={v => `BDT ${v.toLocaleString()}`} contentStyle={{ background: 'var(--ash-dark)', border: '1px solid var(--border)', color: 'var(--white)', fontSize: '12px' }} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

export default function UseOfFundsSlide() {
  const tableData = [
    { category: 'Team & Payroll (Phase 1)', amount: 'BDT 9,12,000', percentage: '45.6%' },
    { category: 'Tech Infrastructure (1 Yr)', amount: 'BDT 59,400', percentage: '3.0%' },
    { category: 'Ops & Legal (Setup + 1 Yr)', amount: 'BDT 97,000', percentage: '4.8%' },
    { category: 'Marketing & Activation', amount: 'BDT 2,80,000', percentage: '14.0%' },
    { category: 'Strategic Reserve / Runway', amount: 'BDT 6,51,600', percentage: '32.6%' },
  ];

  const pieData = [
    { name: 'Payroll', value: 912000 },
    { name: 'Tech', value: 59400 },
    { name: 'Ops & Legal', value: 97000 },
    { name: 'Marketing', value: 280000 },
    { name: 'Reserve', value: 651600 },
  ];
  
  const COLORS = ['#44D62C', '#33A121', '#226D16', '#11360B', '#66F84D'];

  const stackedData = [
    {
      name: 'Fund Allocation',
      Fixed: 1068400, // Payroll + Tech + Ops
      Growth: 280000, // Marketing
      Reserve: 651600,
    }
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto styled-scrollbar">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '32px',
            color: 'var(--white)',
            letterSpacing: '-0.02em',
          }}>Use of Funds</h2>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginTop: '4px',
          }}>BDT 20 Lakh Capital Deployment</p>
        </div>
      </div>

      <div className="flex gap-8 flex-1">
        <div className="flex-1 flex flex-col gap-6">
          <div className="p-6 rounded-xl border" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
            <h3 style={{ fontSize: '14px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Allocation Breakdown</h3>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th className="text-left pb-3 font-medium text-[var(--white-muted)]">Category</th>
                  <th className="text-right pb-3 font-medium text-[var(--white-muted)]">Amount</th>
                  <th className="text-right pb-3 font-medium text-[var(--white-muted)]">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="py-3 text-[var(--white)]">{row.category}</td>
                    <td className="py-3 text-right text-[var(--white)] font-mono">{row.amount}</td>
                    <td className="py-3 text-right text-[var(--accent)] font-medium">{row.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 rounded-xl border flex-1" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
            <h3 style={{ fontSize: '14px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Deployment Profile</h3>
            <div className="h-[120px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={stackedData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" hide />
                  <RechartsTooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: 'var(--black)', borderColor: 'var(--border)', color: 'var(--white)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="Fixed" stackId="a" fill="#226D16" name="Fixed & Ops" />
                  <Bar dataKey="Growth" stackId="a" fill="#44D62C" name="Growth & Activation" />
                  <Bar dataKey="Reserve" stackId="a" fill="#11360B" name="Strategic Reserve" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 rounded-xl border flex flex-col" style={{ background: 'var(--ash-dark)', borderColor: 'var(--border)' }}>
          <h3 style={{ fontSize: '14px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Visual Distribution</h3>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  formatter={(value) => `BDT ${value.toLocaleString()}`}
                  contentStyle={{ backgroundColor: 'var(--black)', borderColor: 'var(--border)', color: 'var(--white)' }}
                  itemStyle={{ color: 'var(--accent)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

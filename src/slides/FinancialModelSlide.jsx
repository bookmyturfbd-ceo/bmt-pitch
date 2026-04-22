// Slide 9: Financial Model
export default function FinancialModelSlide() {
  const turfs = 40;
  const avgSlot = 2750;
  const days = 30;
  const takeRate = 0.10;

  const formatBDT = (val) => `৳${val.toLocaleString('en-BD')}`;

  const scenarios = [
    { name: 'Conservative', bookings: 3, color: '#44D62C' },
    { name: 'Base', bookings: 5, color: '#A8D8A0' },
    { name: 'Aggressive', bookings: 7, color: '#8EC8E8' },
  ].map(s => {
    const gmv = turfs * s.bookings * avgSlot * days;
    const rev = gmv * takeRate;
    return { ...s, gmv, rev };
  });

  const mauScenarios = [
    { name: 'Base', users: '5,000' },
    { name: 'Aggressive', users: '10,000' },
    { name: 'Breakout', users: '20,000' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden noise" style={{ background: '#050505' }}>
      
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.015)' }}>PROJECTIONS</div>
      <div className="ambient-glow" style={{ width: '800px', height: '800px', background: 'rgba(68,214,44,0.03)', top: '10%', right: '10%' }} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12 justify-between">
        <div className="mb-8">
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
            color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            09 — Financial Projections
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)',
            color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
          }}>
            Launch <span style={{ color: 'var(--accent)' }}>Model.</span>
          </h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--white-muted)', marginTop: '8px', letterSpacing: '0.05em' }}>
            *INTERNAL GO-TO-MARKET ASSUMPTIONS
          </p>
        </div>

        <div className="flex-1 flex gap-8">
          
          {/* GMV Scenarios */}
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              <div className="glass-panel" style={{ padding: '24px' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Launch Turfs</span>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '32px', color: 'var(--white)' }}>{turfs}</p>
              </div>
              <div className="glass-panel" style={{ padding: '24px' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Avg Slot Price</span>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '32px', color: 'var(--white)' }}>৳2,750</p>
              </div>
              <div className="glass-panel-accent" style={{ padding: '24px' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Take Rate</span>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '32px', color: 'var(--white)' }}>10%</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', flex: 1 }}>
              {scenarios.map((s, i) => (
                <div key={i} className="glass-panel" style={{ borderTop: `4px solid ${s.color}`, padding: '32px', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: 'var(--white)', marginBottom: '4px' }}>{s.name}</h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: s.color, marginBottom: '24px' }}>{s.bookings} Bookings/Day/Turf</p>
                  
                  <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Monthly GMV</span>
                      <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '24px', color: 'var(--white)' }}>{formatBDT(s.gmv)}</p>
                    </div>
                    <div style={{ height: '1px', background: 'var(--border)' }} />
                    <div>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Net Revenue (10%)</span>
                      <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '32px', color: 'var(--accent)' }}>{formatBDT(s.rev)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Users */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--white-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
              Active User Projections (MAU)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {mauScenarios.map((mau, i) => (
                <div key={i} className="glass-panel" style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', color: 'var(--white)' }}>{mau.name}</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '32px', color: i===2 ? 'var(--accent)' : 'var(--white)' }}>{mau.users}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

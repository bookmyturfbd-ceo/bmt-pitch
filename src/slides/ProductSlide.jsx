// Slide 3: Product
export default function ProductSlide() {
  const modules = [
    {
      id: 'A', title: 'Booking & Payments', tagline: 'Utility drives acquisition', color: '#44D62C',
      features: ['Real-time slot inventory', 'Instant bKash payment', 'Automated split-cost logic', 'Wallet deduction per player']
    },
    {
      id: 'B', title: 'Social & Team Layer', tagline: 'Social graph drives retention', color: '#8EC8E8',
      features: ['Team creation & management', 'Inviting friends / Roster builder', 'Casual group creation', 'Find players & Transfer market']
    },
    {
      id: 'C', title: 'Competitive Layer', tagline: 'MMR drives habit', color: '#E8A0C0',
      features: ['Challenge Market matchmaking', 'Team MMR & Player MMR', 'Global Leaderboards & Badges', 'Seasonal play & Live scoring']
    },
    {
      id: 'D', title: 'Owner Infrastructure', tagline: 'Owner ERP drives supply lock-in', color: '#A8D8A0',
      features: ['Turf owner dashboard', 'Mini-ERP / Profit-Loss layer', 'Automated utilization tracking', 'Dynamic pricing controls']
    },
    {
      id: 'E', title: 'Professionals Dashboard', tagline: 'Gig economy drives ecosystem', color: '#E8D8A0',
      features: ['Coaches & Physios profiles', 'Direct player connection', 'Service booking & payments', 'Verified reviews & ratings']
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden noise" style={{ background: '#050505' }}>
      
      {/* Top gradient bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--accent-dim), var(--accent), var(--accent-dim))', zIndex: 1 }} />
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.01)' }}>ECOSYSTEM</div>
      <div className="ambient-glow" style={{ width: '800px', height: '800px', background: 'rgba(68,214,44,0.04)', bottom: '-20%', right: '10%' }} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12 justify-between">
        {/* Header */}
        <div className="mb-10">
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
            color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            03 — The Product
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)',
            color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
          }}>
            Five Modules. <br/>
            <span style={{ color: 'var(--accent)' }}>One Ecosystem.</span>
          </h2>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-5 gap-4 flex-1 mb-auto">
          {modules.map((mod) => (
            <div key={mod.id} className="glass-panel" style={{
              borderTop: `2px solid ${mod.color}80`,
              padding: '28px 20px', display: 'flex', flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Module ID */}
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%', background: `${mod.color}15`,
                border: `1px solid ${mod.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '14px', color: mod.color, marginBottom: '16px'
              }}>
                {mod.id}
              </div>

              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', color: 'var(--white)', marginBottom: '6px' }}>
                {mod.title}
              </h3>
              
              <div style={{
                background: `${mod.color}15`, padding: '4px 8px', borderRadius: '2px', marginBottom: '20px', width: 'fit-content'
              }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', color: mod.color, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {mod.tagline}
                </span>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', margin: 0, padding: 0, flex: 1 }}>
                {mod.features.map((feat, i) => (
                  <li key={i} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--white-muted)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: mod.color, opacity: 0.9, fontSize: '14px' }}>✓</span>
                    <span style={{ lineHeight: 1.4 }}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

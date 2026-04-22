// Slide 6: Why We Win
export default function WhyWeWinSlide() {
  const advantages = [
    {
      id: 1, title: 'Wider Product Depth', tagline: 'Utility gets the user in.', color: '#44D62C',
      desc: 'Booking a slot is a commodity. Managing a 15-man squad, splitting payments, and challenging rivals requires a platform. We build the platform.'
    },
    {
      id: 2, title: 'Higher Retention Engine', tagline: 'Competition keeps them active.', color: '#A8D8A0',
      desc: 'The Challenge Market and Seasonal Leaderboards ensure teams return to play for points, not just practice.'
    },
    {
      id: 3, title: 'Defensible Network Effects', tagline: 'Identity keeps them loyal.', color: '#8EC8E8',
      desc: 'Player MMR and Team Badges create digital sports identities that users will not abandon for a 10% discount on a rival booking app.'
    },
    {
      id: 4, title: 'Better Operator Economics', tagline: 'ERP keeps supply sticky.', color: '#E8A0C0',
      desc: 'Turf owners get a Mini-ERP for P&L, utilization tracking, and offline walk-in management—locking them into our B2B ecosystem.'
    },
    {
      id: 5, title: 'Stronger Expansion Path', tagline: 'Beyond the pitch.', color: '#FFFFFF',
      desc: 'Once the ecosystem is established, expanding into commerce, ticketing, coaching, and sponsored tournaments is frictionless.'
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col overflow-y-auto styled-scrollbar noise" style={{ background: '#050505' }}>

      <div className="watermark" style={{ color: 'rgba(255,255,255,0.015)' }}>MOATS</div>
      <div className="ambient-glow" style={{ width: '800px', height: '800px', background: 'rgba(68,214,44,0.03)', top: '10%', right: '10%' }} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12 justify-between min-h-max">
        <div className="mb-10">
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
            color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            06 — Strategic Moats
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)',
            color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
          }}>
            Why We <span style={{ color: 'var(--accent)' }}>Win.</span>
          </h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: 'var(--white-muted)', marginTop: '16px', maxWidth: '600px', lineHeight: 1.5 }}>
            Turfly and Khelboo can solve booking. Book My Turf solves the full amateur sports lifecycle.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-6 mb-auto pt-8">
          {advantages.map((adv) => (
            <div key={adv.id} className="glass-panel" style={{
              padding: '36px 28px', display: 'flex', flexDirection: 'column',
              position: 'relative', overflow: 'hidden'
            }}>
              {/* Top Accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: adv.color }} />
              
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '64px', color: 'rgba(255,255,255,0.06)', lineHeight: 1, marginBottom: '16px' }}>
                0{adv.id}
              </span>

              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '22px', color: 'var(--white)', marginBottom: '16px', lineHeight: 1.2 }}>
                {adv.title}
              </h3>
              
              <div style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '24px', width: 'fit-content' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: adv.color, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {adv.tagline}
                </span>
              </div>

              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: 'var(--white-muted)', lineHeight: 1.6, flex: 1 }}>
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

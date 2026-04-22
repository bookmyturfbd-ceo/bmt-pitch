export default function WhyWeWinSlide() {
  const advantages = [
    { id: 1, title: 'Wider Product Depth',       tagline: 'Utility gets the user in.',        color: '#44D62C', desc: 'Booking a slot is a commodity. Managing a 15-man squad, splitting payments, and challenging rivals requires a platform. We build the platform.' },
    { id: 2, title: 'Higher Retention Engine',   tagline: 'Competition keeps them active.',   color: '#A8D8A0', desc: 'The Challenge Market and Seasonal Leaderboards ensure teams return to play for points, not just practice.' },
    { id: 3, title: 'Defensible Network Effects',tagline: 'Identity keeps them loyal.',       color: '#8EC8E8', desc: 'Player MMR and Team Badges create digital sports identities that users will not abandon for a 10% discount on a rival booking app.' },
    { id: 4, title: 'Better Operator Economics', tagline: 'ERP keeps supply sticky.',         color: '#E8A0C0', desc: 'Turf owners get a Mini-ERP for P&L, utilization tracking, and offline walk-in management — locking them into our B2B ecosystem.' },
    { id: 5, title: 'Stronger Expansion Path',   tagline: 'Beyond the pitch.',                color: '#E8D8A0', desc: 'Once the ecosystem is established, expanding into commerce, ticketing, coaching, and sponsored tournaments is frictionless.' },
  ];

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.012)' }}>MOATS</div>
      <div className="ambient-glow" style={{ width: '700px', height: '700px', background: 'rgba(68,214,44,0.04)', top: '10%', right: '10%' }} />

      <div className="slide-inner">
        <div>
          <span className="slide-label">06 — Strategic Moats</span>
          <h2 className="slide-title">Why We <span style={{ color: 'var(--accent)' }}>Win.</span></h2>
          <p style={{ fontSize: '16px', color: 'var(--white-muted)', marginTop: '10px', maxWidth: '640px', lineHeight: 1.5 }}>
            Turfly and Khelboo can solve booking. Book My Turf solves the full amateur sports lifecycle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px', flex: 1 }}>
          {advantages.map((adv) => (
            <div key={adv.id} className="glass-panel" style={{ padding: '28px 22px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: adv.color }} />
              <span style={{ fontWeight: 800, fontSize: '56px', color: 'rgba(255,255,255,0.05)', lineHeight: 1, marginBottom: '12px' }}>0{adv.id}</span>
              <h3 style={{ fontWeight: 700, fontSize: '18px', color: 'var(--white)', marginBottom: '12px', lineHeight: 1.2 }}>{adv.title}</h3>
              <div style={{ padding: '5px 10px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', marginBottom: '18px', width: 'fit-content' }}>
                <span style={{ fontSize: '10px', color: adv.color, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{adv.tagline}</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.6, flex: 1 }}>{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

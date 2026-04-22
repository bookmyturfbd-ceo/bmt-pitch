// Slide 5: Competition
const features = [
  { name: 'Real-time booking',          bmt: true, turfly: true, khelboo: true, playo: true },
  { name: 'Find players & Meetups',     bmt: true, turfly: false, khelboo: false, playo: true },
  { name: 'Group cost split',           bmt: true, turfly: false, khelboo: false, playo: false },
  { name: 'Team MMR & Player MMR',      bmt: true, turfly: false, khelboo: false, playo: false },
  { name: 'Challenge market',           bmt: true, turfly: false, khelboo: false, playo: false },
  { name: 'Live score & Leaderboard',   bmt: true, turfly: false, khelboo: false, playo: false },
  { name: 'Seasonal system & Tournaments', bmt: true, turfly: false, khelboo: false, playo: false },
  { name: 'Owner dashboard & ERP tools',bmt: true, turfly: false, khelboo: false, playo: false },
];

const Check = () => <span style={{ color: 'var(--accent)', fontWeight: 800 }}>✓</span>;
const Cross = () => <span style={{ color: '#444' }}>-</span>;

export default function CompetitionSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-y-auto styled-scrollbar noise" style={{ background: '#050505' }}>
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.01)' }}>COMPETITION</div>
      <div className="ambient-glow" style={{ width: '800px', height: '800px', background: 'rgba(68,214,44,0.03)', top: '10%', right: '20%' }} />

      <div className="relative z-10 flex flex-col xl:flex-row h-full px-16 py-12 gap-16 min-h-max">
        
        {/* Left: Table */}
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column' }}>
          <div className="mb-6">
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
              color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
            }}>
              05 — Competition
            </span>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 48px)',
              color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
            }}>
              Ecosystem vs <span style={{ color: 'var(--accent)' }}>Utility.</span>
            </h2>
          </div>

          <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 800, color: 'var(--accent)', textAlign: 'center' }}>Book My Turf</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--white)', textAlign: 'center' }}>Playo (Intl)</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--white)', textAlign: 'center' }}>Turfly</span>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--white)', textAlign: 'center' }}>Khelboo</span>
            </div>
            <div style={{ overflowY: 'auto', flex: 1 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.02)', alignItems: 'center', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--white)' }}>{f.name}</span>
                  <div style={{ textAlign: 'center' }}>{f.bmt ? <Check /> : <Cross />}</div>
                  <div style={{ textAlign: 'center' }}>{f.playo ? <Check /> : <Cross />}</div>
                  <div style={{ textAlign: 'center' }}>{f.turfly ? <Check /> : <Cross />}</div>
                  <div style={{ textAlign: 'center' }}>{f.khelboo ? <Check /> : <Cross />}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Competitor Breakdowns */}
        <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: 'var(--white)', marginBottom: '12px' }}>Playo (International Giant)</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.6 }}>
              A massive international player focusing on finding venues and meetups. However, they lack the deeply localized competitive mechanics (MMR, Tournaments) and comprehensive turf-owner ERPs that we offer, leaving them vulnerable to niche ecosystems.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: 'var(--white)', marginBottom: '12px' }}>Turfly & Khelboo (Local)</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.6 }}>
              Focused entirely on instant venue booking in Dhaka. They offer search and payments, but their live products are currently limited to utility booking, acting as mere aggregators rather than community builders. ⁽³⁾⁽⁴⁾⁽⁵⁾
            </p>
          </div>

          <div className="glass-panel-accent" style={{ padding: '24px', marginBottom: '40px' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: 'var(--accent)', marginBottom: '12px' }}>Why We Win</h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.6 }}>
              Playo, Turfly, and Khelboo offer real-time booking and discovery. But if users only need a slot, they can use any app or just call the turf. By introducing MMR, Challenge Markets, Tournaments, and Owner ERPs, we transcend utility and own the entire lifecycle.
            </p>
          </div>

        </div>

      </div>

      {/* Footnotes */}
      <div className="mt-8" style={{ borderTop: '1px solid var(--border)' }}>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em', lineHeight: 1.4, display: 'flex', gap: '24px', padding: '16px 64px' }}>
          <span>[3] Turfly Google Play listing</span>
          <span>[4] Turfly App Store listing</span>
          <span>[5] Khelboo LinkedIn profile</span>
        </p>
      </div>

    </div>
  );
}

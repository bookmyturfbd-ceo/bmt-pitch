const features = [
  { name: 'Real-time booking',             bmt: true,  playo: true,  turfly: true,  khelboo: true  },
  { name: 'Find players & Meetups',        bmt: true,  playo: true,  turfly: false, khelboo: false },
  { name: 'Group cost split',              bmt: true,  playo: false, turfly: false, khelboo: false },
  { name: 'Team MMR & Player MMR',         bmt: true,  playo: false, turfly: false, khelboo: false },
  { name: 'Challenge Market',              bmt: true,  playo: false, turfly: false, khelboo: false },
  { name: 'Live Score & Leaderboard',      bmt: true,  playo: false, turfly: false, khelboo: false },
  { name: 'Seasonal Tournaments',          bmt: true,  playo: false, turfly: false, khelboo: false },
  { name: 'Owner Dashboard & ERP',         bmt: true,  playo: false, turfly: false, khelboo: false },
  { name: 'Professionals Marketplace',     bmt: true,  playo: false, turfly: false, khelboo: false },
];

const Check = () => <span style={{ color: 'var(--accent)', fontWeight: 800 }}>✓</span>;
const Cross = () => <span style={{ color: '#333' }}>—</span>;

export default function CompetitionSlide() {
  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.01)' }}>COMP</div>
      <div className="ambient-glow" style={{ width: '700px', height: '700px', background: 'rgba(68,214,44,0.03)', top: '10%', right: '20%' }} />

      <div className="slide-inner" style={{ flexDirection: 'row', gap: '28px' }}>
        {/* Left: table */}
        <div style={{ flex: 1.3, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <span className="slide-label">05 — Competition</span>
            <h2 className="slide-title">Ecosystem vs <span style={{ color: 'var(--accent)' }}>Utility.</span></h2>
          </div>

          <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
              <span style={{ fontSize: '11px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</span>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent)', textAlign: 'center' }}>BMT</span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--white)', textAlign: 'center' }}>Playo</span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--white)', textAlign: 'center' }}>Turfly</span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--white)', textAlign: 'center' }}>Khelboo</span>
            </div>
            {/* Rows */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '13px 20px', borderBottom: '1px solid rgba(255,255,255,0.03)', alignItems: 'center', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                  <span style={{ fontSize: '13px', color: 'var(--white)' }}>{f.name}</span>
                  <div style={{ textAlign: 'center' }}>{f.bmt     ? <Check /> : <Cross />}</div>
                  <div style={{ textAlign: 'center' }}>{f.playo   ? <Check /> : <Cross />}</div>
                  <div style={{ textAlign: 'center' }}>{f.turfly  ? <Check /> : <Cross />}</div>
                  <div style={{ textAlign: 'center' }}>{f.khelboo ? <Check /> : <Cross />}</div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)' }}>
            [3] Turfly Google Play · [4] Turfly App Store · [5] Khelboo LinkedIn
          </p>
        </div>

        {/* Right: breakdowns */}
        <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { title: 'Playo (International)', body: 'Massive international player with 10M+ users. Strong in venue discovery and casual meetups, but lacks localized competitive mechanics (MMR, seasons) and operator ERP — leaving them vulnerable to deep-niche ecosystems.' },
            { title: 'Turfly & Khelboo (Local)', body: 'Both focus on instant venue booking in Dhaka. Solid utility products, but remain booking aggregators. No team identity, no competitive layer, no operator tooling. Their live products are feature-thin.' },
          ].map((c, i) => (
            <div key={i} className="glass-panel" style={{ padding: '22px' }}>
              <h3 style={{ fontWeight: 700, fontSize: '17px', color: 'var(--white)', marginBottom: '10px' }}>{c.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.6 }}>{c.body}</p>
            </div>
          ))}

          <div className="glass-panel-accent" style={{ padding: '22px', flex: 1 }}>
            <h3 style={{ fontWeight: 700, fontSize: '17px', color: 'var(--accent)', marginBottom: '10px' }}>Why We Win</h3>
            <p style={{ fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.6 }}>
              Every competitor offers real-time booking. If users only need a slot, they can call the turf directly. By introducing MMR, Challenge Markets, Tournaments, Professionals, and Owner ERPs — we transcend utility and own the entire amateur sports lifecycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

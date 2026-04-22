export default function SourcesSlide() {
  const sources = [
    { id: 1, org: 'BBF Digital',                title: "Bangladesh's Emerging Turf Industry",                         date: 'June 2024', url: 'https://bbf.digital/bangladeshs-emerging-turf-industry' },
    { id: 2, org: 'The Business Standard (TBS)', title: "Competition heats up as Ctg's artificial turf business expands", date: 'Feb 2024',  url: 'https://www.tbsnews.net/bangladesh/competition-heats-ctgs-artificial-turf-business-expands-797054' },
    { id: 3, org: 'Turfly',                      title: 'Google Play Store Listing & Feature Set Analysis',           date: 'Current',   url: 'https://play.google.com/store/apps/details?id=com.ternary.turfly' },
    { id: 4, org: 'Turfly',                      title: 'Apple App Store Listing ("coming soon" analysis)',           date: 'Current',   url: 'https://apps.apple.com/us/app/turfly/id6756574386' },
    { id: 5, org: 'Khelboo',                     title: 'Company Profile & Traction Metrics',                        date: 'Current',   url: 'https://www.linkedin.com/company/khelboo-com' },
    { id: 6, org: 'Playo',                       title: 'Playo — Sports Activity & Venue Booking App (International)', date: 'Current',  url: 'https://playo.co' },
  ];

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.012)' }}>SOURCES</div>

      <div className="slide-inner">
        <div>
          <span className="slide-label">11 — Footnotes & Research</span>
          <h2 className="slide-title">Verified <span style={{ color: 'var(--accent)' }}>Sources.</span></h2>
          <p style={{ fontSize: '14px', color: 'var(--white-muted)', marginTop: '8px', maxWidth: '700px' }}>
            All external market data, competitor intelligence, and cost assumptions referenced in this deck are traced to verifiable public sources below.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          {sources.map(src => (
            <a key={src.id} href={src.url} target="_blank" rel="noreferrer"
              className="glass-panel"
              style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '20px 28px', textDecoration: 'none', transition: 'all 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(68,214,44,0.4)'; e.currentTarget.style.background = 'rgba(68,214,44,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(18,18,18,0.8)'; }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(68,214,44,0.08)', border: '1px solid rgba(68,214,44,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px', color: 'var(--accent)', flexShrink: 0 }}>
                {src.id}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 600 }}>{src.org}</span>
                  <span style={{ fontSize: '11px', color: 'var(--white-muted)' }}>{src.date}</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--white)', marginBottom: '4px' }}>{src.title}</h3>
                <p style={{ fontSize: '11px', color: 'var(--white-muted)', opacity: 0.45, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{src.url}</p>
              </div>
              <span style={{ color: 'var(--white-muted)', fontSize: '18px', flexShrink: 0 }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// Slide 11: Sources
export default function SourcesSlide() {
  const sources = [
    {
      id: 1,
      org: 'BBF Digital',
      title: 'Bangladesh’s Emerging Turf Industry',
      date: 'June 2024',
      url: 'https://bbf.digital/bangladeshs-emerging-turf-industry'
    },
    {
      id: 2,
      org: 'The Business Standard (TBS)',
      title: 'Competition heats up as Ctg’s artificial turf business expands',
      date: 'February 2024',
      url: 'https://www.tbsnews.net/bangladesh/competition-heats-ctgs-artificial-turf-business-expands-797054'
    },
    {
      id: 3,
      org: 'Turfly',
      title: 'Google Play Store Listing & Feature Set Analysis',
      date: 'Current',
      url: 'https://play.google.com/store/apps/details?id=com.ternary.turfly'
    },
    {
      id: 4,
      org: 'Turfly',
      title: 'Apple App Store Listing ("coming soon" analysis)',
      date: 'Current',
      url: 'https://apps.apple.com/us/app/turfly/id6756574386'
    },
    {
      id: 5,
      org: 'Khelboo',
      title: 'Company Profile & Traction Metrics',
      date: 'Current',
      url: 'https://www.linkedin.com/company/khelboo-com'
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden noise" style={{ background: '#050505' }}>
      
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.015)' }}>SOURCES</div>

      <div className="relative z-10 flex flex-col h-full px-16 py-12 justify-between">
        <div className="mb-12">
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
            color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            11 — Footnotes & Research
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)',
            color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
          }}>
            Verified <span style={{ color: 'var(--accent)' }}>Sources.</span>
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-6 max-w-[900px]">
          {sources.map((src) => (
            <a 
              key={src.id} 
              href={src.url} 
              target="_blank" 
              rel="noreferrer"
              className="glass-panel"
              style={{
                display: 'flex', gap: '24px', alignItems: 'center', padding: '24px 32px',
                textDecoration: 'none', transition: 'all 0.2s ease', cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.background = 'rgba(68,214,44,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.background = 'rgba(26,26,26,0.6)';
              }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif',
                fontWeight: 800, fontSize: '16px', color: 'var(--white)'
              }}>
                {src.id}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>{src.org}</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: 'var(--white-muted)' }}>{src.date}</span>
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', color: 'var(--white)', marginBottom: '8px' }}>
                  {src.title}
                </h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: 'var(--white-muted)', opacity: 0.5, wordBreak: 'break-all' }}>
                  {src.url}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

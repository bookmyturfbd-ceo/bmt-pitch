// Slide 1: Overview
export default function OverviewSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden noise" style={{ background: '#050505' }}>
      
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(68,214,44,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(68,214,44,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px', zIndex: 0,
      }} />

      <div className="watermark">OS</div>
      <div className="ambient-glow" style={{ width: '600px', height: '600px', background: 'rgba(68,214,44,0.05)', top: '-20%', right: '-10%' }} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12 justify-between">
        {/* Header */}
        <div className="mb-10 flex justify-between items-start">
          <div>
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
              color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
            }}>
              01 — Overview
            </span>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
            }}>
              The Sports <span style={{ color: 'var(--accent)' }}>Operating System.</span>
            </h2>
          </div>
          {/* Logo added */}
          <div className="flex flex-col items-center justify-center p-4 rounded-xl glass-panel-accent">
            <img src="/logo.png" alt="BMT Logo" style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '8px' }} />
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '20px', color: 'var(--accent)', letterSpacing: '0.05em' }}>BMT</span>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '12px', color: 'var(--white-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Book My Turf</span>
          </div>
        </div>

        {/* Thesis statement */}
        <div className="glass-panel" style={{
          borderLeft: '4px solid var(--accent)',
          padding: '40px 48px', marginBottom: '40px', maxWidth: '1000px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <p style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '22px', color: 'var(--white)',
            lineHeight: 1.6, fontWeight: 400, letterSpacing: '0.01em'
          }}>
            Book My Turf is building Bangladesh’s sports operating system by combining venue booking, competitive matchmaking, payments, rankings, and turf-owner infrastructure in one platform.
          </p>
        </div>

        {/* KPI / Status Grid */}
        <div className="grid grid-cols-5 gap-6 mb-auto">
          {[
            { label: 'Status', value: 'Product Built', color: '#A8D8A0' },
            { label: 'Launch City', value: 'Dhaka', color: '#fff' },
            { label: 'Initial Target', value: '40+ Turfs', color: '#fff' },
            { label: 'Player Target', value: '10,000+', color: 'var(--accent)', sub: 'Aggressive Marketing' },
            { label: 'Expansion', value: 'Chattogram', color: '#8EC8E8' }
          ].map((kpi, i) => (
            <div key={i} className="glass-panel" style={{
              padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px'
            }}>
              <span style={{
                fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'var(--white-muted)',
                textTransform: 'uppercase', letterSpacing: '0.1em'
              }}>{kpi.label}</span>
              <span style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: kpi.color,
                lineHeight: 1.1
              }}>{kpi.value}</span>
              {kpi.sub && (
                <span style={{ fontSize: '10px', color: 'var(--white-muted)', fontStyle: 'italic' }}>{kpi.sub}</span>
              )}
            </div>
          ))}
        </div>



      </div>
    </div>
  );
}

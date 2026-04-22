// Slide 2: Problem
export default function ProblemSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden noise" style={{ background: '#050505' }}>

      {/* Left accent stripe */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: 'linear-gradient(180deg, transparent, var(--red-accent), transparent)', zIndex: 1 }} />
      <div className="watermark" style={{ color: 'rgba(255,59,59,0.015)' }}>PROBLEM</div>
      <div className="ambient-glow" style={{ width: '800px', height: '800px', background: 'rgba(255,59,59,0.03)', top: '10%', left: '-10%' }} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12 justify-between">
        {/* Header */}
        <div className="mb-10">
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
            color: 'var(--red-accent)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            02 — The Problem
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 64px)',
            color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
          }}>
            The Game is Broken<br />
            <span style={{ color: 'var(--red-accent)' }}>Before It Starts.</span>
          </h2>
        </div>

        {/* Problem Blocks */}
        <div className="grid grid-cols-4 gap-4 flex-1">
          {[
            {
              title: "Booking Friction",
              points: [
                "Turf booking in Dhaka is highly fragmented.",
                "Relies on phone calls, messenger chats, and manual bKash transfers.",
                "Existing platforms solve basic discovery but fail to capture the full end-to-end user journey. ⁽³⁾"
              ]
            },
            {
              title: "No Competitive Layer",
              points: [
                "Players don't just want slots; they want team continuity, rankings, and recognition.",
                "Current booking-first apps do not create strong competitive retention loops.",
                "Amateur sports lack a unified digital record of matches and stats."
              ]
            },
            {
              title: "Operators Lack Software",
              points: [
                "Owners manage multi-lakh operations on pen and paper.",
                "No visibility into demand forecasting, utilization, or financial P&L.",
                "Existing local apps act as directories, not ERP-style infrastructure for retention."
              ]
            },
            {
              title: "Ghosted Professionals",
              points: [
                "Coaches, physios, and referees have no digital storefront.",
                "Zero direct, trusted pipelines between amateur teams and certified professionals.",
                "The sports gig economy remains entirely untapped and highly informal."
              ]
            }
          ].map((block, i) => (
            <div key={i} className="glass-panel" style={{
              padding: '32px 24px', display: 'flex', flexDirection: 'column',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute', top: '16px', right: '20px', fontFamily: 'Poppins, sans-serif',
                fontWeight: 800, fontSize: '80px', color: 'rgba(255,59,59,0.06)', lineHeight: 1, userSelect: 'none'
              }}>
                {`0${i + 1}`}
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px',
                color: 'var(--white)', marginBottom: '24px', borderBottom: '1px solid rgba(255,59,59,0.2)', paddingBottom: '16px'
              }}>
                {block.title}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: 0, padding: 0, listStyle: 'none', flex: 1 }}>
                {block.points.map((pt, j) => (
                  <li key={j} style={{
                    fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--white-muted)',
                    lineHeight: 1.5, display: 'flex', gap: '12px', alignItems: 'flex-start'
                  }}>
                    <span style={{ color: 'var(--red-accent)', fontSize: '18px', lineHeight: 1.1 }}>•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em' }}>
            [3] Turfly Google Play / Product Analysis. Current booking apps focus on utility, neglecting the social-competitive lifecycle.
          </p>
        </div>
      </div>
    </div>
  );
}

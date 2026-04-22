export default function ProblemSlide() {
  const blocks = [
    {
      title: 'Booking Friction',
      points: [
        'Turf booking in Dhaka relies on phone calls, FB Messenger, and manual bKash transfers.',
        'Existing platforms solve basic discovery but fail the end-to-end user journey.',
        'No automated split-cost, receipt, or cancellation logic exists in the market.',
      ],
    },
    {
      title: 'No Competitive Layer',
      points: [
        'Players don\'t just want slots — they want team continuity, rankings, and recognition.',
        'Booking-first apps create no competitive retention loops.',
        'Amateur sports lack a unified digital record of matches, form, and stats.',
      ],
    },
    {
      title: 'Operators Lack Software',
      points: [
        'Owners manage multi-lakh operations on pen, paper, and WhatsApp.',
        'Zero visibility into demand forecasting, utilization rates, or financial P&L.',
        'No ERP-level tooling exists for turf operators in Bangladesh.',
      ],
    },
    {
      title: 'Ghosted Professionals',
      points: [
        'Coaches, physios, and referees have no digital storefront or discovery mechanism.',
        'Zero direct pipelines between amateur teams and certified sports professionals.',
        'The sports gig economy remains entirely untapped and informal.',
      ],
    },
  ];

  return (
    <div className="slide-shell noise">
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5px', background: 'linear-gradient(180deg, transparent, var(--red-accent), transparent)', zIndex: 1 }} />
      <div className="watermark" style={{ color: 'rgba(255,59,59,0.012)' }}>PROBLEM</div>
      <div className="ambient-glow" style={{ width: '700px', height: '700px', background: 'rgba(255,59,59,0.04)', top: '10%', left: '-10%' }} />

      <div className="slide-inner">
        <div>
          <span className="slide-label" style={{ color: 'var(--red-accent)' }}>02 — The Problem</span>
          <h2 className="slide-title">The Game is Broken<br />
            <span style={{ color: 'var(--red-accent)' }}>Before It Starts.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', flex: 1 }}>
          {blocks.map((block, i) => (
            <div key={i} className="glass-panel" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '14px', right: '16px', fontWeight: 800, fontSize: '72px', color: 'rgba(255,59,59,0.05)', lineHeight: 1, userSelect: 'none' }}>
                {`0${i + 1}`}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '18px', color: 'var(--white)', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid rgba(255,59,59,0.2)' }}>
                {block.title}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', flex: 1 }}>
                {block.points.map((pt, j) => (
                  <li key={j} style={{ fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.55, display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--red-accent)', fontSize: '16px', lineHeight: 1.1, flexShrink: 0 }}>•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.02em' }}>
            [3] Turfly Google Play / App Store product analysis — current live feature set limited to utility booking.
          </p>
        </div>
      </div>
    </div>
  );
}

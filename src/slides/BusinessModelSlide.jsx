// Slide 7: Business Model
export default function BusinessModelSlide() {
  const primaryStreams = [
    { title: 'Booking Commission', desc: '10-15% flat take-rate on every slot booked through the BMT ecosystem.', icon: '৳' },
    { title: 'Owner Premium ERP', desc: 'SaaS subscription for turf owners to access advanced analytics, offline walk-in management, and dynamic pricing.', icon: '📊' }
  ];

  const upsideStreams = [
    { title: 'Tournament Fees', desc: 'Entry fees and operational cuts for BMT-managed or sponsored seasonal tournaments.' },
    { title: 'Featured Listings', desc: 'Promoted spots for turfs wanting higher visibility in the discovery feed.' },
    { title: 'BMT Shop / Commerce', desc: 'Direct-to-consumer sales of kits, boots, and official BMT merchandise.' },
    { title: 'Coaching Marketplace', desc: 'Discovery and booking fees for professional coaches and training academies.' },
    { title: 'Brand Sponsorships', desc: 'Ad placements and sponsored leagues within the app interface.' }
  ];

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden noise" style={{ background: '#050505' }}>
      
      <div className="watermark" style={{ color: 'rgba(255,255,255,0.01)' }}>REVENUE</div>
      <div className="ambient-glow" style={{ width: '800px', height: '800px', background: 'rgba(68,214,44,0.03)', top: '10%', right: '10%' }} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12 justify-between">
        <div className="mb-10">
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
            color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            07 — Business Model
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)',
            color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
          }}>
            Monetizing the <span style={{ color: 'var(--accent)' }}>Ecosystem.</span>
          </h2>
        </div>

        <div className="flex-1 flex gap-12">
          
          {/* Primary Streams */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
              Immediate Revenue Focus
            </h3>
            <div className="flex flex-col gap-6">
              {primaryStreams.map((stream, i) => (
                <div key={i} className="glass-panel" style={{
                  borderLeft: '4px solid var(--accent)',
                  padding: '32px 28px', display: 'flex', gap: '24px', alignItems: 'center'
                }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(68,214,44,0.1)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', color: 'var(--accent)' }}>
                    {stream.icon}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '24px', color: 'var(--white)', marginBottom: '8px' }}>{stream.title}</h4>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: 'var(--white-muted)', lineHeight: 1.5 }}>{stream.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid var(--border)', borderRadius: '0 4px 4px 0' }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--white-muted)', fontStyle: 'italic' }}>
                "We do not depend on advertising. The core platform prints cash on transaction volume and B2B SaaS lock-in. Everything else is upside."
              </p>
            </div>
          </div>

          {/* Upside Streams */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--white-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
              Future Upside / Flywheel
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {upsideStreams.map((stream, i) => (
                <div key={i} className="glass-panel" style={{
                  padding: '24px 20px', display: 'flex', flexDirection: 'column'
                }}>
                  <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', color: 'var(--white)', marginBottom: '8px' }}>{stream.title}</h4>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.5 }}>{stream.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

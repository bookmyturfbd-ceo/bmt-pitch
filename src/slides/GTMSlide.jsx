// Slide 8: GTM Strategy
export default function GTMSlide() {
  const phases = [
    { title: 'Phase 1: Supply Capture', desc: 'Onboard 40+ Dhaka turfs using direct field sales. Install owner dashboards.' },
    { title: 'Phase 2: Demand Ignition', desc: 'Acquire team organizers and repeat squads. Utility-first booking focus.' },
    { title: 'Phase 3: The Flywheel', desc: 'Activate the Challenge Market. Teams invite other teams. Viral loops begin.' },
    { title: 'Phase 4: Community Scale', desc: 'Run BMT-branded tournaments and community events. Lock in player identity.' },
    { title: 'Phase 5: Geo-Expansion', desc: 'Replicate the playbook in Chattogram (70+ turfs).' }
  ];

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden noise" style={{ background: '#050505' }}>
      
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.015)' }}>LAUNCH</div>
      <div className="ambient-glow" style={{ width: '800px', height: '800px', background: 'rgba(68,214,44,0.03)', bottom: '-10%', left: '-10%' }} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12 justify-between">
        <div className="mb-10">
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
            color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            08 — Go-to-Market Strategy
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)',
            color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
          }}>
            The <span style={{ color: 'var(--accent)' }}>Rollout</span> Playbook.
          </h2>
        </div>

        <div className="flex-1 flex gap-12 items-center">
          
          {/* Phase Timeline */}
          <div style={{ flex: 1.5, position: 'relative' }}>
            {/* Vertical connector */}
            <div style={{ position: 'absolute', left: '24px', top: '40px', bottom: '40px', width: '2px', background: 'var(--border)', zIndex: 0 }} />
            
            <div className="flex flex-col gap-8 relative z-10">
              {phases.map((phase, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  {/* Node */}
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%', background: i === 0 ? 'var(--accent)' : 'var(--ash-mid)',
                    border: i === 0 ? 'none' : '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '20px', color: i === 0 ? 'var(--black)' : 'var(--white-muted)'
                  }}>
                    {i + 1}
                  </div>
                  {/* Content */}
                  <div className="glass-panel" style={{
                    borderLeft: i === 0 ? '4px solid var(--accent)' : '1px solid var(--border)',
                    padding: '20px 24px', flex: 1, boxShadow: i === 0 ? '0 0 20px rgba(68,214,44,0.1)' : '0 10px 40px rgba(0,0,0,0.5)'
                  }}>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: 'var(--white)', marginBottom: '8px' }}>{phase.title}</h3>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--white-muted)', lineHeight: 1.5 }}>{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Field Sales Note */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-panel-accent" style={{
              padding: '40px'
            }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '32px', color: 'var(--white)', marginBottom: '24px' }}>
                Why Field Sales Works Here
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: 0, padding: 0, listStyle: 'none' }}>
                {[
                  'Turf onboarding is high-touch but high-yield (B2B).',
                  'The owner dashboard is a highly visual, instant-value pitch.',
                  'Organizer pain (collecting money) is universal and easy to exploit.',
                  'The Challenge Market creates a self-sustaining viral loop once density is reached.'
                ].map((pt, j) => (
                  <li key={j} style={{
                    fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: 'var(--white-muted)',
                    lineHeight: 1.5, display: 'flex', gap: '12px', alignItems: 'flex-start'
                  }}>
                    <span style={{ color: 'var(--accent)', fontSize: '18px', lineHeight: 1.2 }}>•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

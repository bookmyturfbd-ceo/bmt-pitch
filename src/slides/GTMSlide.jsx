export default function GTMSlide() {
  const phases = [
    { title: 'Phase 1: Supply Capture',   desc: 'Onboard 40+ Dhaka turfs using direct field sales. Install owner dashboards and onboarding kits.' },
    { title: 'Phase 2: Demand Ignition',  desc: 'Acquire team organizers and repeat squads. Utility-first booking focus with bKash split-cost.' },
    { title: 'Phase 3: The Flywheel',     desc: 'Activate the Challenge Market. Teams invite other teams. MMR rankings go live. Viral loops begin.' },
    { title: 'Phase 4: Community Scale',  desc: 'Run BMT-branded tournaments and community events. Lock in player digital identity and badges.' },
    { title: 'Phase 5: Geo-Expansion',    desc: 'Replicate the full Dhaka playbook in Chattogram — 70+ turfs, proven culture, ready market.' },
  ];

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.015)' }}>LAUNCH</div>
      <div className="ambient-glow" style={{ width: '700px', height: '700px', background: 'rgba(68,214,44,0.04)', bottom: '-10%', left: '-10%' }} />

      <div className="slide-inner">
        <div>
          <span className="slide-label">08 — Go-to-Market Strategy</span>
          <h2 className="slide-title">The <span style={{ color: 'var(--accent)' }}>Rollout</span> Playbook.</h2>
        </div>

        <div style={{ display: 'flex', gap: '24px', flex: 1, alignItems: 'stretch' }}>
          {/* Timeline */}
          <div style={{ flex: 1.4, position: 'relative', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ position: 'absolute', left: '22px', top: '24px', bottom: '24px', width: '2px', background: 'linear-gradient(180deg, var(--accent), var(--border))', zIndex: 0 }} />
            {phases.map((phase, i) => (
              <div key={i} style={{ display: 'flex', gap: '18px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: i === 0 ? 'var(--accent)' : 'var(--ash-mid)', border: i === 0 ? 'none' : '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', color: i === 0 ? 'var(--black)' : 'var(--white-muted)', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div className="glass-panel" style={{ flex: 1, borderLeft: i === 0 ? '4px solid var(--accent)' : '1px solid var(--border)', padding: '16px 20px', boxShadow: i === 0 ? '0 0 24px rgba(68,214,44,0.1)' : undefined }}>
                  <h3 style={{ fontWeight: 700, fontSize: '17px', color: 'var(--white)', marginBottom: '6px' }}>{phase.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--white-muted)', lineHeight: 1.5 }}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Field Sales Note */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="glass-panel-accent" style={{ padding: '32px', flex: 1 }}>
              <h3 style={{ fontWeight: 800, fontSize: '26px', color: 'var(--white)', marginBottom: '20px', lineHeight: 1.2 }}>Why Field Sales Works Here</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
                {[
                  'Turf onboarding is high-touch but high-yield (B2B).',
                  'The owner dashboard is a highly visual, instant-value pitch.',
                  'Organizer pain (collecting money) is universal and easy to solve.',
                  'The Challenge Market creates a self-sustaining viral loop once density is reached.',
                ].map((pt, j) => (
                  <li key={j} style={{ fontSize: '14px', color: 'var(--white-muted)', lineHeight: 1.55, display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '18px', lineHeight: 1.1, flexShrink: 0 }}>•</span>
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

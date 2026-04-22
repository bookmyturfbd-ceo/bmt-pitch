// Slide 10: Raise & Use of Funds
export default function RaiseSlide() {
  const funds = [
    { label: 'Operations & Salaries', pct: 30 },
    { label: 'Marketing & Activation', pct: 30 },
    { label: 'Turf Onboarding (Field Sales)', pct: 20 },
    { label: 'Tournament Sponsorships', pct: 10 },
    { label: 'Legal, Admin & Cloud Infra', pct: 10 },
  ];

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden noise" style={{ background: '#050505' }}>
      
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.015)' }}>ASK</div>
      <div className="ambient-glow" style={{ width: '800px', height: '800px', background: 'rgba(68,214,44,0.03)', top: '10%', right: '10%' }} />

      <div className="relative z-10 flex flex-col h-full px-16 py-12 justify-between">
        <div className="mb-10">
          <span style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '12px', letterSpacing: '0.3em',
            color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600,
          }}>
            10 — The Ask
          </span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)',
            color: 'var(--white)', lineHeight: 1.05, marginTop: '10px',
          }}>
            Accelerating the <span style={{ color: 'var(--accent)' }}>Rollout.</span>
          </h2>
        </div>

        <div className="flex-1 flex gap-16 items-center">
          
          {/* Left: The Raise */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="glass-panel-accent" style={{ padding: '48px' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--white-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>We are raising</span>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '64px', color: 'var(--accent)', lineHeight: 1 }}>
                BDT 20<span style={{ fontSize: '32px' }}> Lakh</span>
              </p>
              <div style={{ width: '60px', height: '2px', background: 'var(--border)', margin: '24px 0' }} />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--white-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Equity Offered</span>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '48px', color: 'var(--white)', lineHeight: 1 }}>
                10%
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '32px', borderLeft: '4px solid #A8D8A0' }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '20px', color: 'var(--white)', marginBottom: '12px' }}>
                De-risked Execution
              </h3>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: 'var(--white-muted)', lineHeight: 1.6 }}>
                The core Book My Turf ecosystem is <strong>already built</strong>. Our team is exceptionally lean and capital-efficient. 100% of the funds raised will be deployed directly into market capture, not R&D.
              </p>
            </div>
          </div>

          {/* Right: Use of Funds */}
          <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: 'var(--white-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '32px' }}>
              Use of Funds
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {funds.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{ width: '60px', textAlign: 'right' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '24px', color: 'var(--accent)' }}>{f.pct}%</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', color: 'var(--white)', marginBottom: '8px' }}>{f.label}</p>
                    <div style={{ width: '100%', height: '6px', background: 'var(--ash-light)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${f.pct}%`, height: '100%', background: 'var(--accent)' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

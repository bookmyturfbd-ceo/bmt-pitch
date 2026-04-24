import { T, Card, SectionTitle, Badge } from './tokens.jsx';

const PHASES_12 = [
  {
    label: 'Months 1–3', title: 'Learning Phase', color: T.amber,
    marketing: '৳60,000–৳70,000/mo', turfGrowth: '4 turfs/month',
    months: [
      { n: 1,  burn: '৳1,90,000', rev: '৳28,800',    net: '−৳1,61,200', turfs: 4  },
      { n: 2,  burn: '৳1,70,000', rev: '৳86,400',    net: '−৳83,600',  turfs: 8  },
      { n: 3,  burn: '৳1,70,000', rev: '৳1,62,000',  net: '−৳8,000',   turfs: 12 },
    ],
    note: 'Cautious testing. Identify winning ad creatives and keywords before scaling.',
  },
  {
    label: 'Months 4–6', title: 'Traction Phase', color: T.blue,
    marketing: '৳70,000–৳80,000/mo', turfGrowth: '4 turfs/month',
    months: [
      { n: 4,  burn: '৳2,00,000', rev: '৳2,88,000',  net: '+৳88,000',    turfs: 16 },
      { n: 5,  burn: '৳2,00,000', rev: '৳3,96,000',  net: '+৳1,96,000',  turfs: 20 },
      { n: 6,  burn: '৳2,00,000', rev: '৳5,62,500',  net: '+৳3,63,000',  turfs: 25 },
    ],
    note: "Scale what's working. Lookalike audiences from growing user base reduce CPA steadily.",
  },
  {
    label: 'Months 7–9', title: 'Profit Phase', color: T.green,
    marketing: '৳80,000–৳1,00,000/mo', turfGrowth: '4 turfs/month',
    months: [
      { n: 7,  burn: '৳2,15,000', rev: '৳7,56,000',  net: '+৳5,41,000',  turfs: 30 },
      { n: 8,  burn: '৳2,30,000', rev: '৳9,45,000',  net: '+৳7,15,000',  turfs: 35 },
      { n: 9,  burn: '৳2,30,000', rev: '৳11,52,000', net: '+৳9,22,000',  turfs: 40 },
    ],
    note: 'Strong profitability. Every month builds a larger cash reserve. Phase 2 salary trigger approaching.',
  },
  {
    label: 'Months 10–12', title: 'CTG Prep Phase', color: T.purple,
    marketing: '৳80,000/mo (Dhaka)', turfGrowth: 'Lock in Dhaka',
    months: [
      { n: 10, burn: '৳3,00,000', rev: '৳13,60,500', net: '+৳10,60,500', turfs: 43 },
      { n: 11, burn: '৳3,20,000', rev: '৳14,17,500', net: '+৳10,97,500', turfs: 45 },
      { n: 12, burn: '৳3,50,000', rev: '৳15,39,000', net: '+৳11,89,000', turfs: 45 },
    ],
    note: 'Hire CTG Division Manager. Scout locations. CTG launch Month 13 fully funded by operations.',
  },
];

export default function Burn12MSection() {
  return (
    <section id="burn12m" style={{ padding: '40px 0 32px' }}>
      <SectionTitle
        label="Section 4 · 12-Month Lean"
        title="📐 The Conservative Path"
        accent={T.blue}
        sub="Lower risk, slower burn, profitable by Month 7, CTG by Month 13."
      />

      {/* Callout box */}
      <div style={{
        background: `${T.amber}0f`, border: `1px solid ${T.amber}44`,
        borderRadius: 12, padding: '16px 20px', marginBottom: 24,
        display: 'flex', gap: 14, alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: 20 }}>⚖️</span>
        <p style={{ fontSize: 12, color: T.muted, lineHeight: 1.7 }}>
          The 12-month path preserves more cash (<strong style={{ color: T.white }}>৳4–6 Lac buffer maintained throughout</strong>) but reaches CTG 7 months later. In a first-mover market, time is money.{' '}
          <strong style={{ color: T.amber }}>The 6-month path is our recommendation</strong> — aggressive acquisition before competitors notice the gap.
        </p>
      </div>

      {/* 4 phase blocks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {PHASES_12.map((ph) => (
          <div key={ph.label} style={{
            background: T.surface,
            border: `1px solid ${ph.color}33`,
            borderRadius: 12,
            overflow: 'hidden',
          }}>
            {/* Phase header */}
            <div style={{
              background: `${ph.color}0f`,
              borderBottom: `1px solid ${ph.color}33`,
              padding: '14px 20px',
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <div style={{ width: 4, height: 40, background: ph.color, borderRadius: 2, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <Badge text={ph.label} color={ph.color} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: T.white }}>{ph.title}</span>
                </div>
                <p style={{ fontSize: 10, color: T.muted }}>{ph.note}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontSize: 10, color: T.muted }}>Marketing</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: ph.color }}>{ph.marketing}</p>
                <p style={{ fontSize: 10, color: T.muted, marginTop: 2 }}>Turf growth: {ph.turfGrowth}</p>
              </div>
            </div>

            {/* Month rows */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
              {ph.months.map((m, idx) => (
                <div key={m.n} style={{
                  padding: '16px 18px',
                  borderRight: idx < 2 ? `1px solid ${T.border}` : 'none',
                }}>
                  <p style={{ fontSize: 10, color: T.muted, marginBottom: 10, letterSpacing: '0.1em' }}>MONTH {m.n} · {m.turfs} turfs</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 10, color: T.muted }}>Total Burn</span>
                      <span style={{ fontSize: 11, color: T.red, fontWeight: 600, fontFamily: 'monospace' }}>{m.burn}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 10, color: T.muted }}>Revenue</span>
                      <span style={{ fontSize: 11, color: T.green, fontWeight: 600, fontFamily: 'monospace' }}>{m.rev}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 6, borderTop: `1px solid ${T.border}` }}>
                      <span style={{ fontSize: 10, color: T.muted }}>Net</span>
                      <span style={{
                        fontSize: 13, fontWeight: 800, fontFamily: 'monospace',
                        color: m.net.startsWith('+') ? T.green : T.red,
                      }}>{m.net}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 12M vs 6M comparison */}
      <Card style={{ marginTop: 24 }}>
        <p style={{ fontSize: 10, color: T.purple, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 14 }}>Path Comparison</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            { path: '6-Month Aggressive', color: T.green, items: ['Break-even: Month 5', 'CTG launch: Month 8', 'Cash preserved: ~৳16 Lac minimum floor', 'Risk: Higher burn early', 'Upside: 5 months head-start in CTG'] },
            { path: '12-Month Lean', color: T.blue, items: ['Break-even: Month 7', 'CTG launch: Month 13', 'Cash preserved: ৳4–6 Lac minimum floor', 'Risk: Slower, competitor window opens', 'Upside: More conservative, less stress'] },
          ].map((p) => (
            <div key={p.path} style={{ borderLeft: `3px solid ${p.color}`, paddingLeft: 14 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: p.color, marginBottom: 10 }}>{p.path}</p>
              {p.items.map((it, i) => (
                <p key={i} style={{ fontSize: 11, color: T.muted, lineHeight: 1.7 }}>• {it}</p>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

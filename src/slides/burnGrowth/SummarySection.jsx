import { T, Card, SectionTitle } from './tokens.jsx';

const YEARS = [
  {
    label: 'Year 1', sub: 'Dhaka Only', color: T.blue,
    metrics: [
      { k: 'Revenue',    v: '৳1–1.5 Crore',      color: T.green },
      { k: 'Net Profit', v: '৳50 Lac–৳80 Lac',    color: T.green },
      { k: 'Users',      v: '3,000–5,000',        color: T.cyan },
      { k: 'Turfs',      v: '40–50',              color: T.blue },
    ],
  },
  {
    label: 'Year 2', sub: 'Dhaka + CTG', color: T.green,
    metrics: [
      { k: 'Revenue',    v: '৳3–4 Crore',         color: T.green },
      { k: 'Net Profit', v: '৳1.5–2.5 Crore',     color: T.green },
      { k: 'Users',      v: '12,000–20,000',       color: T.cyan },
      { k: 'Turfs',      v: '100–120 total',       color: T.purple },
    ],
  },
];

const CLOSER_LINES = [
  'Every taka spent on marketing is tracked.',
  'Every user acquired is measured.',
  'Every booking is a proof point.',
  'Dhaka proves the model. CTG scales it.',
  'The money comes back before you need to write the next cheque.',
];

export default function SummarySection() {
  return (
    <section id="summary" style={{ padding: '40px 0 56px' }}>
      <SectionTitle
        label="Section 6 · Full Picture"
        title="The Full Picture"
        accent={T.green}
        sub="Two years. Two cities. One playbook."
      />

      {/* Year projections */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
        {YEARS.map((y) => (
          <div key={y.label} style={{
            background: T.surface,
            border: `1px solid ${y.color}44`,
            borderRadius: 14,
            padding: '24px 28px',
            boxShadow: `0 0 30px ${y.color}0f`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 4, height: 36, background: y.color, borderRadius: 2 }} />
              <div>
                <p style={{ fontSize: 18, fontWeight: 800, color: T.white }}>{y.label}</p>
                <p style={{ fontSize: 11, color: y.color, fontWeight: 600 }}>{y.sub}</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {y.metrics.map((m) => (
                <div key={m.k} style={{ background: `${m.color}0a`, borderRadius: 10, padding: '14px 16px', border: `1px solid ${m.color}22` }}>
                  <p style={{ fontSize: 9, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{m.k}</p>
                  <p style={{ fontSize: 16, fontWeight: 800, color: m.color }}>{m.v}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Investor footnote */}
      <p style={{ fontSize: 9, color: T.muted, lineHeight: 1.6, marginTop: -16, marginBottom: 28, paddingLeft: 4, fontStyle: 'italic' }}>
        <strong style={{ color: T.cyan }}>Investor ask: ৳20 Lac</strong>
        &nbsp;·&nbsp; Minimum cash floor: ৳16.1 Lac
        &nbsp;·&nbsp; Break-even: Month 5
        &nbsp;·&nbsp; Fully self-funding from Month 5 onward
      </p>

      {/* Closer card */}
      <div style={{
        background: `linear-gradient(135deg, #0a1a0e 0%, #080d18 50%, #0f0814 100%)`,
        border: `1px solid ${T.green}55`,
        borderRadius: 16,
        padding: '36px 40px',
        textAlign: 'center',
        boxShadow: `0 0 60px ${T.green}12, 0 0 120px ${T.blue}08`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* decorative glow */}
        <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 300, height: 120, background: `${T.green}18`, borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <p style={{ fontSize: 11, color: T.green, textTransform: 'uppercase', letterSpacing: '0.22em', fontWeight: 700, marginBottom: 24 }}>The Close</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {CLOSER_LINES.map((line, i) => (
            <p key={i} style={{
              fontSize: i === 4 ? 18 : 15,
              fontWeight: i === 4 ? 800 : 500,
              color: i === 4 ? T.green : T.white,
              lineHeight: 1.5,
              textShadow: i === 4 ? `0 0 30px ${T.green}55` : 'none',
            }}>{line}</p>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 32, paddingTop: 24, borderTop: `1px solid ${T.border}` }}>
          {[
            { label: 'Exit Target', value: '৳10 Crore', color: T.green },
            { label: 'Phase 2 Raise', value: '৳40 Lac CTG', sub: 'Optional ৳25 Lac w/ ৳5 Lac contingency reserve', color: T.blue },
            { label: 'Combined Y2 Rev', value: '৳3–4 Crore', color: T.purple },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 9, color: T.muted, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{s.label}</p>
              <p style={{ fontSize: 20, fontWeight: 900, color: s.color, textShadow: `0 0 24px ${s.color}55` }}>{s.value}</p>
              {s.sub && <p style={{ fontSize: 8, color: T.muted, marginTop: 4, lineHeight: 1.5, fontStyle: 'italic' }}>{s.sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

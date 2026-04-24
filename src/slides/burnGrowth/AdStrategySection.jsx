import { T, Card, SectionTitle, Badge } from './tokens.jsx';

/* ── Channel cards ─────────────────────────────────────────── */
const CHANNELS = [
  {
    name: 'Facebook & Instagram',
    badge: 'PRIMARY CHANNEL', badgeColor: T.blue,
    pct: '60% of budget', icon: '📘',
    color: T.blue,
    stats: [
      ['CPC (BD avg)', '৳12 (range ৳5–20)'],
      ['Campaign type', 'Website Conversion'],
      ['Target', 'Males 16–35, Dhaka, sports interests'],
      ['Ad formats', 'Video reels · Carousel · Single image'],
    ],
    why: '47M+ Facebook users in Bangladesh. Bangla-language ads get 2× higher CTR. Cheapest quality traffic in the world.',
    flow: 'bookMyTurf.com → Register → Join team → First challenge in < 10 min',
  },
  {
    name: 'Google Search',
    badge: 'HIGH INTENT', badgeColor: T.green,
    pct: '25% of budget', icon: '🔍',
    color: T.green,
    stats: [
      ['CPC (BD)', '৳25–50 (79% cheaper than US)'],
      ['Campaign type', 'Search Conversion'],
      ['Keywords', '"turf booking Dhaka" · "futsal turf booking"'],
      ['Budget min', '৳500/day for meaningful data'],
    ],
    why: 'High-intent traffic — these people WANT to book a turf RIGHT NOW. Conversion rate 3–5× higher than social ads.',
    flow: 'Search → Ad → Land → Register → Book (same session)',
  },
  {
    name: 'YouTube',
    badge: 'BRAND BUILDER', badgeColor: T.red,
    pct: '15% of budget', icon: '▶️',
    color: T.red,
    stats: [
      ['CPM (BD)', '~৳53 ($0.48) — extremely cheap'],
      ['CPV', '~৳1.10 ($0.01) — nearly free'],
      ['Campaign type', 'Skippable in-stream + Shorts'],
      ['50k views cost', '৳55,000'],
    ],
    why: 'At ৳1.10/view, 50k views costs ৳55k. Pure brand awareness. Retarget 50%+ viewers on Facebook with conversion ad.',
    flow: 'YouTube watch → 50% retention → FB retarget → Conversion',
  },
];

/* ── Funnel steps ──────────────────────────────────────────── */
const FUNNEL = [
  { step: 1, label: 'Ad Impression',    detail: 'FB: 100k imp → 2k clicks · Google: 500 searches → 40 clicks · YT: 50k views → 400 clicks', bottom: '~8,000–10,000 visitors/month', color: T.blue,   width: '100%' },
  { step: 2, label: 'Webapp Landing',   detail: 'No install. Loads <2 sec. 20% register = 1,600–2,000 users/month', bottom: '1,600–2,000 registered/month', color: T.cyan,   width: '84%' },
  { step: 3, label: 'First Booking',    detail: '25% of registered users book within 10 days', bottom: '400–500 new paying users/month', color: T.green,  width: '68%' },
  { step: 4, label: 'Repeat Booker',    detail: '50% of first bookers return within 30 days', bottom: '200–250 retained active users/month', color: T.amber,  width: '52%' },
  { step: 5, label: 'Ranked Player',    detail: '40% of repeat bookers join Challenge Market — your most valuable users', bottom: '80–100 ranked players/month', color: T.purple, width: '38%' },
];

/* ── Budget table ──────────────────────────────────────────── */
const BUDGET = [
  { channel: 'Facebook/Instagram',   budget: 80000,  users: '200–250', cpa: '৳210',  notes: 'Primary driver' },
  { channel: 'Google Search',        budget: 30000,  users: '80–120',  cpa: '৳175',  notes: 'Highest intent' },
  { channel: 'YouTube Shorts',       budget: 15000,  users: 'Brand only', cpa: 'N/A', notes: 'Awareness + retargeting' },
  { channel: 'Influencer Tier 2',    budget: 40000,  users: '120',     cpa: '৳200',  notes: '50k–200k followers' },
  { channel: 'Influencer Tier 3',    budget: 15000,  users: '80',      cpa: '৳100',  notes: 'Micro, local sports' },
  { channel: 'Referral Program',     budget: 20000,  users: '60–80',   cpa: '৳150',  notes: 'Existing users recruit' },
  { channel: 'Turf Co-marketing',    budget: 10000,  users: '60',      cpa: '৳100',  notes: 'Turf owners promote BMT' },
  { channel: 'WhatsApp/Community',   budget: 5000,   users: '60',      cpa: '৳50',   notes: 'Sports groups, team chats' },
];

const TOTAL_BUDGET = BUDGET.reduce((a, b) => a + b.budget, 0);

/* ── Migration timeline ────────────────────────────────────── */
const MIGRATION = [
  { phase: 'Phase 1 (Now → M6)', label: 'Webapp Only',            color: T.green,  detail: 'All ads → bookMyTurf.com. Full feature parity. Target 3,000–5,000 registered Dhaka users.' },
  { phase: 'Phase 2 (M6–9)',     label: 'App Soft Launch',        color: T.blue,   detail: 'Android first (BD is 90% Android). Push "Your account is ready on app." One-tap migration.' },
  { phase: 'Phase 3 (M9+)',      label: 'App Primary',            color: T.purple, detail: 'Paid ads shift to app install campaigns. Webapp stays for desktop + turf owners.' },
];

export default function AdStrategySection() {
  return (
    <section id="adstrategy" style={{ padding: '40px 0 32px' }}>
      <SectionTitle
        label="Section 2 · Growth Engine"
        title='How We Turn ৳1 Into ৳30'
        accent={T.blue}
        sub="Three channels. One funnel. Compounding returns."
      />

      {/* 2A — Channel cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 28 }}>
        {CHANNELS.map((c) => (
          <Card key={c.name} accent={c.color} style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontSize: 24 }}>{c.icon}</span>
              <Badge text={c.badge} color={c.badgeColor} />
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: T.white, marginBottom: 4 }}>{c.name}</p>
            <p style={{ fontSize: 10, color: c.color, marginBottom: 12, fontWeight: 600 }}>{c.pct}</p>
            {c.stats.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${T.border}`, padding: '5px 0', gap: 8 }}>
                <span style={{ fontSize: 10, color: T.muted }}>{k}</span>
                <span style={{ fontSize: 10, color: T.white, fontWeight: 600, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
            <p style={{ fontSize: 10, color: T.muted, lineHeight: 1.6, marginTop: 12, paddingTop: 10, borderTop: `1px solid ${T.border}` }}>{c.why}</p>
            <p style={{ fontSize: 9, color: c.color, marginTop: 8, fontStyle: 'italic' }}>{c.flow}</p>
          </Card>
        ))}
      </div>

      {/* 2B — Funnel */}
      <Card style={{ marginBottom: 24, padding: '24px 28px' }}>
        <p style={{ fontSize: 10, color: T.cyan, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 20 }}>The Webapp Conversion Funnel</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
          {FUNNEL.map((f) => (
            <div key={f.step} style={{ width: f.width, transition: 'width 0.4s ease' }}>
              <div style={{
                background: `${f.color}20`, border: `1px solid ${f.color}55`,
                borderRadius: 8, padding: '10px 16px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: f.color, minWidth: 20 }}>0{f.step}</span>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: T.white }}>{f.label}</p>
                    <p style={{ fontSize: 10, color: T.muted, lineHeight: 1.5 }}>{f.detail}</p>
                  </div>
                </div>
                <p style={{ fontSize: 11, fontWeight: 700, color: f.color, whiteSpace: 'nowrap', textAlign: 'right' }}>{f.bottom}</p>
              </div>
              {f.step < 5 && <div style={{ width: 2, height: 6, background: T.border, margin: '0 auto' }} />}
            </div>
          ))}
        </div>
        {/* LTV metrics row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginTop: 20, paddingTop: 16, borderTop: `1px solid ${T.border}` }}>
          {[
            { label: 'Blended CPA', value: '৳220–270', color: T.amber },
            { label: 'Monthly Rev/User', value: '৳600', color: T.green },
            { label: 'Payback Period', value: '11–13 days', color: T.cyan },
            { label: 'LTV:CAC Ratio', value: '18:1 ✅', color: T.green },
          ].map((m) => (
            <div key={m.label} style={{ textAlign: 'center', background: `${m.color}0f`, borderRadius: 8, padding: '10px 8px', border: `1px solid ${m.color}33` }}>
              <p style={{ fontSize: 9, color: T.muted, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.label}</p>
              <p style={{ fontSize: 16, fontWeight: 800, color: m.color }}>{m.value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 2C — Budget table */}
      <Card style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 10, color: T.amber, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 14 }}>Marketing Channel Budget (6-Month Peak)</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${T.border}` }}>
              {['Channel', 'Budget/Month', 'Users', 'CPA', 'Notes'].map((h, i) => (
                <th key={h} style={{ padding: '6px 10px', textAlign: i === 0 ? 'left' : 'center', color: T.muted, fontWeight: 500, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BUDGET.map((r, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${T.border}33`, background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent' }}>
                <td style={{ padding: '8px 10px', color: T.white, fontWeight: 500 }}>{r.channel}</td>
                <td style={{ padding: '8px 10px', textAlign: 'center', color: T.green, fontWeight: 700, fontFamily: 'monospace' }}>৳{r.budget.toLocaleString()}</td>
                <td style={{ padding: '8px 10px', textAlign: 'center', color: T.white }}>{r.users}</td>
                <td style={{ padding: '8px 10px', textAlign: 'center', color: T.cyan }}>{r.cpa}</td>
                <td style={{ padding: '8px 10px', textAlign: 'center', color: T.muted, fontSize: 10 }}>{r.notes}</td>
              </tr>
            ))}
            <tr style={{ background: `${T.green}11`, borderTop: `1px solid ${T.green}44` }}>
              <td style={{ padding: '10px 10px', color: T.white, fontWeight: 800 }}>TOTAL</td>
              <td style={{ padding: '10px 10px', textAlign: 'center', color: T.green, fontWeight: 800, fontFamily: 'monospace', fontSize: 13 }}>৳{TOTAL_BUDGET.toLocaleString()}</td>
              <td style={{ padding: '10px 10px', textAlign: 'center', color: T.white, fontWeight: 700 }}>~660–770</td>
              <td style={{ padding: '10px 10px', textAlign: 'center', color: T.cyan, fontWeight: 700 }}>৳245</td>
              <td style={{ padding: '10px 10px', textAlign: 'center', color: T.muted, fontSize: 10 }}>Blended</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: 10, color: T.muted, lineHeight: 1.7, marginTop: 14, paddingTop: 12, borderTop: `1px solid ${T.border}`, fontStyle: 'italic' }}>
          <strong style={{ color: T.green }}>Organic bonus:</strong> Season leaderboards, rank-up screenshots, and match-day content adds an estimated <strong style={{ color: T.white }}>150–300 users/month at ৳0 cost.</strong> The product markets itself — every rank-up is a shareable moment.
        </p>
      </Card>

      {/* 2D — Migration timeline */}
      <Card>
        <p style={{ fontSize: 10, color: T.purple, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 16 }}>Webapp → App Migration Plan</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {MIGRATION.map((m, i) => (
            <div key={i} style={{ borderLeft: `3px solid ${m.color}`, paddingLeft: 14 }}>
              <Badge text={m.phase} color={m.color} />
              <p style={{ fontSize: 13, fontWeight: 700, color: m.color, margin: '8px 0 6px' }}>{m.label}</p>
              <p style={{ fontSize: 11, color: T.muted, lineHeight: 1.6 }}>{m.detail}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

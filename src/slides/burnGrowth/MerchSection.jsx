import { T, Card, SectionTitle, Badge } from './tokens.jsx';

/* ── Product line ──────────────────────────────────────────── */
const PRODUCTS = [
  {
    badge: 'HERO PRODUCT', badgeColor: T.green,
    name: 'FIFA Sublimation Jersey',
    desc: 'Special fabric sublimation print. Full-colour national team designs. Argentina · Brazil · France · Portugal. The product everyone actually wants.',
    cost: '৳300–400', sell: '৳800–900', profit: '৳400–500', moq: '20–30 pcs / design',
    color: T.green,
  },
  {
    badge: 'VOLUME DRIVER', badgeColor: T.cyan,
    name: 'Single Jersey T-Shirt',
    desc: 'Single jersey fabric. Custom cuts and sewing. Screen print + sublimation options. BMT-branded + country colourways. Casual wear that doubles as fan gear.',
    cost: '৳280–350', sell: '৳700–800', profit: '৳400–450', moq: '20–30 pcs / design',
    color: T.cyan,
  },
  {
    badge: 'UPSELL', badgeColor: T.purple,
    name: 'Sublimation Tracksuit Trouser',
    desc: 'Matching sublimation trouser to complete the set. Elastic waist, ventilation panels. Sold standalone or as jersey+trouser bundle. Bundle unlocks ৳150 extra margin.',
    cost: '৳300–400', sell: '৳750–850', profit: '৳400–500', moq: '20–30 pcs / design',
    color: T.purple,
  },
];

/* ── GTM phases ────────────────────────────────────────────── */
const PHASES = [
  {
    badge: 'APR 15–30 · Market Fit Test', color: T.amber,
    headline: 'Small Batch Drop',
    desc: 'Launch 20–30 pieces per design across 3–4 designs. Sell via BMT app users, WhatsApp community, Facebook/Instagram. Zero ad spend — organic only. Identify the 1–2 designs that sell out fastest. These become the scale designs.',
    stats: [
      { k: 'Capital deployed', v: '৳1.5–2 Lac' },
      { k: 'Units produced',   v: '80–120 pcs' },
      { k: 'Target sell-out',  v: '7–10 days' },
      { k: 'Signal',           v: '1 design × 20 pcs in 7d → scale it' },
    ],
  },
  {
    badge: 'MAY 1–31 · Scale Winners', color: T.blue,
    headline: 'Go Ham',
    desc: 'Double down on proven designs only. Paid FB/IG ads targeting football fans in Dhaka + CTG. Turf co-marketing — sell at turfs during match days. BMT app push notification to all registered users. Bundle offer: Jersey + Trouser = ৳1,400 (saves ৳200).',
    stats: [
      { k: 'Capital deployed', v: '৳4–5 Lac' },
      { k: 'Units produced',   v: '400–600 pcs' },
      { k: 'Target revenue',   v: '৳25–35 Lac' },
      { k: 'Channels',         v: 'FB/IG · Turf POS · BMT app · WhatsApp' },
    ],
  },
  {
    badge: 'JUN 11–JUL 19 · Tournament Window', color: T.green,
    headline: 'Peak Fever',
    desc: 'World Cup is live. Demand is at maximum. Daily match-day drops tied to fixtures. Argentina match day → Argentina drop. Flash sales 48 hours before big matches. Price holds or increases — do NOT discount during tournament.',
    stats: [
      { k: 'Capital deployed', v: '৳3–4 Lac (restock winners only)' },
      { k: 'Target revenue',   v: '৳30–40 Lac' },
      { k: 'Strategy',         v: 'Match-day urgency · scarcity pricing' },
      { k: 'Note',             v: 'Jerseys sold ৳1,200+ at 2022 WC peak' },
    ],
  },
  {
    badge: 'JUL 20–31 · Clearance Exit', color: T.purple,
    headline: 'Clean Exit',
    desc: 'Post-tournament: 20–30% discount to clear remaining stock. Bundle anything unsold. Full capital returned + profit distributed by July 31.',
    stats: [
      { k: 'Target',           v: 'Zero leftover stock' },
      { k: 'Exit deadline',    v: 'July 31, 2026' },
      { k: 'Capital returned', v: '৳10 Lac (100%)' },
      { k: 'Investor profit',  v: '40% of net profit' },
    ],
  },
];

/* ── Financial scenarios ───────────────────────────────────── */
const SCENARIOS = [
  {
    badge: 'CONSERVATIVE', color: T.amber,
    units: 1500, revenue: '৳12.0 Lac', cost: '৳5.25 Lac', profit: '৳6.75 Lac',
    investorReturn: '৳10L capital + ৳2.7L (40%)',
    bmtKeeps: '৳4.05 Lac (60%)',
    note: 'Assumes only Phase 1 + half of Phase 2 sells',
  },
  {
    badge: 'BASE CASE', color: T.green,
    units: 2200, revenue: '৳17.6 Lac', cost: '৳7.7 Lac', profit: '৳9.9 Lac',
    investorReturn: '৳10L capital + ৳3.96L (40%)',
    bmtKeeps: '৳5.94 Lac (60%)',
    note: 'Full Phase 1 + 2 sells. 50% of tournament window.',
  },
  {
    badge: 'UPSIDE', color: T.cyan,
    units: 2800, revenue: '৳22.4 Lac', cost: '৳9.8 Lac', profit: '৳12.6 Lac',
    investorReturn: '৳10L capital + ৳5.04L (40%)',
    bmtKeeps: '৳7.56 Lac (60%)',
    note: 'All phases execute. Tournament fever at peak. 2022 precedent.',
  },
];

/* ── Risks ─────────────────────────────────────────────────── */
const RISKS = [
  {
    risk: 'Design doesn\'t sell',
    mitigation: '20–30 pcs test batch first. Only scale proven winners.',
  },
  {
    risk: 'Stock left after tournament',
    mitigation: 'Phase 4 clearance with bundles + 20% discount. BMT retains unsold stock for next season.',
  },
  {
    risk: 'Production delay',
    mitigation: 'Sublimation + single jersey = 5–7 day turnaround. Local Dhaka production. No import dependency.',
  },
  {
    risk: 'Demand lower than 2022',
    mitigation: 'Conservative scenario still returns full ৳10 Lac capital. Profit share only activates after capital is returned.',
  },
  {
    risk: 'Market oversaturated',
    mitigation: 'BMT has direct channel — turf users are the exact target audience. Zero middleman. Higher margin retained.',
  },
];

/* ── Opportunity stat boxes ────────────────────────────────── */
const OPP_STATS = [
  { label: 'TOURNAMENT WINDOW',      value: 'June 11 – July 19, 2026', sub: 'FIFA World Cup 2026 · USA/Canada/Mexico',     color: T.amber  },
  { label: 'BANGLADESH MARKET SIZE', value: '৳1,200 Crore/yr',         sub: 'Sportswear & merch — peaks during World Cup', color: T.green  },
  { label: 'OUR LAUNCH DATE',        value: 'April 15–20, 2026',       sub: '8 weeks before tournament · first-mover window', color: T.cyan },
  { label: 'EXIT DATE',              value: 'July 31, 2026',           sub: 'Full capital return + 40% profit to investor',  color: T.purple },
];

/* ── Deal stat boxes ───────────────────────────────────────── */
const DEAL_STATS = [
  { label: 'LINE OF CREDIT',       value: '৳10 Lac',       sub: 'Full return by July 31',                color: T.amber },
  { label: 'INVESTOR PROFIT SHARE',value: '40%',           sub: 'Of net profit after capital return',    color: T.green },
  { label: 'DURATION',             value: '~100 Days',     sub: 'April 15 → July 31, 2026',             color: T.cyan  },
  { label: 'BASE CASE RETURN',     value: '৳10L + ৳3.96L', sub: 'Capital + profit · total ৳13.96 Lac back', color: T.green },
];

/* ── Component ─────────────────────────────────────────────── */
export default function MerchSection() {
  return (
    <section id="merch" style={{ padding: '40px 0 32px' }}>
      <SectionTitle
        label="Section 0 · Merch Play"
        title="The FIFA Drop"
        accent={T.amber}
        sub="10 Lac. 100 days. World Cup fever. One clean exit."
      />

      {/* BLOCK 1 — WHY NOW */}
      <Card accent={T.cyan} style={{ marginBottom: 24, padding: '22px 24px' }}>
        <p style={{ fontSize: 10, color: T.cyan, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 16 }}>Why Now</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
          {OPP_STATS.map((s) => (
            <div key={s.label} style={{ background: `${s.color}0f`, border: `1px solid ${s.color}33`, borderRadius: 10, padding: '14px 16px' }}>
              <p style={{ fontSize: 9, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>{s.label}</p>
              <p style={{ fontSize: 15, fontWeight: 800, color: s.color, textShadow: `0 0 16px ${s.color}44`, lineHeight: 1.3 }}>{s.value}</p>
              <p style={{ fontSize: 10, color: T.muted, marginTop: 4, lineHeight: 1.5 }}>{s.sub}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '12px 16px', background: `${T.green}0f`, borderRadius: 8, border: `1px solid ${T.green}44` }}>
          <p style={{ fontSize: 12, color: T.green, fontWeight: 700, lineHeight: 1.6 }}>
            Argentina &amp; Brazil jerseys sell out within days during World Cup.
            We are not selling jerseys — we are selling identity.
          </p>
        </div>
      </Card>

      {/* BLOCK 2 — PRODUCT LINE */}
      <p style={{ fontSize: 10, color: T.amber, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 14 }}>The Product Line</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 28 }}>
        {PRODUCTS.map((p) => (
          <Card key={p.name} accent={p.color} style={{ padding: '20px' }}>
            <div style={{ marginBottom: 10 }}>
              <Badge text={p.badge} color={p.badgeColor} />
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: T.white, marginBottom: 6 }}>{p.name}</p>
            <p style={{ fontSize: 10, color: T.muted, lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, borderTop: `1px solid ${T.border}`, paddingTop: 12 }}>
              {[
                { k: 'Cost (incl. mktg)', v: p.cost, c: T.red   },
                { k: 'Sell price',        v: p.sell, c: T.white  },
                { k: 'Profit / unit',     v: p.profit, c: T.green },
                { k: 'MOQ test run',      v: p.moq,   c: T.muted  },
              ].map(({ k, v, c }) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${T.border}33`, paddingBottom: 4 }}>
                  <span style={{ fontSize: 10, color: T.muted }}>{k}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: c, fontFamily: 'monospace' }}>{v}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* BLOCK 3 — GO-TO-MARKET */}
      <p style={{ fontSize: 10, color: T.green, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 4 }}>The Playbook</p>
      <p style={{ fontSize: 12, color: T.muted, marginBottom: 16 }}>Test. Validate. Scale. Exit.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
        {PHASES.map((ph) => (
          <div key={ph.badge} style={{ background: T.surface, border: `1px solid ${ph.color}33`, borderRadius: 12, overflow: 'hidden' }}>
            {/* Phase header */}
            <div style={{ background: `${ph.color}0f`, borderBottom: `1px solid ${ph.color}33`, padding: '14px 20px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ width: 4, flexShrink: 0, alignSelf: 'stretch', background: ph.color, borderRadius: 2 }} />
              <div style={{ flex: 1 }}>
                <Badge text={ph.badge} color={ph.color} />
                <p style={{ fontSize: 14, fontWeight: 700, color: T.white, margin: '6px 0 4px' }}>{ph.headline}</p>
                <p style={{ fontSize: 11, color: T.muted, lineHeight: 1.6 }}>{ph.desc}</p>
              </div>
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 8, minWidth: 220 }}>
                {ph.stats.map(({ k, v }) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, borderBottom: `1px solid ${T.border}33`, paddingBottom: 4 }}>
                    <span style={{ fontSize: 9, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: ph.color, textAlign: 'right' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BLOCK 4 — FINANCIAL MODEL */}
      <p style={{ fontSize: 10, color: T.purple, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 4 }}>The Numbers</p>
      <p style={{ fontSize: 12, color: T.muted, marginBottom: 14 }}>Conservative · Base · Upside — three scenarios.</p>

      {/* Base assumptions */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: '14px 20px', marginBottom: 16, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12 }}>
        {[
          { k: 'Avg cost / unit',     v: '৳350', c: T.red   },
          { k: 'Avg sell price',      v: '৳800', c: T.white },
          { k: 'Avg profit / unit',   v: '৳450', c: T.green },
          { k: 'Total capital',       v: '৳10 Lac', c: T.amber },
          { k: 'Units producible',    v: '~2,857', c: T.cyan  },
        ].map(({ k, v, c }) => (
          <div key={k} style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 9, color: T.muted, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{k}</p>
            <p style={{ fontSize: 15, fontWeight: 800, color: c }}>{v}</p>
          </div>
        ))}
      </div>

      {/* Scenario cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 28 }}>
        {SCENARIOS.map((s) => (
          <Card key={s.badge} accent={s.color} style={{ padding: '20px' }}>
            <div style={{ marginBottom: 12 }}><Badge text={s.badge} color={s.color} /></div>
            <p style={{ fontSize: 22, fontWeight: 900, color: s.color, textShadow: `0 0 20px ${s.color}44`, marginBottom: 14 }}>{s.units.toLocaleString()} units</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {[
                { k: 'Revenue',          v: s.revenue,        c: T.white  },
                { k: 'Cost',             v: s.cost,           c: T.red    },
                { k: 'Gross Profit',     v: s.profit,         c: T.green  },
                { k: 'Investor return',  v: s.investorReturn, c: s.color  },
                { k: 'BMT keeps',        v: s.bmtKeeps,       c: T.muted  },
              ].map(({ k, v, c }) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${T.border}33`, paddingBottom: 5 }}>
                  <span style={{ fontSize: 10, color: T.muted }}>{k}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: c, fontFamily: 'monospace', textAlign: 'right', maxWidth: '55%' }}>{v}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 9, color: T.muted, marginTop: 10, fontStyle: 'italic', lineHeight: 1.5 }}>{s.note}</p>
          </Card>
        ))}
      </div>

      {/* BLOCK 5 — THE DEAL */}
      <div style={{ background: `linear-gradient(135deg, #0a150a 0%, #080d18 50%, #100814 100%)`, border: `1px solid ${T.green}55`, borderRadius: 16, padding: '28px 32px', marginBottom: 28, boxShadow: `0 0 60px ${T.green}10` }}>
        <p style={{ fontSize: 10, color: T.green, textTransform: 'uppercase', letterSpacing: '0.22em', fontWeight: 700, marginBottom: 20 }}>The Deal</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
          {DEAL_STATS.map((s) => (
            <div key={s.label} style={{ textAlign: 'center', background: `${s.color}0a`, borderRadius: 10, padding: '16px 12px', border: `1px solid ${s.color}33` }}>
              <p style={{ fontSize: 9, color: T.muted, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{s.label}</p>
              <p style={{ fontSize: 20, fontWeight: 900, color: s.color, textShadow: `0 0 20px ${s.color}44`, lineHeight: 1.2 }}>{s.value}</p>
              <p style={{ fontSize: 9, color: T.muted, marginTop: 6, lineHeight: 1.5 }}>{s.sub}</p>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 20, borderTop: `1px solid ${T.border}`, textAlign: 'center' }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: T.green, lineHeight: 1.7, textShadow: `0 0 24px ${T.green}44` }}>
            This is not a startup bet. This is a 100-day seasonal trade
            with a hard exit date, a proven market, and your capital back
            before the tournament ends.
          </p>
        </div>
      </div>

      {/* BLOCK 6 — RISK CONTROL */}
      <Card style={{ padding: '22px 24px' }}>
        <p style={{ fontSize: 10, color: T.red, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 16 }}>Risk Control</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 16, padding: '6px 10px', borderBottom: `1px solid ${T.border}` }}>
            <span style={{ fontSize: 9, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Risk</span>
            <span style={{ fontSize: 9, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Mitigation</span>
          </div>
          {RISKS.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 16, padding: '12px 10px', borderBottom: i < RISKS.length - 1 ? `1px solid ${T.border}33` : 'none', background: i % 2 === 0 ? 'rgba(255,255,255,0.012)' : 'transparent' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ color: T.red, fontSize: 10, marginTop: 1, flexShrink: 0 }}>⚠</span>
                <span style={{ fontSize: 11, color: T.white, fontWeight: 500, lineHeight: 1.5 }}>{r.risk}</span>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ color: T.green, fontSize: 10, marginTop: 1, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 11, color: T.muted, lineHeight: 1.6 }}>{r.mitigation}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

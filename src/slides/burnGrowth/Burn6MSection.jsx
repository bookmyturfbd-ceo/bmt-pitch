import { useState } from 'react';
import { T, Card, SectionTitle, Badge } from './tokens.jsx';

/* ── Salary milestone phases ───────────────────────────────── */
const PHASES = [
  {
    phase: 'Phase 1', label: 'Launch → Milestone', color: T.amber,
    roles: [
      { role: '3× C-Suite', salary: '৳20,000 each = ৳60,000' },
      { role: 'HOD', salary: '৳10,000' },
      { role: 'Ops Manager', salary: '৳10,000' },
    ],
    total: '৳80,000/month',
  },
  {
    phase: 'Phase 2', label: 'Post-Milestone → Pre-CTG', color: T.blue,
    roles: [
      { role: '3× C-Suite', salary: '৳35,000 each = ৳1,05,000' },
      { role: 'HOD', salary: '৳15,000' },
      { role: 'Ops Manager', salary: '৳13,000' },
    ],
    total: '৳1,33,000/month',
  },
  {
    phase: 'Phase 3', label: 'Dhaka Net ≥ ৳5 Lac/mo (2 months)', color: T.green,
    roles: [
      { role: '3× C-Suite', salary: '৳80k–1L each' },
      { role: 'HOD', salary: '৳25,000' },
      { role: 'Ops Manager', salary: '৳20,000' },
      { role: 'CTG Division Mgr (new)', salary: '৳35,000' },
      { role: 'CTG Tech/Support (new)', salary: '৳22,000' },
      { role: '2× CTG Field Ops (new)', salary: '৳16,000 each' },
    ],
    total: '৳3,40,000–৳3,80,000/month',
  },
];

const MILESTONE_GATES = [
  '30+ active turfs onboarded',
  '1,000+ registered users',
  '1.5 avg daily bookings per turf',
  'Platform revenue ≥ 60% of monthly burn',
];

/* ── Month cards ───────────────────────────────────────────── */
const MONTHS = [
  {
    month: 'Month 1', label: 'Foundation Blast', status: 'INVESTMENT', statusColor: T.red,
    burn: 384125, revenue: 72000, net: -312125, cash: 1687875,
    items: [
      { cat: 'One-time', rows: ['Company formation + legal: ৳30,000', 'Turf onboarding (10 turfs): ৳30,000', 'Brand assets + promo videos: ৳40,000'] },
      { cat: 'Marketing ৳1,50,000', rows: ['FB/IG conversion campaigns: ৳80,000 → ~700 paying users', 'Google Search "turf booking Dhaka": ৳25,000 → ~285 users', 'YouTube Shorts awareness: ৳15,000 → 13,636 views', 'Influencer Tier 2 (5 creators): ৳50,000 → ~400 users', 'Tournament free entry (16 teams): ৳50,000 → 160 users', 'Turf co-marketing setup: ৳10,000'] },
      { cat: 'Fixed', rows: ['Salaries (Phase 1): ৳80,000', 'Tech (Supabase + Vercel): ৳4,125'] },
    ],
    note: '8 turfs × 1.0 bkg/day × ৳300 × 30',
  },
  {
    month: 'Month 2', label: 'Turbo Acquisition', status: 'GROWTH', statusColor: T.amber,
    burn: 294125, revenue: 216000, net: -78125, cash: 1409750,
    items: [
      { cat: 'Onboarding', rows: ['10 more turfs: ৳30,000'] },
      { cat: 'Marketing ৳1,80,000', rows: ['FB/IG retargeting + lookalike: ৳90,000 (CPA drops to ৳150)', 'Google Search (scale winners): ৳35,000', 'YouTube Shorts viral content: ৳15,000', 'Influencer Tier 2 match-day content: ৳40,000', 'Referral "Bring a team, get ৳200 credit": ৳20,000 → 300 extra users', 'Micro-influencer army 20 team captains: ৳20,000'] },
      { cat: 'Fixed', rows: ['Salaries: ৳80,000', 'Tech: ৳4,125'] },
    ],
    note: '16 turfs × 1.5 bkg/day × ৳300 × 30',
    milestone: '📈 GAINING TRACTION',
  },
  {
    month: 'Month 3', label: 'Season 1 Ignition', status: 'SCALING', statusColor: T.blue,
    burn: 309125, revenue: 504000, net: 194875, cash: null,
    items: [
      { cat: 'Onboarding', rows: ['12 more turfs (now 28 total): ৳36,000', 'Season 1 launch event: ৳60,000'] },
      { cat: 'Marketing ৳1,50,000', rows: ['Season 1 launch across all channels: ৳70,000', 'Google Search + season keywords: ৳35,000', 'YouTube 30-sec Season 1 hype video: ৳20,000', 'Micro-influencer team rank reveals: ৳25,000', 'WhatsApp broadcast to all users: ৳5,000'] },
      { cat: 'Fixed', rows: ['Salaries (Phase 1 → check milestone): ৳80,000', 'Tech: ৳4,125'] },
    ],
    note: '28 turfs × 2.0 bkg/day × ৳300 × 30',
    milestone: '🎯 MILESTONE CHECK — if hit, Phase 2 salary from Month 4',
  },
  {
    month: 'Month 4', label: 'Break Even Locked', status: 'PROFITABLE', statusColor: T.green,
    burn: 257125, revenue: 855000, net: 597875, cash: null,
    items: [
      { cat: 'Marketing ৳1,20,000', rows: ['FB lookalike scaling (reduce waste): ৳60,000', 'Google Search (maintain + early CTG): ৳30,000', 'YouTube retargeting warm audiences: ৳15,000', 'Referral + community: ৳15,000'] },
      { cat: 'Fixed', rows: ['Salaries (Phase 2): ৳1,33,000', 'Tech: ৳4,125'] },
    ],
    note: '38 turfs × 2.5 bkg/day × ৳300 × 30',
    milestone: '✅ BREAK-EVEN LOCKED — growing steadily',
  },
  {
    month: 'Month 5', label: 'Profit Stack', status: 'PROFITABLE', statusColor: T.green,
    burn: 257125, revenue: 1134000, net: 876875, cash: null,
    items: [
      { cat: 'Marketing ৳1,00,000', rows: ['Dhaka on autopilot — optimised channels'] },
      { cat: 'Fixed', rows: ['Salaries (Phase 2): ৳1,33,000', 'Tech: ৳4,125', 'Misc: ৳20,000'] },
    ],
    note: '42 turfs × 3.0 bkg/day × ৳300 × 30',
  },
  {
    month: 'Month 6', label: 'CTG Ready', status: 'EXPANDING', statusColor: T.purple,
    burn: 297125, revenue: 1417500, net: 1120375, cash: null,
    items: [
      { cat: 'Marketing ৳80,000', rows: ['Dhaka maintained on efficient spend'] },
      { cat: 'CTG Groundwork', rows: ['3 scouting trips + meetings + office deposit: ৳80,000'] },
      { cat: 'Fixed', rows: ['Salaries (Phase 2): ৳1,33,000', 'Tech: ৳4,125'] },
    ],
    note: '45 turfs × 3.5 bkg/day × ৳300 × 30',
    milestone: '🚀 READY TO RAISE CTG ROUND',
  },
];

const SUMMARY = [
  { label: 'Total Deployed from 20 Lac', value: '~৳14 Lac', color: T.amber },
  { label: 'Total Revenue Earned',       value: '~৳42 Lac', color: T.green },
  { label: 'Net Profit (6 Months)',       value: '~৳28 Lac', color: T.green },
  { label: 'Active Turfs',               value: '45',         color: T.cyan  },
  { label: 'Registered Users',           value: '2,500–4,000', color: T.blue  },
  { label: 'Monthly Revenue Run Rate',   value: '৳14 Lac+',    color: T.green },
];


function MonthCard({ m }) {
  const [open, setOpen] = useState(false);
  const profitable = m.net > 0;

  return (
    <div style={{
      background: T.surface,
      border: `1px solid ${m.statusColor}44`,
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: `0 0 16px ${m.statusColor}0a`,
    }}>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
          padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <Badge text={m.status} color={m.statusColor} />
            <span style={{ fontSize: 11, color: T.muted }}>{m.month}</span>
          </div>
          <p style={{ fontSize: 14, fontWeight: 700, color: T.white }}>{m.label}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: 18, fontWeight: 800, color: profitable ? T.green : T.red, fontFamily: 'monospace' }}>
            {profitable ? '+' : ''}{m.net >= 0 ? '৳' + (m.net / 100000).toFixed(1) + 'L' : '−৳' + (Math.abs(m.net) / 100000).toFixed(1) + 'L'}
          </p>
          <p style={{ fontSize: 9, color: T.muted }}>Net this month</p>
        </div>
      </button>

      {/* Quick stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, borderTop: `1px solid ${T.border}`, background: '#0a0b11' }}>
        {[
          { label: 'Total Burn', value: '৳' + (m.burn / 100000).toFixed(2) + 'L', color: T.red },
          { label: 'Revenue', value: '৳' + (m.revenue / 100000).toFixed(2) + 'L', color: T.green },
          { label: 'Cash Left', value: m.cash ? '৳' + (m.cash / 100000).toFixed(1) + 'L' : '📈 growing', color: T.cyan },
        ].map((s) => (
          <div key={s.label} style={{ padding: '10px 14px', borderRight: `1px solid ${T.border}` }}>
            <p style={{ fontSize: 9, color: T.muted, marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</p>
            <p style={{ fontSize: 13, fontWeight: 700, color: s.color, fontFamily: 'monospace' }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Revenue basis */}
      <div style={{ padding: '8px 18px', background: `${T.green}08`, borderTop: `1px solid ${T.border}` }}>
        <p style={{ fontSize: 10, color: T.muted, fontStyle: 'italic' }}>📊 {m.note}</p>
      </div>

      {/* Expandable breakdown */}
      {open && (
        <div style={{ padding: '14px 18px', borderTop: `1px solid ${T.border}`, background: '#0c0d14' }}>
          {m.items.map((it, idx) => (
            <div key={idx} style={{ marginBottom: 12 }}>
              <p style={{ fontSize: 10, color: T.amber, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 6 }}>{it.cat}</p>
              {it.rows.map((r, ri) => (
                <p key={ri} style={{ fontSize: 10, color: T.muted, lineHeight: 1.7, paddingLeft: 10, borderLeft: `2px solid ${T.border}` }}>• {r}</p>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Milestone note */}
      {m.milestone && (
        <div style={{ padding: '8px 18px', background: `${T.green}11`, borderTop: `1px solid ${T.green}33` }}>
          <p style={{ fontSize: 11, color: T.green, fontWeight: 600 }}>{m.milestone}</p>
        </div>
      )}
    </div>
  );
}

export default function Burn6MSection() {
  return (
    <section id="burn6m" style={{ padding: '40px 0 32px' }}>
      <SectionTitle
        label="Section 3 · 6-Month Aggressive"
        title="⚡ The Preferred Path"
        accent={T.green}
        sub="Deploy fast. Acquire hard. Break even by Month 5. CTG-ready by Month 6."
      />

      {/* Salary milestones */}
      <Card style={{ marginBottom: 24, padding: '22px 24px' }}>
        <p style={{ fontSize: 10, color: T.amber, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 16 }}>Salary Milestone System</p>

        {/* Milestone gates */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 20 }}>
          {MILESTONE_GATES.map((g, i) => (
            <div key={i} style={{ background: `${T.green}10`, border: `1px solid ${T.green}33`, borderRadius: 8, padding: '10px 12px' }}>
              <p style={{ fontSize: 10, color: T.green, fontWeight: 600 }}>✅ Gate {i + 1}</p>
              <p style={{ fontSize: 10, color: T.muted, marginTop: 4, lineHeight: 1.5 }}>{g}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {PHASES.map((p) => (
            <div key={p.phase} style={{ borderLeft: `3px solid ${p.color}`, paddingLeft: 14 }}>
              <Badge text={p.phase} color={p.color} />
              <p style={{ fontSize: 11, color: T.muted, margin: '6px 0 10px', fontStyle: 'italic' }}>{p.label}</p>
              {p.roles.map((r, ri) => (
                <div key={ri} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: `1px solid ${T.border}33` }}>
                  <span style={{ fontSize: 10, color: T.muted }}>{r.role}</span>
                  <span style={{ fontSize: 10, color: T.white, fontWeight: 600 }}>{r.salary}</span>
                </div>
              ))}
              <p style={{ fontSize: 13, fontWeight: 800, color: p.color, marginTop: 10 }}>{p.total}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Month cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 28 }}>
        {MONTHS.map((m) => <MonthCard key={m.month} m={m} />)}
      </div>

      {/* 6M Summary */}
      <div style={{
        background: `linear-gradient(135deg, ${T.surface} 0%, #0d1420 100%)`,
        border: `1px solid ${T.green}55`,
        borderRadius: 14,
        padding: '24px 28px',
        boxShadow: `0 0 40px ${T.green}15`,
      }}>
        <p style={{ fontSize: 10, color: T.green, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, marginBottom: 20 }}>6-Month Summary</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 16 }}>
          {SUMMARY.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 9, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{s.label}</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: s.color, textShadow: `0 0 20px ${s.color}44` }}>{s.value}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', paddingTop: 16, borderTop: `1px solid ${T.border}` }}>
          <p style={{ fontSize: 13, color: T.green, fontWeight: 700 }}>Annualised from Dhaka alone: ~৳1.7 Crore run rate</p>
          <p style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>CTG expansion funded from operations ✅ — no external capital needed</p>
        </div>
      </div>

      {/* Cash Runway Analysis */}
      <div style={{
        background: T.surface,
        border: `1px solid ${T.cyan}44`,
        borderRadius: 14,
        padding: '22px 28px',
        marginTop: 20,
        boxShadow: `0 0 24px ${T.cyan}0a`,
      }}>
        <p style={{ fontSize: 10, color: T.cyan, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, marginBottom: 16 }}>Cash Runway Analysis</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11, marginBottom: 14 }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${T.border}` }}>
              {['Month', 'Net', 'Cumulative Cash'].map((h, i) => (
                <th key={h} style={{ padding: '6px 10px', textAlign: i === 0 ? 'left' : 'right', color: T.muted, fontWeight: 500, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { month: 'Start', net: '—',        cash: '৳20.00L', flag: '',                    positive: null },
              { month: 'M1',    net: '–৳3.12L',  cash: '৳16.88L', flag: '',                    positive: false },
              { month: 'M2',    net: '–৳0.78L',  cash: '৳16.10L', flag: ' ← Minimum floor',   positive: false },
              { month: 'M3',    net: '+৳1.95L',  cash: '৳18.05L', flag: '',                    positive: true },
              { month: 'M4',    net: '+৳5.98L',  cash: '৳24.03L', flag: ' ✅',                 positive: true },
              { month: 'M5',    net: '+৳8.77L',  cash: '৳32.80L', flag: ' ✅',                 positive: true },
            ].map((r, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${T.border}33`, background: i === 2 ? `${T.amber}0a` : (i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent') }}>
                <td style={{ padding: '8px 10px', color: T.white, fontWeight: 600, fontFamily: 'monospace' }}>{r.month}</td>
                <td style={{ padding: '8px 10px', textAlign: 'right', color: r.positive === null ? T.muted : r.positive ? T.green : T.red, fontWeight: 700, fontFamily: 'monospace' }}>{r.net}</td>
                <td style={{ padding: '8px 10px', textAlign: 'right', fontFamily: 'monospace' }}>
                  <span style={{ color: i === 2 ? T.amber : i >= 4 ? T.green : T.white, fontWeight: i === 2 || i >= 4 ? 700 : 400 }}>{r.cash}</span>
                  {r.flag && <span style={{ fontSize: 9, color: i === 2 ? T.amber : T.green, marginLeft: 4 }}>{r.flag}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ paddingTop: 12, borderTop: `1px solid ${T.border}` }}>
          <p style={{ fontSize: 10, color: T.muted, lineHeight: 1.7 }}>
            <strong style={{ color: T.amber }}>Minimum cash floor: ৳16.1 Lac at end of Month 2</strong> — never approaches danger zone.
          </p>
          <p style={{ fontSize: 10, color: T.muted, lineHeight: 1.7, marginTop: 4 }}>
            <strong style={{ color: T.green }}>Investment fully recovered by Month 4.</strong> Self-liquidating within the raise window.
          </p>
        </div>
      </div>
    </section>
  );
}

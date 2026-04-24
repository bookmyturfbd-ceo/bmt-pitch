import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { T, Card, SectionTitle, Badge } from './tokens.jsx';

Chart.register(...registerables);

/* ── Data ─────────────────────────────────────────────────── */
const MARKET_COMPARE = [
  { metric: 'Active Turfs',        dhaka: '40–50',       ctg: '100+ (and growing)' },
  { metric: 'Target Onboarded',    dhaka: '25 (60%)',    ctg: '60 (60%)' },
  { metric: 'Revenue (2 bkg/day)', dhaka: '৳90 Lac/yr', ctg: '৳2.16 Cr/yr' },
  { metric: 'Market Status',       dhaka: 'Established', ctg: 'Untapped' },
];

const CTG_TEAM = [
  { title: 'CTG Division Manager', salary: '৳35,000/mo', icon: '👔', color: T.purple, desc: 'Full-time CTG city head. Manages all turf relationships, local partnerships, event hosting. Reports directly to CEO. Must be CTG local with strong sports network.' },
  { title: 'CTG Tech / Support', salary: '৳22,000/mo', icon: '💻', color: T.blue, desc: 'Handles turf onboarding technical setup, scorer training, app support for CTG users. Works under CTO remotely + in person.' },
  { title: 'CTG Field Ops × 2–3', salary: '৳16,000/mo each', icon: '⚽', color: T.green, desc: 'On-ground turf visits, tournament day ops, turf owner relations, match day support. Start with 2, add 3rd when turfs exceed 40 in CTG.' },
];

const CTG_BURN = [
  { item: 'CTG Team Salaries',      cost: '৳89,000–৳1,05,000' },
  { item: 'CTG Office + Utilities', cost: '৳25,000–৳35,000' },
  { item: 'CTG Marketing (local)',  cost: '৳80,000–৳1,00,000' },
  { item: 'CTG Turf Onboarding',   cost: '৳50,000 (first 3 months)' },
  { item: 'Travel (founders + investor)', cost: '৳66,000' },
];

const CTG_REVENUE = [
  { month: 'M1', turfs: 8,  bkg: 1.0, rev: 72000   },
  { month: 'M2', turfs: 18, bkg: 2.0, rev: 324000  },
  { month: 'M3', turfs: 30, bkg: 2.0, rev: 540000  },
  { month: 'M4', turfs: 45, bkg: 2.5, rev: 1012500 },
  { month: 'M5', turfs: 55, bkg: 3.0, rev: 1485000 },
  { month: 'M6', turfs: 65, bkg: 3.0, rev: 1755000 },
];

const TRAVEL = [
  { item: 'Air (Novoair/US-Bangla, ৳3,500 return × 4)', cost: '৳14,000' },
  { item: 'Accommodation (2–3 nights, ৳5,000/trip × 4)', cost: '৳20,000' },
  { item: 'Local transport + meals (৳8,000/trip × 4)', cost: '৳32,000' },
];

/* ── Dark-background plugin — prevents white canvas flash ── */
const darkBgPlugin = {
  id: 'darkBackground',
  beforeDraw(chart) {
    const { ctx, chartArea } = chart;
    ctx.save();
    ctx.fillStyle = T.surface;
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

/* ── Revenue chart ─────────────────────────────────────────── */
function CTGChart() {
  const ref = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ref.current, {
      type: 'bar',
      plugins: [darkBgPlugin],
      data: {
        labels: CTG_REVENUE.map(r => r.month),
        datasets: [
          {
            label: 'CTG Monthly Revenue (৳)',
            data: CTG_REVENUE.map(r => r.rev),
            backgroundColor: CTG_REVENUE.map((_, i) => i >= 3 ? T.green + 'cc' : T.blue + '99'),
            borderColor: CTG_REVENUE.map((_, i) => i >= 3 ? T.green : T.blue),
            borderWidth: 1.5,
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1a1d26',
            titleColor: T.white,
            bodyColor: T.muted,
            borderColor: T.border,
            borderWidth: 1,
            callbacks: {
              label: (ctx) => `৳${(ctx.parsed.y / 100000).toFixed(2)} Lac`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: T.border + '55' },
            ticks: { color: T.muted, font: { family: 'Poppins, sans-serif', size: 11 } },
            border: { color: T.border },
          },
          y: {
            grid: { color: T.border + '55' },
            ticks: { color: T.muted, font: { family: 'Poppins, sans-serif', size: 10 }, callback: (v) => '৳' + (v / 100000).toFixed(1) + 'L' },
            border: { color: T.border },
          },
        },
      },
    });
    return () => chartRef.current?.destroy();
  }, []);

  return (
    <div style={{ height: 230, background: T.surface, borderRadius: 8, overflow: 'hidden' }}>
      <canvas ref={ref} />
    </div>
  );
}

export default function CTGSection() {
  return (
    <section id="ctg" style={{ padding: '40px 0 32px' }}>
      <SectionTitle
        label="Section 5 · Phase 2"
        title="Chittagong — Where The Real Money Is"
        accent={T.purple}
        sub="100+ active turfs. 2.5× Dhaka TAM. Our second city. Our bigger city."
      />

      {/* Market comparison */}
      <Card style={{ marginBottom: 20, padding: '20px 24px' }}>
        <p style={{ fontSize: 10, color: T.purple, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 14 }}>CTG Market Size vs Dhaka</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${T.border}` }}>
              {['Metric', 'Dhaka Phase 1', 'CTG Phase 2'].map((h, i) => (
                <th key={h} style={{ padding: '7px 10px', textAlign: i === 0 ? 'left' : 'center', color: i === 2 ? T.purple : T.muted, fontWeight: i === 2 ? 700 : 500, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MARKET_COMPARE.map((r, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${T.border}33`, background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent' }}>
                <td style={{ padding: '9px 10px', color: T.muted }}>{r.metric}</td>
                <td style={{ padding: '9px 10px', textAlign: 'center', color: T.blue, fontWeight: 600 }}>{r.dhaka}</td>
                <td style={{ padding: '9px 10px', textAlign: 'center', color: T.purple, fontWeight: 700 }}>{r.ctg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Team + burn row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18, marginBottom: 20 }}>
        {/* CTG Team */}
        <Card style={{ padding: '20px 22px' }}>
          <p style={{ fontSize: 10, color: T.purple, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 16 }}>CTG Team Structure</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {CTG_TEAM.map((t) => (
              <div key={t.title} style={{ display: 'flex', gap: 14, padding: '12px', background: `${t.color}0a`, borderRadius: 10, border: `1px solid ${t.color}33` }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{t.icon}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: T.white }}>{t.title}</span>
                    <span style={{ fontSize: 11, color: t.color, fontWeight: 700 }}>{t.salary}</span>
                  </div>
                  <p style={{ fontSize: 10, color: T.muted, lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: `1px solid ${T.border}` }}>
              <span style={{ fontSize: 11, color: T.muted }}>CTG Total Salary</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: T.purple }}>৳89,000–৳1,05,000/mo</span>
            </div>
          </div>
        </Card>

        {/* Monthly burn + travel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Card style={{ padding: '18px 20px' }}>
            <p style={{ fontSize: 10, color: T.red, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 12 }}>CTG Monthly Burn (at launch)</p>
            {CTG_BURN.map((b, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `1px solid ${T.border}33` }}>
                <span style={{ fontSize: 10, color: T.muted }}>{b.item}</span>
                <span style={{ fontSize: 10, color: T.white, fontWeight: 600 }}>{b.cost}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: `1px solid ${T.border}` }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: T.white }}>CTG Total Burn</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: T.red }}>৳3,10,000–৳3,56,000/mo</span>
            </div>
            <div style={{ marginTop: 12, padding: '10px 12px', background: `${T.green}0f`, borderRadius: 8, border: `1px solid ${T.green}33` }}>
              <p style={{ fontSize: 10, color: T.green, fontWeight: 700 }}>Funded By:</p>
              <p style={{ fontSize: 10, color: T.muted, lineHeight: 1.6, marginTop: 4 }}>৳20 Lac raise covers full 5-month Dhaka ramp with a minimum ৳16 Lac cash floor maintained at all times. Break-even reached Month 5 — investment is self-liquidating within the raise period. Optional: ৳25 Lac ask with extra ৳5 Lac held as contingency reserve, deployed only if Month 1 turf onboarding misses target.</p>
            </div>
          </Card>

          <Card style={{ padding: '18px 20px' }}>
            <p style={{ fontSize: 10, color: T.cyan, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 12 }}>✈️ Travel Budget (Monthly)</p>
            {TRAVEL.map((t, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: `1px solid ${T.border}33` }}>
                <span style={{ fontSize: 10, color: T.muted }}>{t.item}</span>
                <span style={{ fontSize: 10, color: T.white, fontWeight: 600 }}>{t.cost}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 8, borderTop: `1px solid ${T.border}` }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: T.white }}>Monthly Total</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: T.cyan }}>৳66,000</span>
            </div>
            <p style={{ fontSize: 9, color: T.muted, lineHeight: 1.6, marginTop: 10, fontStyle: 'italic' }}>
              "We don't send reports. We invite investors to match day."
            </p>
          </Card>
        </div>
      </div>

      {/* CTG Revenue ramp chart */}
      <Card style={{ padding: '20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <p style={{ fontSize: 10, color: T.green, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700 }}>CTG Revenue Ramp (6 Months)</p>
          <div style={{ display: 'flex', gap: 16 }}>
            {[{ label: 'Ramp-up', color: T.blue }, { label: 'Break-even+', color: T.green }].map(l => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
                <span style={{ fontSize: 10, color: T.muted }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
        <CTGChart />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 8, marginTop: 14 }}>
          {CTG_REVENUE.map((r, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '8px 6px', background: i >= 3 ? `${T.green}0f` : `${T.blue}0f`, borderRadius: 8, border: `1px solid ${i >= 3 ? T.green : T.blue}33` }}>
              <p style={{ fontSize: 9, color: T.muted }}>{r.month} · {r.turfs}T</p>
              <p style={{ fontSize: 11, fontWeight: 700, color: i >= 3 ? T.green : T.blue }}>৳{(r.rev / 100000).toFixed(2)}L</p>
              <p style={{ fontSize: 9, color: T.muted }}>{r.bkg} bkg/d</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: '12px 16px', background: `${T.green}11`, borderRadius: 8, border: `1px solid ${T.green}44`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: T.muted }}>CTG Break-even: <strong style={{ color: T.white }}>Month 4</strong></span>
          <span style={{ fontSize: 13, fontWeight: 800, color: T.green }}>Combined Dhaka + CTG by M6: ৳30+ Lac/month</span>
        </div>
      </Card>
    </section>
  );
}

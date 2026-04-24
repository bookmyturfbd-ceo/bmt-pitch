import { useState } from 'react';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Operational Revenue Scenarios ─────────────────────── */
const OPS_SCENARIOS = [
  {
    id: 0,
    label: '📊 Conservative Base',
    badge: '85 Turfs',
    icon: '📊',
    supply: 'Dhaka (40+) + CTG (45 of 100+)',
    volume: '2 Bookings / Day / Turf',
    annualRevenueCr: 1.85,
    annualRevenueLabel: '1.85 Crore BDT',
    formula: '300 BDT × 2 bkg × 85 turfs × 365 = ৳1.85 Cr',
    cardBg: 'rgba(68,214,44,0.06)',
    cardBorder: 'rgba(68,214,44,0.25)',
    revenueColor: '#44D62C',
  },
  {
    id: 1,
    label: '⚡ Likely Scenario',
    badge: '110+ Turfs',
    icon: '⚡',
    supply: 'Aggressive expansion across Dhaka & CTG',
    volume: '2.5 Bookings / Day / Turf',
    annualRevenueCr: 3.00,
    annualRevenueLabel: '3.00 Crore BDT',
    formula: '300 BDT × 2.5 bkg × 110 turfs × 365 = ৳3.00 Cr',
    cardBg: 'rgba(0,191,255,0.06)',
    cardBorder: 'rgba(0,191,255,0.25)',
    revenueColor: '#00BFFF',
  },
  {
    id: 2,
    label: '🚀 Best Case',
    badge: '130+ Turfs',
    icon: '🚀',
    supply: 'Market Monopoly',
    volume: '3.5 Bookings / Day / Turf',
    annualRevenueCr: 5.25,
    annualRevenueLabel: '5.25 Crore BDT',
    formula: '300 BDT × 3.5 bkg × 115 turfs × 365 = ৳5.25 Cr',
    cardBg: 'rgba(255,107,53,0.06)',
    cardBorder: 'rgba(255,107,53,0.25)',
    revenueColor: '#FF6B35',
  },
];

/* ─── Design tokens ─────────────────────────────────────── */
const G = 'var(--accent)';        // #44D62C
const DARK = 'var(--ash-mid)';
const BORDER = 'var(--border)';

/* ─── Scenario data ─────────────────────────────────────── */
const SCENARIOS = [
  {
    id: 0, label: 'Standard Seed', tag: 'S1',
    theme: 'STABILITY · STANDARD GTM', color: '#44D62C',
    deal: '20 Lac BDT → 20% Equity',
    equity: { investor: 20, founders: 80 },
    founderEach: '26.6%', yieldEquityPct: 20,
    exitValueCr: 2,
    kpis: [
      { label: 'Investment',           value: '20 Lac BDT' },
      { label: 'Equity Offered',       value: '20%' },
      { label: 'Pre-Money Valuation',  value: '80 Lac BDT' },
      { label: 'Post-Money Valuation', value: '1 Crore BDT' },
      { label: 'Exit Value @ 10 Cr',  value: '2 Crore BDT' },
      { label: 'ROI',                  value: '900%', highlight: true },
    ],
    roiNote: '* ROI assumes ৳10 Cr exit. See scenario analysis below for conservative projections.',
    growth: [
      { phase: 'Now',        investment: 20, shareValue: 20  },
      { phase: 'Post-Dhaka', investment: 20, shareValue: 100 },
      { phase: 'Post-CTG',   investment: 20, shareValue: 200 },
    ],
    math: [
      {
        title: 'IMPLIED PRE-MONEY VALUATION',
        lines: [
          { plain: 'V_pre = Investment ÷ Equity% − Investment' },
          { plain: 'V_pre = 20L ÷ 20% − 20L = 80 Lac BDT', result: true },
        ],
      },
      {
        title: 'PROJECTED EXIT VALUE @ 10 CR',
        lines: [
          { plain: 'Exit Value = Exit Valuation × Equity%' },
          { plain: 'Exit Value = 10 Cr × 20% = 2 Crore BDT', result: true },
        ],
      },
      {
        title: 'RETURN ON INVESTMENT',
        lines: [
          { plain: 'ROI = (Exit Value − Investment) ÷ Investment × 100' },
          { plain: 'ROI = (2 Cr − 20L) ÷ 20L × 100 = 900%', result: true },
        ],
      },
      {
        title: 'ROI ACROSS SCENARIOS',
        lines: [
          { plain: 'Conservative Base  →  1.85 Cr × 20% = 37 Lac/yr  |  Exit: ~1–2 Cr' },
          { plain: 'Likely Scenario    →  3.0 Cr × 20% = 60 Lac/yr   |  Exit: ~2–4 Cr' },
          { plain: 'Best Case          →  5.25 Cr × 20% = 1.05 Cr/yr |  Exit: ~4–10 Cr', result: true },
        ],
      },
    ],
    note: 'Founders retain 80% (26.6% each) — staying highly motivated and Series A ready. This is the cleanest, most fundable cap table.',
  },
  {
    id: 1, label: 'Tranche / Discount', tag: 'S2',
    theme: 'GROWTH STEP-UPS · STAGGERED RISK', color: '#00BFFF',
    deal: 'Total 30% Equity | 2 Cash Injections',
    equity: { investor: 30, founders: 70 },
    founderEach: '23.3%', yieldEquityPct: 30,
    exitValueCr: 3,
    kpis: [
      { label: 'Tranche 1 (Now)',      value: '20 Lac BDT' },
      { label: 'Tranche 2 (CTG milestone)', value: '40 Lac BDT', sub: 'Triggers when: Dhaka net > ৳5 Lac/month × 2 months' },
      { label: 'Total Investment',     value: '60 Lac BDT' },
      { label: 'Equity Offered',       value: '30%' },
      { label: 'Exit Value @ 10 Cr',  value: '3 Crore BDT' },
      { label: 'Net Profit',           value: '2.4 Crore BDT', highlight: true },
    ],
    growth: [
      { phase: 'Now',        investment: 20, shareValue: 20  },
      { phase: 'Post-Dhaka', investment: 60, shareValue: 150 },
      { phase: 'Post-CTG',   investment: 60, shareValue: 300 },
    ],
    math: [
      {
        title: 'PROJECTED EXIT VALUE @ 10 CR',
        lines: [
          { plain: 'Exit Value = Exit Valuation × Equity%' },
          { plain: 'Exit Value = 10 Cr × 30% = 3 Crore BDT', result: true },
        ],
      },
      {
        title: 'NET PROFIT',
        lines: [
          { plain: 'Profit_net = Exit Value − Total Investment' },
          { plain: 'Profit_net = 3 Cr − (20L + 40L) = 2.4 Crore BDT', result: true },
        ],
      },
      {
        title: 'TRANCHE 2 — MILESTONE GATE',
        lines: [
          { plain: 'Tranche 2 (40 Lac) deploys only if Dhaka hits' },
          { plain: '৳5 Lac/month net for 2 consecutive months (~Month 5–6).' },
          { plain: 'If milestone not hit, investor not obligated to release T2.' },
          { plain: 'This protects both parties.', result: true },
        ],
      },
    ],
    note: 'Staggered risk for the investor, guaranteed expansion capital for BMT. Tranche 2 locks in a discount: 40 Lac for 10% on a projected 4 Cr valuation.',
  },
  {
    id: 2, label: '40% Underwriter', tag: 'S3',
    theme: 'HIGH COMMITMENT · FULL CO-FOUNDER RIGHTS', color: '#FF6B35',
    deal: '20 Lac BDT → 40% + Phase 2 Obligation',
    equity: { investor: 40, founders: 60 },
    founderEach: '20%', yieldEquityPct: 40,
    exitValueCr: 4,
    kpis: [
      { label: 'Investment Now',       value: '20 Lac BDT' },
      { label: 'CTG Underwrite',       value: '40 Lac BDT' },
      { label: 'Effective Total',      value: '60 Lac BDT' },
      { label: 'Equity Offered',       value: '40%' },
      { label: 'Exit Value @ 10 Cr',  value: '4 Crore BDT' },
      { label: 'Net Profit',           value: '3.4 Crore BDT', highlight: true },
    ],
    growth: [
      { phase: 'Now',        investment: 20, shareValue: 20  },
      { phase: 'Post-Dhaka', investment: 60, shareValue: 200 },
      { phase: 'Post-CTG',   investment: 60, shareValue: 400 },
    ],
    math: [
      {
        title: 'EFFECTIVE TOTAL INVESTMENT',
        lines: [
          { plain: 'I_eff = I_now + I_ctg' },
          { plain: 'I_eff = 20L + 40L = 60 Lac BDT', result: true },
        ],
      },
      {
        title: 'PROJECTED EXIT VALUE @ 10 CR',
        lines: [
          { plain: 'Exit Value = Exit Valuation × Equity%' },
          { plain: 'Exit Value = 10 Cr × 40% = 4 Crore BDT', result: true },
        ],
      },
      {
        title: 'NET PROFIT',
        lines: [
          { plain: 'Profit_net = Exit Value − Total Investment' },
          { plain: 'Profit_net = 4 Cr − 60L = 3.4 Crore BDT', result: true },
        ],
      },
      {
        title: 'CO-FOUNDER RIGHTS INCLUDE',
        lines: [
          { plain: '• Board observer seat' },
          { plain: '• Monthly financial reporting' },
          { plain: '• Approval required for equity dilution > 5%' },
          { plain: '• First right of refusal on Series A', result: true },
        ],
      },
    ],
    note: 'If they demand 40% co-founder equity, they fund Phase 2 like co-founders. Claw-back clause: if Phase 2 capital is not delivered, shares revert to 20%.',
  },
  {
    id: 3, label: 'Dilution Sponge', tag: 'S4',
    theme: 'STRATEGIC CONTROL · ANTI-DILUTION SHIELD', color: '#BF5FFF',
    deal: '30 Lac BDT → 40% + Anti-Dilution Shield',
    equity: { investor: 40, founders: 60 },
    founderEach: '20%', yieldEquityPct: 25,
    exitValueCr: 2.5,
    kpis: [
      { label: 'Investment',           value: '30 Lac BDT' },
      { label: 'Starting Equity',      value: '40%' },
      { label: 'Post-Series A Equity', value: '25%' },
      { label: 'Series A Absorbed',    value: '15% (from Investor)' },
      { label: 'Exit Value @ 10 Cr',  value: '2.5 Crore BDT' },
      { label: 'ROI',                  value: '733%', highlight: true },
    ],
    growth: [
      { phase: 'Now',        investment: 30, shareValue: 30  },
      { phase: 'Post-Dhaka', investment: 30, shareValue: 125 },
      { phase: 'Post-CTG',   investment: 30, shareValue: 250 },
    ],
    math: [
      {
        title: 'POST-SERIES A EQUITY STATUS',
        lines: [
          { plain: 'E_investor = E_start − E_new_investor' },
          { plain: 'E_investor = 40% − 15% = 25%', result: true },
        ],
        note: 'The 15% absorbed comes from a NEW share issuance at Series A — not from existing founder shares. Founders retain their 60% stake. Only the investor\'s slice dilutes to accommodate the new round.',
      },
      {
        title: 'PROJECTED EXIT VALUE @ 10 CR',
        lines: [
          { plain: 'Exit Value = Exit Valuation × Post-Dilution Equity%' },
          { plain: 'Exit Value = 10 Cr × 25% = 2.5 Crore BDT', result: true },
        ],
      },
      {
        title: 'RETURN ON INVESTMENT',
        lines: [
          { plain: 'ROI = (Exit Value − Investment) ÷ Investment × 100' },
          { plain: 'ROI = (2.5 Cr − 30L) ÷ 30L × 100 = 733%', result: true },
        ],
      },
      {
        title: 'ANTI-DILUTION SHIELD',
        lines: [
          { plain: 'Standard seed investors get wiped to 8–12% by Series B.' },
          { plain: 'This structure guarantees you hold minimum 25% through' },
          { plain: 'Series A — protecting your exit value floor at 2.5 Crore' },
          { plain: 'even if the company raises aggressively.', result: true },
        ],
      },
    ],
    note: 'Founders start AND end at 60% equity pre-Series A. When BMT raises 1 Cr Series A (~15% equity), all dilution comes from this investor\'s stake — keeping the operations team fully motivated.',
  },
];

/* ─── Plain-text math renderer ──────────────────────────── */
function MathLine({ plain, result }) {
  return (
    <div style={{
      fontFamily: 'monospace',
      fontSize: '13px',
      lineHeight: 1.85,
      color: result ? 'var(--white)' : 'var(--white-muted)',
      fontWeight: result ? 700 : 400,
      letterSpacing: '0.02em',
    }}>
      {plain}
    </div>
  );
}

/* ─── Custom Pie Label ───────────────────────────────────── */
const RADIAN = Math.PI / 180;
function PieLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) {
  const r = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central"
      style={{ fontSize: '11px', fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

/* ─── Format Crore value → Lac string ───────────────────── */
function crToLacStr(cr) {
  const lac = cr * 100;
  if (lac >= 100) return `${cr.toFixed(2)} Crore BDT`;
  return `${lac.toFixed(0)} Lac BDT`;
}

/* ─── Operational Revenue Section ───────────────────────── */
function OperationalRevenueSection({ tabColor, equityPct }) {
  const [activeOp, setActiveOp] = useState(0);
  const op = OPS_SCENARIOS[activeOp];
  const yieldCr = (op.annualRevenueCr * equityPct) / 100;
  const yieldLabel = crToLacStr(yieldCr);

  return (
    <div className="glass-panel" style={{
      padding: '20px', border: `1px solid ${tabColor}33`,
      marginTop: '4px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at top left, ${tabColor}08 0%, transparent 65%)` }} />

      {/* Heading */}
      <div style={{ marginBottom: '14px' }}>
        <p style={{ fontSize: '10px', color: tabColor, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
          OPERATIONAL REVENUE &amp; INVESTOR YIELD &nbsp;·&nbsp; Year 2 Run Rate (Dhaka + CTG)
        </p>
        <p style={{ fontSize: '11px', color: 'var(--white-muted)', marginTop: '3px' }}>
          Avg Booking: <strong style={{ color: 'var(--white)' }}>3,000 BDT</strong>
          &nbsp;·&nbsp; BMT Cut: <strong style={{ color: 'var(--accent)' }}>10%</strong>
          &nbsp;·&nbsp; Net/Match: <strong style={{ color: 'var(--white)' }}>300 BDT</strong>
        </p>
      </div>

      {/* Scenario buttons — large, above cards */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
        {OPS_SCENARIOS.map((sc) => (
          <button key={sc.id} onClick={() => setActiveOp(sc.id)} style={{
            flex: 1, minHeight: '40px', padding: '8px 14px',
            borderRadius: '8px', border: `1px solid ${sc.revenueColor}55`,
            cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
            fontSize: '11px', fontWeight: 700, transition: 'all 0.2s ease',
            background: activeOp === sc.id ? sc.revenueColor : 'rgba(0,0,0,0.35)',
            color: activeOp === sc.id ? '#000' : 'var(--white-muted)',
            boxShadow: activeOp === sc.id ? `0 0 16px ${sc.revenueColor}55` : 'none',
          }}>
            {sc.label}
          </button>
        ))}
      </div>

      {/* Scenario comparison table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', marginBottom: '14px', border: `1px solid ${tabColor}33`, borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ background: `${tabColor}15`, borderBottom: `1px solid ${tabColor}33` }}>
            {['Scenario', 'Turfs', 'Bkg/Day', 'Annual Revenue', `Your Yield (${equityPct}%)`].map((h) => (
              <th key={h} style={{ padding: '7px 10px', textAlign: 'left', fontSize: '9px', color: tabColor, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {OPS_SCENARIOS.map((sc, i) => {
            const y = crToLacStr((sc.annualRevenueCr * equityPct) / 100);
            const isActive = i === activeOp;
            return (
              <tr key={i} onClick={() => setActiveOp(i)} style={{
                background: isActive ? `${sc.revenueColor}18` : (i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent'),
                borderBottom: `1px solid ${tabColor}22`, cursor: 'pointer', transition: 'background 0.15s',
              }}>
                <td style={{ padding: '7px 10px', color: isActive ? sc.revenueColor : 'var(--white)', fontWeight: isActive ? 700 : 400 }}>{sc.label}</td>
                <td style={{ padding: '7px 10px', color: 'var(--white-muted)' }}>{sc.badge}</td>
                <td style={{ padding: '7px 10px', color: 'var(--white-muted)' }}>{sc.volume.split(' ')[0]}</td>
                <td style={{ padding: '7px 10px', color: isActive ? sc.revenueColor : 'var(--white)', fontWeight: 700 }}>{sc.annualRevenueLabel}</td>
                <td style={{ padding: '7px 10px', color: isActive ? tabColor : 'var(--white)', fontWeight: 700 }}>{y}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Active scenario cards */}
      <AnimatePresence mode="wait">
        <motion.div key={activeOp}
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18, ease: 'easeOut' }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px', alignItems: 'stretch' }}
        >
          <div style={{ background: op.cardBg, border: `1px solid ${op.cardBorder}`, borderRadius: '10px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <p style={{ fontSize: '10px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Coverage</p>
            <p style={{ fontSize: '18px', fontWeight: 800, color: op.revenueColor, textShadow: `0 0 16px ${op.revenueColor}66` }}>{op.badge}</p>
            <p style={{ fontSize: '10px', color: 'var(--white-muted)', lineHeight: 1.5 }}>{op.supply}</p>
          </div>
          <div style={{ background: op.cardBg, border: `1px solid ${op.cardBorder}`, borderRadius: '10px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <p style={{ fontSize: '10px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Daily Volume</p>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--white)', lineHeight: 1.4 }}>{op.volume}</p>
            <p style={{ fontSize: '9px', color: op.revenueColor, fontFamily: 'monospace', lineHeight: 1.5 }}>{op.formula}</p>
          </div>
          <div style={{ background: op.cardBg, border: `2px solid ${op.revenueColor}55`, borderRadius: '10px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <p style={{ fontSize: '10px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>BMT Annual Net Revenue</p>
            <p style={{ fontSize: '17px', fontWeight: 900, color: op.revenueColor, textShadow: `0 0 20px ${op.revenueColor}88`, letterSpacing: '-0.01em' }}>{op.annualRevenueLabel}</p>
            <p style={{ fontSize: '10px', color: 'var(--white-muted)' }}>Net 300 BDT × Bookings × 365</p>
          </div>
          <div style={{ background: `${tabColor}10`, border: `2px solid ${tabColor}77`, borderRadius: '10px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '6px', boxShadow: `0 0 18px ${tabColor}22` }}>
            <p style={{ fontSize: '10px', color: tabColor, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Your Annual Yield</p>
            <p style={{ fontSize: '17px', fontWeight: 900, color: tabColor, textShadow: `0 0 20px ${tabColor}99`, letterSpacing: '-0.01em' }}>{yieldLabel}</p>
            <p style={{ fontSize: '10px', color: 'var(--white-muted)' }}>{equityPct}% of {op.annualRevenueLabel}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <p style={{ marginTop: '12px', fontSize: '9.5px', color: 'var(--white-muted)', lineHeight: 1.6, borderTop: '1px solid var(--border)', paddingTop: '10px', fontStyle: 'italic' }}>
        <strong style={{ color: tabColor }}>Note:</strong> Investor Yield represents theoretical cash flow entitlement. Early-stage profits are aggressively reinvested into company growth to achieve the 10 Crore exit valuation.
      </p>
    </div>
  );
}


/* ─── Single scenario panel ─────────────────────────────── */
function ScenarioPanel({ s }) {
  const pieData = [
    { name: 'Investor', value: s.equity.investor },
    { name: `Founders (${s.founderEach} each)`, value: s.equity.founders },
  ];
  const PIE_COLORS = [s.color, '#1a1a1a'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', overflowY: 'auto' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          padding: '4px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700,
          background: `${s.color}22`, border: `1px solid ${s.color}55`, color: s.color,
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>{s.tag}</div>
        <div>
          <p style={{ fontSize: '11px', color: 'var(--white-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.theme}</p>
          <p style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 600, marginTop: '2px' }}>{s.deal}</p>
        </div>
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '14px' }}>

        {/* Pie chart */}
        <div className="glass-panel" style={{ padding: '16px' }}>
          <p style={{ fontSize: '10px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Equity Split</p>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={68} dataKey="value"
                labelLine={false} label={PieLabel}>
                {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} stroke="transparent" />)}
              </Pie>
              <Tooltip
                contentStyle={{ background: '#111', border: '1px solid #252525', borderRadius: '8px', fontSize: '12px' }}
                formatter={(v, n) => [`${v}%`, n]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '6px' }}>
            {pieData.map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: PIE_COLORS[i] }} />
                <span style={{ fontSize: '10px', color: 'var(--white-muted)' }}>{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Growth line chart */}
        <div className="glass-panel" style={{ padding: '16px' }}>
          <p style={{ fontSize: '10px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Investment vs Share Value (Lac BDT)</p>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={s.growth} margin={{ top: 4, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#252525" />
              <XAxis dataKey="phase" tick={{ fill: '#7A7A7A', fontSize: 10 }} />
              <YAxis tick={{ fill: '#7A7A7A', fontSize: 10 }} />
              <Tooltip
                contentStyle={{ background: '#111', border: '1px solid #252525', borderRadius: '8px', fontSize: '11px' }}
                formatter={(v) => [`${v} Lac`, '']}
              />
              <Legend wrapperStyle={{ fontSize: '10px', color: '#7A7A7A' }} />
              <Line type="monotone" dataKey="investment" name="Capital In" stroke="#7A7A7A"
                strokeWidth={2} dot={{ fill: '#7A7A7A', r: 3 }} strokeDasharray="4 4" />
              <Line type="monotone" dataKey="shareValue" name="Share Value" stroke={s.color}
                strokeWidth={2.5} dot={{ fill: s.color, r: 4 }}
                activeDot={{ r: 6, stroke: s.color, strokeWidth: 2, fill: '#000' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* KPIs + Math row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '14px' }}>

        {/* KPI card */}
        <div className="glass-panel" style={{ padding: '18px 20px' }}>
          <p style={{ fontSize: '10px', color: 'var(--white-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Deal Summary</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {s.kpis.map((k, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < s.kpis.length - 1 ? '1px solid #1c1c1c' : 'none', paddingBottom: '7px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--white-muted)' }}>{k.label}</span>
                  <span style={{
                    fontSize: k.highlight ? '20px' : '12px',
                    fontWeight: k.highlight ? 900 : 600,
                    color: k.highlight ? s.color : 'var(--white)',
                    textShadow: k.highlight ? `0 0 16px ${s.color}88` : 'none',
                    background: k.highlight ? `${s.color}15` : 'none',
                    padding: k.highlight ? '2px 10px' : '0',
                    borderRadius: k.highlight ? '6px' : '0',
                  }}>{k.value}</span>
                </div>
                {k.sub && <p style={{ fontSize: '9px', color: 'var(--white-muted)', fontStyle: 'italic', marginTop: '2px', paddingBottom: '4px' }}>{k.sub}</p>}
              </div>
            ))}
          </div>
          {s.roiNote && <p style={{ fontSize: '9px', color: 'var(--white-muted)', marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #1c1c1c', fontStyle: 'italic' }}>{s.roiNote}</p>}
        </div>

        {/* Math boxes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {s.math.map((block, bi) => (
            <div key={bi} className="glass-panel" style={{ padding: '14px 18px', borderLeft: `3px solid ${s.color}` }}>
              <p style={{ fontSize: '10px', color: s.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontWeight: 700 }}>{block.title}</p>
              {block.lines.map((line, li) => <MathLine key={li} {...line} />)}
              {block.note && <p style={{ fontSize: '10px', color: 'var(--white-muted)', marginTop: '8px', paddingTop: '6px', borderTop: '1px solid #1c1c1c', lineHeight: 1.6 }}>{block.note}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Operational Revenue & Investor Yield */}
      <OperationalRevenueSection tabColor={s.color} equityPct={s.yieldEquityPct} />

      {/* Strategic note */}
      <div className="glass-panel-accent" style={{ padding: '14px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: s.color }} />
        <p style={{ fontSize: '10px', color: s.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', fontWeight: 700 }}>Strategic Logic</p>
        <p style={{ fontSize: '13px', color: 'var(--white)', lineHeight: 1.65 }}>{s.note}</p>
      </div>
    </div>
  );
}

/* ─── Main slide ─────────────────────────────────────────── */
export default function InvestmentPlanningSlide() {
  const [active, setActive] = useState(0);
  const s = SCENARIOS[active];

  return (
    <div className="slide-shell noise">
      <div className="watermark" style={{ color: 'rgba(68,214,44,0.01)' }}>INVEST</div>
      <div className="ambient-glow" style={{ width: '500px', height: '500px', background: `${s.color}0A`, top: '-5%', right: '-5%', transition: 'background 0.4s' }} />

      <div className="slide-inner" style={{ gap: '18px', paddingBottom: '32px' }}>

        {/* Slide header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <span className="slide-label">Investor Intelligence</span>
            <h2 className="slide-title">Investment <span style={{ color: 'var(--accent)' }}>Planning.</span></h2>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--white-muted)', textAlign: 'right', lineHeight: 1.5 }}>
            <span>Exit Target: </span>
            <strong style={{ color: 'var(--accent)' }}>10 Crore BDT</strong>
            <br />
            <span>Founders: </span>
            <strong style={{ color: 'var(--white)' }}>3 Co-Founders</strong>
          </div>
        </div>

        {/* Sub-tab strip */}
        <div style={{ display: 'flex', gap: '8px', background: 'rgba(10,10,10,0.6)', padding: '6px', borderRadius: '12px', border: '1px solid var(--border)' }}>
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setActive(sc.id)}
              style={{
                flex: 1,
                padding: '9px 6px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '11px',
                fontWeight: active === sc.id ? 700 : 400,
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                background: active === sc.id ? `${sc.color}22` : 'transparent',
                color: active === sc.id ? sc.color : 'var(--white-muted)',
                borderBottom: active === sc.id ? `2px solid ${sc.color}` : '2px solid transparent',
              }}
            >
              <span style={{ marginRight: '5px', opacity: 0.8 }}>{sc.tag}</span>
              {sc.label}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ flex: 1 }}
          >
            <ScenarioPanel s={s} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

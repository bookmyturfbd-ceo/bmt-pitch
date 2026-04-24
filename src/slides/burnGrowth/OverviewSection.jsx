import { T, Card, SectionTitle, Badge } from './tokens.jsx';

const KPIS = [
  { label: 'Avg Booking Value',    value: '৳3,000',  color: T.green,  icon: '💳' },
  { label: 'BMT Commission',       value: '10% = ৳300', color: T.cyan, icon: '✂️' },
  { label: 'Target Dhaka Turfs',   value: '40–50',   color: T.blue,   icon: '🏙️' },
  { label: 'Target CTG Turfs',     value: '100+',    color: T.amber,  icon: '🌆' },
];

const COMPARE = [
  { metric: 'Steps to first booking', app: '4',      bmt: '2',        highlight: true },
  { metric: 'Install barrier',        app: 'Yes',    bmt: 'No',       highlight: false },
  { metric: 'Conversion rate',        app: '8–12%',  bmt: '18–25%',   highlight: true },
  { metric: 'App Store dependency',   app: 'Yes',    bmt: 'No',       highlight: false },
  { metric: 'Ad campaign type',       app: 'App Install', bmt: 'Web Conversion', highlight: false },
];

export default function OverviewSection() {
  return (
    <section id="overview" style={{ padding: '40px 0 32px' }}>
      <SectionTitle
        label="Section 1 · Foundation"
        title="The BMT Growth Engine"
        accent={T.green}
        sub="Every number that matters — before we spend a single taka."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 20 }}>
        {/* Left: KPI 2x2 grid */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 0 }}>
            {KPIS.map((k) => (
              <Card key={k.label} accent={k.color}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{k.icon}</div>
                <p style={{ fontSize: 9, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>{k.label}</p>
                <p style={{ fontSize: 22, fontWeight: 800, color: k.color, textShadow: `0 0 20px ${k.color}55` }}>{k.value}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Right: Webapp callout */}
        <Card accent={T.green} style={{ padding: '22px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <Badge text="Webapp First" color={T.green} />
            <p style={{ fontSize: 13, fontWeight: 700, color: T.white }}>Webapp = Zero Friction Conversion</p>
          </div>
          <p style={{ fontSize: 12, color: T.muted, lineHeight: 1.7, marginBottom: 16 }}>
            Unlike native apps, our webapp requires <strong style={{ color: T.white }}>no download, no App Store approval, no install.</strong> A user clicks our ad, lands on <strong style={{ color: T.green }}>bookMyTurf.com</strong>, registers and books in under 3 minutes. This gives us <strong style={{ color: T.white }}>2–3× higher conversion rates</strong> vs app-install campaigns, and lower Cost Per Acquisition from day one. When our native app launches, all existing webapp users migrate instantly — their accounts are already there.
          </p>

          {/* Comparison table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                {['', 'Native App', 'BMT Webapp'].map((h, i) => (
                  <th key={i} style={{
                    padding: '6px 8px', textAlign: i === 0 ? 'left' : 'center',
                    color: i === 2 ? T.green : T.muted, fontWeight: i === 2 ? 700 : 500,
                    fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((r, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${T.border}33`, background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent' }}>
                  <td style={{ padding: '8px 8px', color: T.muted, fontSize: 11 }}>{r.metric}</td>
                  <td style={{ padding: '8px 8px', textAlign: 'center', color: T.red, fontWeight: 600, fontSize: 11 }}>{r.app}</td>
                  <td style={{ padding: '8px 8px', textAlign: 'center', color: T.green, fontWeight: 700, fontSize: 11 }}>{r.bmt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
}

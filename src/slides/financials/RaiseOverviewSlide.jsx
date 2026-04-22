import { motion } from 'framer-motion';

export default function RaiseOverviewSlide() {
  return (
    <div className="w-full h-full flex flex-col p-12 overflow-y-auto styled-scrollbar">
      <div className="mb-8">
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '32px',
          color: 'var(--white)',
          letterSpacing: '-0.02em',
        }}>Raise Overview</h2>
        <p style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginTop: '4px',
        }}>Capital for Commercialization</p>
      </div>

      <div className="flex gap-6 mb-10">
        {[
          { label: 'Raise Ask', value: 'BDT 20 Lakh' },
          { label: 'Equity Offered', value: '10%' },
          { label: 'Implied Valuation (Post-Money)', value: 'BDT 2 Crore' },
        ].map((kpi, i) => (
          <div key={i} className="flex-1 p-6 rounded-xl border" style={{
            background: 'var(--ash-dark)',
            borderColor: 'var(--border)',
          }}>
            <h3 style={{
              fontSize: '12px',
              color: 'var(--white-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '8px',
            }}>{kpi.label}</h3>
            <p style={{
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--accent)',
            }}>{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 mb-10">
        <div>
          <h3 style={{
            fontSize: '14px',
            color: 'var(--white)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '8px',
          }}>Current Status</h3>
          <ul className="space-y-4">
            {[
              { label: 'Stage', value: 'Launch / Early Commercialization' },
              { label: 'Product Status', value: 'Already Built (Core Platform Live)' },
              { label: 'Launch Market', value: 'Dhaka, Bangladesh' },
              { label: 'Initial Target', value: '40+ Turfs Onboarded' },
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center text-sm">
                <span style={{ color: 'var(--white-muted)' }}>{item.label}</span>
                <span style={{ color: 'var(--white)', fontWeight: 500 }}>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-xl border flex flex-col justify-center relative overflow-hidden" style={{
          background: 'rgba(68, 214, 44, 0.05)',
          borderColor: 'var(--accent-dim)',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: 'var(--accent)',
          }} />
          <h4 style={{
            fontSize: '12px',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '12px',
            fontWeight: 700,
          }}>Strategic Note</h4>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: 'var(--white)',
          }}>
            “This raise is designed to fund commercialization, not product development. Core product risk is already reduced because the platform is built. Capital is being used to acquire supply, acquire users, activate transactions, and validate repeatable unit economics.”
          </p>
        </div>
      </div>
    </div>
  );
}

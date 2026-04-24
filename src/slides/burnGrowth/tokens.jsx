import { useEffect, useRef, useState } from 'react';

// ── Shared design tokens ──────────────────────────────────
export const T = {
  bg:      '#08090f',
  surface: '#0f1117',
  border:  '#1a1d26',
  green:   '#22c55e',
  blue:    '#3b82f6',
  amber:   '#f59e0b',
  red:     '#ef4444',
  purple:  '#a060e8',
  cyan:    '#06b6d4',
  muted:   '#6b7280',
  white:   '#f1f5f9',
};

// Format BDT numbers
export function bdt(n) {
  if (n >= 10000000) return `৳${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000)   return `৳${(n / 100000).toFixed(2)} Lac`;
  if (n >= 1000)     return `৳${(n / 1000).toFixed(0)}k`;
  return `৳${n}`;
}

// Reusable card shell
export function Card({ children, style = {}, accent }) {
  return (
    <div style={{
      background: T.surface,
      border: `1px solid ${accent ? accent + '44' : T.border}`,
      borderRadius: 12,
      padding: '18px 20px',
      boxShadow: accent ? `0 0 20px ${accent}11` : '0 2px 12px rgba(0,0,0,0.4)',
      ...style,
    }}>
      {children}
    </div>
  );
}

// Section title helper
export function SectionTitle({ label, title, accent = T.green, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <p style={{ fontSize: 10, letterSpacing: '0.22em', color: accent, textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{label}</p>
      <h2 style={{ fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 800, color: T.white, lineHeight: 1.1 }}>{title}</h2>
      {sub && <p style={{ fontSize: 13, color: T.muted, marginTop: 8, lineHeight: 1.6 }}>{sub}</p>}
    </div>
  );
}

// Badge pill
export function Badge({ text, color }) {
  return (
    <span style={{
      display: 'inline-block', padding: '2px 10px', borderRadius: 20,
      fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
      background: color + '22', color, border: `1px solid ${color}55`,
      textTransform: 'uppercase',
    }}>{text}</span>
  );
}

// Count-up hook — animates a number from 0 to target on scroll into view
export function useCountUp(target, duration = 800) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { val, ref };
}

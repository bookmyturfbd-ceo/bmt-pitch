import { motion } from 'framer-motion';

const TOTAL = 8;

export default function ProgressBar({ current }) {
  const pct = ((current + 1) / TOTAL) * 100;
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: '220px',
        right: 0,
        height: '3px',
        background: 'var(--ash-light)',
        zIndex: 100,
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--accent-dim), var(--accent))',
          transformOrigin: 'left',
          borderRadius: '0 2px 2px 0',
        }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </div>
  );
}

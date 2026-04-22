import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Sidebar from './components/Sidebar';
import ProgressBar from './components/ProgressBar';

import OverviewSlide from './slides/OverviewSlide';
import ProblemSlide from './slides/ProblemSlide';
import ProductSlide from './slides/ProductSlide';
import MarketSlide from './slides/MarketSlide';
import CompetitionSlide from './slides/CompetitionSlide';
import WhyWeWinSlide from './slides/WhyWeWinSlide';
import BusinessModelSlide from './slides/BusinessModelSlide';
import GTMSlide from './slides/GTMSlide';

import RaiseOverviewSlide from './slides/financials/RaiseOverviewSlide';
import UseOfFundsSlide from './slides/financials/UseOfFundsSlide';
import TeamSalarySlide from './slides/financials/TeamSalarySlide';
import TranchePlanSlide from './slides/financials/TranchePlanSlide';
import RevenueModelSlide from './slides/financials/RevenueModelSlide';
import BreakevenEngineSlide from './slides/financials/BreakevenEngineSlide';
import TournamentEconomicsSlide from './slides/financials/TournamentEconomicsSlide';
import MerchExpansionSlide from './slides/financials/MerchExpansionSlide';
import SourcesSlide from './slides/financials/SourcesSlide';

const SLIDES = [
  OverviewSlide,
  ProblemSlide,
  ProductSlide,
  MarketSlide,
  CompetitionSlide,
  WhyWeWinSlide,
  BusinessModelSlide,
  GTMSlide,
  RaiseOverviewSlide,
  UseOfFundsSlide,
  TeamSalarySlide,
  TranchePlanSlide,
  RevenueModelSlide,
  BreakevenEngineSlide,
  TournamentEconomicsSlide,
  MerchExpansionSlide,
  SourcesSlide,
];

// Slide transition variants — GPU-accelerated, no layout lag
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
};

const TRANSITION = {
  x: { type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.38 },
  opacity: { duration: 0.25, ease: 'easeOut' },
  scale: { duration: 0.38, ease: 'easeOut' },
};

const SIDEBAR_WIDTH = 220;

export default function App() {
  const [[current, direction], setPage] = useState([0, 0]);

  // Shared state for financial models
  const [financialState, setFinancialState] = useState({
    turfs: 40,
    bookingsPerDay: 5,
    slotPrice: 2750,
    takeRate: 10,
  });

  const goTo = useCallback((index) => {
    const dir = index > current ? 1 : -1;
    setPage([index, dir]);
  }, [current]);

  // Keyboard navigation (arrow keys)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setPage(([c]) => c < SLIDES.length - 1 ? [c + 1, 1] : [c, 1]);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setPage(([c]) => c > 0 ? [c - 1, -1] : [c, -1]);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const SlideComponent = SLIDES[current];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        background: 'var(--black)',
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      <Sidebar current={current} onChange={goTo} />

      {/* Main slide area */}
      <div
        style={{
          position: 'absolute',
          left: SIDEBAR_WIDTH,
          right: 0,
          top: 0,
          bottom: 0,
          overflow: 'hidden',
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={TRANSITION}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              willChange: 'transform, opacity',
            }}
          >
            <SlideComponent financialState={financialState} setFinancialState={setFinancialState} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <ProgressBar current={current} />

      {/* Navigation arrows */}
      <div style={{
        position: 'fixed',
        bottom: '16px',
        right: '20px',
        display: 'flex',
        gap: '8px',
        zIndex: 200,
      }}>
        <button
          onClick={() => setPage(([c]) => c > 0 ? [c - 1, -1] : [c, -1])}
          disabled={current === 0}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: current === 0 ? 'var(--ash-mid)' : 'var(--ash-light)',
            border: '1px solid var(--border)',
            color: current === 0 ? 'var(--white-muted)' : 'var(--white)',
            cursor: current === 0 ? 'not-allowed' : 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: current === 0 ? 0.4 : 1,
            transition: 'all 0.2s ease',
          }}
        >
          ←
        </button>
        <button
          onClick={() => setPage(([c]) => c < SLIDES.length - 1 ? [c + 1, 1] : [c, 1])}
          disabled={current === SLIDES.length - 1}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: current === SLIDES.length - 1 ? 'var(--ash-mid)' : 'var(--accent)',
            border: '1px solid var(--accent-dim)',
            color: current === SLIDES.length - 1 ? 'var(--white-muted)' : 'var(--black)',
            cursor: current === SLIDES.length - 1 ? 'not-allowed' : 'pointer',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            opacity: current === SLIDES.length - 1 ? 0.4 : 1,
            transition: 'all 0.2s ease',
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}

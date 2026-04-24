import { useState, useRef, useEffect } from 'react';
import { T } from './burnGrowth/tokens.jsx';
import OverviewSection from './burnGrowth/OverviewSection.jsx';
import AdStrategySection from './burnGrowth/AdStrategySection.jsx';
import Burn6MSection from './burnGrowth/Burn6MSection.jsx';
import Burn12MSection from './burnGrowth/Burn12MSection.jsx';
import CTGSection from './burnGrowth/CTGSection.jsx';
import SummarySection from './burnGrowth/SummarySection.jsx';

const NAV_LINKS = [
  { id: 'overview',   label: 'Overview' },
  { id: 'adstrategy', label: 'Ad Strategy' },
  { id: 'burn6m',     label: 'Burn: 6M' },
  { id: 'burn12m',    label: 'Burn: 12M' },
  { id: 'ctg',        label: 'CTG Expansion' },
  { id: 'summary',    label: 'Summary' },
];

export default function BurnGrowthSlide() {
  const [activeSection, setActiveSection] = useState('overview');
  const scrollRef = useRef(null);

  // Scrollspy — update active nav link as user scrolls
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handler = () => {
      const sections = NAV_LINKS.map(l => document.getElementById(l.id));
      const scrollTop = container.scrollTop + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollTop) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    container.addEventListener('scroll', handler, { passive: true });
    return () => container.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: T.bg,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif",
    }}>
      {/* ── Fixed top nav ─────────────────────────────────────── */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(8,9,15,0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${T.border}`,
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 52,
        flexShrink: 0,
      }}>
        {/* Left: identity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: T.green, letterSpacing: '0.05em' }}>BMT Growth Engine</span>
          <span style={{ width: 1, height: 18, background: T.border }} />
          <span style={{ fontSize: 10, color: '#3b82f6', fontWeight: 600 }}>Phase 1: Dhaka</span>
          <span style={{ fontSize: 10, color: T.muted }}>→</span>
          <span style={{ fontSize: 10, color: T.purple, fontWeight: 600 }}>Phase 2: CTG</span>
        </div>

        {/* Right: section anchors */}
        <div style={{ display: 'flex', gap: 4 }}>
          {NAV_LINKS.map((l) => {
            const active = activeSection === l.id;
            return (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  padding: '5px 12px',
                  borderRadius: 6,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 10,
                  fontWeight: active ? 700 : 400,
                  letterSpacing: '0.04em',
                  transition: 'all 0.18s ease',
                  background: active ? `${T.green}20` : 'transparent',
                  color: active ? T.green : T.muted,
                  borderBottom: active ? `2px solid ${T.green}` : '2px solid transparent',
                  whiteSpace: 'nowrap',
                }}
              >
                {l.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Scrollable content ─────────────────────────────────── */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0 48px',
          scrollbarWidth: 'thin',
          scrollbarColor: `${T.border} transparent`,
        }}
      >
        {/* Ambient background glows */}
        <div style={{ position: 'fixed', top: '20%', right: '5%', width: 400, height: 400, background: `${T.green}06`, borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'fixed', bottom: '20%', left: '10%', width: 300, height: 300, background: `${T.blue}06`, borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto' }}>
          <OverviewSection />
          <Divider />
          <AdStrategySection />
          <Divider />
          <Burn6MSection />
          <Divider />
          <Burn12MSection />
          <Divider />
          <CTGSection />
          <Divider />
          <SummarySection />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 0' }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${T.border}, transparent)` }} />
    </div>
  );
}

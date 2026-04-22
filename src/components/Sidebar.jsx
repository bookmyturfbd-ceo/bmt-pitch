import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 0, label: 'Overview',           icon: '◈' },
  { id: 1, label: 'The Problem',        icon: '⚡' },
  { id: 2, label: 'The Product',        icon: '▣' },
  { id: 3, label: 'The Market',         icon: '◉' },
  { id: 4, label: 'Competition',        icon: '⊕' },
  { id: 5, label: 'Why We Win',         icon: '🏆' },
  { id: 6, label: 'Business Model',     icon: '💼' },
  { id: 7, label: 'GTM Strategy',       icon: '🚀' },
  {
    id: 'financials',
    label: 'Raise & Financials',
    icon: '📊',
    isDropdown: true,
    children: [
      { id: 8, label: 'Raise Overview', icon: '🎯' },
      { id: 9, label: 'Use of Funds', icon: '💰' },
      { id: 10, label: 'Team & Salary Plan', icon: '👥' },
      { id: 11, label: 'Tranche Plan', icon: '📈' },
      { id: 12, label: 'Revenue Model', icon: '⚙️' },
      { id: 13, label: 'Breakeven Engine', icon: '⏱️' },
      { id: 14, label: 'Tournament Economics', icon: '⚽' },
      { id: 15, label: 'Merch Expansion', icon: '👕' },
      { id: 16, label: 'Sources', icon: '📑' },
    ]
  }
];

export default function Sidebar({ current, onChange }) {
  const [financialsOpen, setFinancialsOpen] = useState(false);

  // Auto-expand financials if we are within those slides
  useEffect(() => {
    if (current >= 8 && current <= 16) {
      setFinancialsOpen(true);
    }
  }, [current]);

  const totalSlides = NAV_ITEMS.reduce((acc, item) => {
    if (item.isDropdown) return acc + item.children.length;
    return acc + 1;
  }, 0);

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed left-0 top-0 h-full z-50 flex flex-col"
      style={{
        width: '220px',
        background: 'rgba(10,10,10,0.97)',
        borderRight: '1px solid var(--border)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Logo area */}
      <div className="flex items-center justify-center py-6 px-4" style={{ borderBottom: '1px solid var(--border)' }}>
        <img
          src="/logo.png"
          alt="BMT Logo"
          style={{ height: '36px', objectFit: 'contain' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div style={{
          display: 'none',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 800,
            fontSize: '15px',
            color: 'var(--accent)',
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}>BMT</span>
          <span style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '9px',
            color: 'var(--white-muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginTop: '2px',
          }}>Book My Turf</span>
        </div>
      </div>

      {/* Slide number indicator */}
      <div className="px-4 pt-5 pb-2">
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: 'var(--white-muted)',
          textTransform: 'uppercase',
        }}>
          Slide {current + 1} / {totalSlides}
        </span>
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto px-3 pb-4 styled-scrollbar">
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            if (item.isDropdown) {
              const isChildActive = current >= 8 && current <= 16;
              return (
                <div key={item.id} className="flex flex-col">
                  <button
                    onClick={() => setFinancialsOpen(!financialsOpen)}
                    className="sidebar-item w-full flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left relative"
                    style={{
                      background: 'transparent',
                      cursor: 'pointer',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span style={{
                        fontSize: '14px',
                        color: isChildActive ? 'var(--accent)' : 'var(--ash-light)',
                        filter: isChildActive ? 'none' : 'brightness(2)',
                        minWidth: '16px',
                        textAlign: 'center',
                      }}>
                        {item.icon}
                      </span>
                      <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: isChildActive ? 'var(--accent)' : 'var(--white-muted)',
                        letterSpacing: '0.01em',
                        whiteSpace: 'nowrap',
                      }}>
                        {item.label}
                      </span>
                    </div>
                    <span style={{
                      color: 'var(--white-muted)',
                      fontSize: '10px',
                      transform: financialsOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s',
                    }}>
                      ▼
                    </span>
                  </button>

                  <AnimatePresence>
                    {financialsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-0.5 overflow-hidden ml-6 pl-2 py-1"
                        style={{ borderLeft: '1px solid var(--border)' }}
                      >
                        {item.children.map(child => {
                          const isActive = child.id === current;
                          return (
                            <button
                              key={child.id}
                              onClick={() => onChange(child.id)}
                              className="sidebar-item w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left relative"
                              style={{
                                background: isActive ? 'rgba(68,214,44,0.1)' : 'transparent',
                                cursor: 'pointer',
                                border: 'none',
                                outline: 'none',
                              }}
                            >
                              {isActive && (
                                <motion.div
                                  layoutId="activeChildBar"
                                  style={{
                                    position: 'absolute',
                                    left: '-3px',
                                    top: '20%',
                                    height: '60%',
                                    width: '2px',
                                    background: 'var(--accent)',
                                  }}
                                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                              )}
                              <span style={{
                                fontSize: '11px',
                                color: isActive ? 'var(--white)' : 'var(--ash-light)',
                                filter: isActive ? 'none' : 'brightness(2)',
                                minWidth: '12px',
                                textAlign: 'center',
                              }}>
                                {child.icon}
                              </span>
                              <span style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '11px',
                                fontWeight: isActive ? 600 : 400,
                                color: isActive ? 'var(--white)' : 'var(--white-muted)',
                                letterSpacing: '0.01em',
                              }}>
                                {child.label}
                              </span>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = item.id === current;
            return (
              <button
                key={item.id}
                onClick={() => onChange(item.id)}
                className="sidebar-item w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left relative"
                style={{
                  background: isActive ? 'rgba(68,214,44,0.1)' : 'transparent',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeBar"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '20%',
                      height: '60%',
                      width: '3px',
                      background: 'var(--accent)',
                      borderRadius: '0 2px 2px 0',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <span style={{
                  fontSize: '14px',
                  color: isActive ? 'var(--accent)' : 'var(--ash-light)',
                  filter: isActive ? 'none' : 'brightness(2)',
                  minWidth: '16px',
                  textAlign: 'center',
                }}>
                  {item.icon}
                </span>

                <span style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--white)' : 'var(--white-muted)',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="px-4 py-4" style={{ borderTop: '1px solid var(--border)' }}>
        <p style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '9px',
          color: 'var(--white-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          opacity: 0.5,
        }}>
          Book My Turf PVT LTD
        </p>
        <p style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '9px',
          color: 'var(--white-muted)',
          letterSpacing: '0.05em',
          opacity: 0.35,
          marginTop: '2px',
        }}>
          Confidential · 2026
        </p>
      </div>
    </motion.aside>
  );
}

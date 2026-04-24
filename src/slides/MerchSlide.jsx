import MerchSection from './burnGrowth/MerchSection.jsx';
import { T } from './burnGrowth/tokens.jsx';

export default function MerchSlide() {
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
      {/* Ambient glows — same as BurnGrowthSlide */}
      <div style={{ position: 'fixed', top: '20%', right: '5%', width: 400, height: 400, background: `${T.amber}06`, borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: '20%', left: '10%', width: 300, height: 300, background: `${T.green}06`, borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Scrollable content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '0 48px',
        scrollbarWidth: 'thin',
        scrollbarColor: `${T.border} transparent`,
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <MerchSection />
        </div>
      </div>
    </div>
  );
}

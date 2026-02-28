import { useState, useCallback, useRef } from 'react';

const QUIPS = [
  "Nope, not today! 🐍",
  "Nice try, muggle! 😄",
  "You can't catch me! ⚡",
  "That's not an option! 🔮",
  "I'm faster than a Nimbus! 🧹",
  "Almost... but no! 😜",
  "Keep dreaming! 💫",
  "Try again! ✨",
  "You sure about that? 🤔",
  "Wrong spell! 😂",
  "Hehe, too slow! 🌟",
  "This button has trust issues! 😅",
  "404: No not found! 🚫",
  "Expecto Patronum... nope! 🐍",
  "Even Windshields can't resist! 🤓✨",
  "The sorting hat says YES! 🎩",
  "One more chance — you know you want to! 🌟",
  "Come on, Saachi! 💚",
  "Resistance is futile, Windshields! 🌟",
  "The Marauder's Map says: say yes! 🗺️",
];

function getRandomQuip(current: string): string {
  const others = QUIPS.filter(q => q !== current);
  return others[Math.floor(Math.random() * others.length)];
}

function getRandomPosition(btnW: number, btnH: number) {
  const padding = 20;
  const maxX = window.innerWidth - btnW - padding;
  const maxY = window.innerHeight - btnH - padding;
  const x = Math.max(padding, Math.floor(Math.random() * maxX));
  const y = Math.max(padding, Math.floor(Math.random() * maxY));
  return { x, y };
}

export default function RunawayButton() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [quip, setQuip] = useState('');
  const [showQuip, setShowQuip] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const quipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runAway = useCallback(() => {
    const btnW = btnRef.current?.offsetWidth ?? 120;
    const btnH = btnRef.current?.offsetHeight ?? 48;
    const newPos = getRandomPosition(btnW, btnH);
    const newQuip = getRandomQuip(quip);

    setPosition(newPos);
    setIsFixed(true);
    setQuip(newQuip);
    setShowQuip(true);

    if (quipTimerRef.current) clearTimeout(quipTimerRef.current);
    quipTimerRef.current = setTimeout(() => setShowQuip(false), 1800);
  }, [quip]);

  const buttonStyle: React.CSSProperties = isFixed
    ? {
        position: 'fixed',
        left: position!.x,
        top: position!.y,
        transition: 'left 0.25s cubic-bezier(0.34,1.56,0.64,1), top 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        zIndex: 50,
      }
    : {};

  const quipStyle: React.CSSProperties = isFixed && position
    ? {
        position: 'fixed',
        left: Math.min(position.x, window.innerWidth - 200),
        top: Math.max(position.y - 44, 8),
        zIndex: 51,
        pointerEvents: 'none',
      }
    : { pointerEvents: 'none' };

  return (
    <>
      {/* Quip bubble */}
      {showQuip && quip && (
        <div
          style={{
            ...quipStyle,
            background: 'oklch(0.18 0.03 160 / 92%)',
            border: '1px solid oklch(0.52 0.16 155 / 45%)',
            color: 'oklch(0.78 0.02 200)',
            backdropFilter: 'blur(8px)',
          }}
          className="animate-quip-in text-sm font-body font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap"
        >
          {quip}
        </div>
      )}

      <button
        ref={btnRef}
        style={{
          ...buttonStyle,
          color: 'oklch(0.55 0.02 200)',
          border: '2px solid oklch(0.35 0.08 155 / 55%)',
          background: 'oklch(0.20 0.04 160 / 65%)',
          backdropFilter: 'blur(4px)',
        }}
        onMouseEnter={runAway}
        onTouchStart={runAway}
        onClick={runAway}
        className="no-button px-8 py-4 rounded-lg font-script font-semibold text-lg tracking-wider select-none cursor-default transition-colors hover:border-emerald-hp/50"
        aria-label="No button"
      >
        No 😔
      </button>
    </>
  );
}

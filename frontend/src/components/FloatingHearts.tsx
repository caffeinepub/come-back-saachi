import { useMemo } from 'react';

interface MagicalParticle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  emoji: string;
}

const MAGICAL_EMOJIS = ['✨', '⭐', '💫', '🌟', '✦', '🐍', '⚡', '🔮', '✨', '💚'];

function generateParticles(count: number): MagicalParticle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 12 + Math.random() * 20,
    delay: Math.random() * 14,
    duration: 9 + Math.random() * 9,
    opacity: 0.20 + Math.random() * 0.40,
    emoji: MAGICAL_EMOJIS[Math.floor(Math.random() * MAGICAL_EMOJIS.length)],
  }));
}

export default function FloatingHearts() {
  const particles = useMemo(() => generateParticles(22), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-up select-none"
          style={{
            left: `${p.x}%`,
            bottom: '-60px',
            fontSize: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}

import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

interface FloatingParticle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  emoji: string;
}

// Slytherin confetti: emerald greens and silvers
const CONFETTI_COLORS = [
  '#2d6a4f', '#40916c', '#52b788', '#74c69d',
  '#b7c9c0', '#d4e0db', '#a8c5bc', '#1b4332',
  '#95d5b2', '#c8e6c9',
];

const CELEBRATION_EMOJIS = ['✨', '🌟', '💫', '⭐', '🐍', '💚', '🔮', '⚡'];

function generateConfetti(count: number): Confetti[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: 6 + Math.random() * 10,
    delay: Math.random() * 2,
    duration: 2.5 + Math.random() * 2,
    rotation: Math.random() * 360,
  }));
}

function generateFloatingParticles(count: number): FloatingParticle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 5 + Math.random() * 90,
    size: 18 + Math.random() * 28,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
    emoji: CELEBRATION_EMOJIS[Math.floor(Math.random() * CELEBRATION_EMOJIS.length)],
  }));
}

export default function CelebrationScreen() {
  const [confetti] = useState<Confetti[]>(() => generateConfetti(60));
  const [particles] = useState<FloatingParticle[]>(() => generateFloatingParticles(15));
  const [showMessage, setShowMessage] = useState(false);
  const [showHappiest, setShowHappiest] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowMessage(true), 300);
    const t2 = setTimeout(() => setShowHappiest(true), 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] w-full">
      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        {confetti.map((c) => (
          <div
            key={c.id}
            className="absolute animate-confetti-fall"
            style={{
              left: `${c.x}%`,
              top: '-20px',
              width: c.size,
              height: c.size,
              backgroundColor: c.color,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
              transform: `rotate(${c.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating magical particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute animate-heart-rise"
            style={{
              left: `${p.x}%`,
              bottom: '-60px',
              fontSize: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          >
            {p.emoji}
          </div>
        ))}
      </div>

      {/* Main celebration card */}
      <div
        className={`relative z-30 bg-card-glass backdrop-blur-md rounded-2xl shadow-magical px-8 py-12 flex flex-col items-center gap-6 border border-slytherin max-w-md w-full transition-all duration-700 ${
          showMessage ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        {/* Slytherin snake */}
        <div className="text-5xl animate-bounce-gentle select-none">🐍</div>

        <h1 className="font-script text-3xl md:text-4xl text-silver text-center leading-tight tracking-wide text-glow-silver">
          Yay, we're talking again! ✨
        </h1>

        {/* Windshields greeting — affectionate */}
        <p className="font-body text-sm text-emerald-bright/70 tracking-widest uppercase select-none">
          my fav Windshields said yes! 🤓💚
        </p>

        <div className="text-center space-y-3">
          <p className="font-body text-xl text-silver font-semibold">
            This honestly made my day 💚
          </p>
          <p className="font-body text-base text-silver/80 leading-relaxed italic">
            Glad we're good, Saachi. That's all I needed. ✨
          </p>
          <p className="font-body text-lg text-silver/90 font-medium">
            Looking forward to it 🌟
          </p>
        </div>

        {/* Happiest highlight box — restored */}
        <div
          className={`w-full transition-all duration-700 ease-out ${
            showHappiest ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          <div className="relative rounded-xl border border-emerald-hp/50 bg-emerald-hp/10 px-6 py-4 text-center shadow-magical">
            <p className="font-script text-2xl md:text-3xl text-silver text-glow-silver leading-snug">
              You made me the happiest person in the world ✨
            </p>
            <p className="mt-2 font-body text-sm text-emerald-bright/80 italic">
              Truly, Saachi. Thank you. 💚
            </p>
          </div>
        </div>

        {/* Magical symbols row */}
        <div className="flex gap-3 text-2xl animate-pulse-gentle select-none">
          {['🐍', '✨', '💚', '🌟', '⚡', '🔮'].map((emoji, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>{emoji}</span>
          ))}
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-hp to-transparent" />

        <p className="font-script text-xl text-silver/80 text-center tracking-wide">
          Ravenclaw and Slytherin for life 🐍
        </p>
      </div>
    </div>
  );
}

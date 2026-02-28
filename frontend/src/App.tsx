import { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import RunawayButton from './components/RunawayButton';
import CelebrationScreen from './components/CelebrationScreen';

export default function App() {
  const [saidYes, setSaidYes] = useState(false);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{
        backgroundImage: "url('/assets/generated/slytherin-bg.dim_1920x1080.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for atmosphere */}
      <div className="absolute inset-0 bg-overlay pointer-events-none z-0" />

      {/* Floating magical particles */}
      <FloatingHearts />

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12">
        {saidYes ? (
          <CelebrationScreen />
        ) : (
          <MainCard onYes={() => setSaidYes(true)} />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 text-xs text-silver-dim/60">
        <span>
          Built with{' '}
          <span className="text-emerald-bright" aria-label="love">✦</span>
          {' '}using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'come-back-saachi')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-silver transition-colors"
          >
            caffeine.ai
          </a>
        </span>
        <span className="ml-2 text-silver-dim/40">© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

function MainCard({ onYes }: { onYes: () => void }) {
  return (
    <div className="flex flex-col items-center gap-6 max-w-lg w-full">
      {/* Slytherin house badge */}
      <div className="text-center select-none">
        <span className="text-4xl">🐍</span>
        <p className="font-script text-xs tracking-[0.35em] text-emerald-bright/70 mt-1 uppercase">
          Slytherin
        </p>
      </div>

      {/* Card */}
      <div className="bg-card-glass backdrop-blur-md rounded-2xl shadow-magical px-8 py-10 flex flex-col items-center gap-6 border border-slytherin w-full animate-glow-pulse">
        {/* Big emoji */}
        <div className="text-7xl animate-magical-pulse select-none" role="img" aria-label="pleading face">
          🥺
        </div>

        {/* Heading */}
        <h1 className="font-script text-3xl md:text-4xl text-silver text-center leading-tight tracking-wide text-glow-silver">
          Saachi, please come back 🥺
        </h1>

        {/* Nickname — playful personal touch */}
        <p className="font-body text-sm text-emerald-bright/70 tracking-widest uppercase select-none">
          aka my Windshields 🤓✨
        </p>

        {/* Main message — sweet, hopeful, one-date framing */}
        <div className="text-center space-y-3">
          <p className="font-body text-lg md:text-xl text-silver/90 leading-relaxed italic">
            I know you said "this isn't working out" — but I really think it could. 🥺
          </p>
          <p className="font-body text-base md:text-lg text-silver/75 leading-relaxed">
            Our first date meant a lot to me. You're funny, warm, and genuinely
            one of a kind — and I'd love the chance to show you that. 💚
          </p>
          <p className="font-body text-lg md:text-xl text-silver font-semibold leading-relaxed">
            Please give us one more chance? 🥺✨
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-hp to-transparent" />

        {/* Question */}
        <p className="font-script text-xl text-silver/85 text-center tracking-wide">
          Will you come back? 🥺
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-6 flex-wrap mt-2 w-full">
          {/* Yes button */}
          <button
            onClick={onYes}
            className="yes-button group relative px-10 py-4 rounded-lg font-script font-bold text-lg text-white shadow-yes transition-all duration-200 hover:scale-110 hover:shadow-yes-hover active:scale-95 select-none tracking-wider"
          >
            <span className="relative z-10 flex items-center gap-2">
              Yes! 🥺✨
            </span>
          </button>

          {/* Runaway No button */}
          <RunawayButton />
        </div>
      </div>

      {/* Slytherin motto */}
      <p className="text-center text-silver-dim/40 text-xs font-script tracking-widest select-none">
        ✦ &nbsp; Draco Dormiens Nunquam Titillandus &nbsp; ✦
      </p>
    </div>
  );
}

'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-[linear-gradient(180deg,#FF9151_0%,#FF7A2F_40%,#FFB042_100%)] text-white relative overflow-hidden">
      {/* Plate Icon */}
      <div className="mb-6">
        <img src="/cover-dish.svg" className="w-16" alt="" />
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold mb-10 text-white/95">
        Order Food <span className="font-light">with Your Voice</span>
      </h1>

      {/* Mic Button */}
      <Link
        href="/listening"
        className="w-28 h-28 rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(255,255,255,0.7)]"
        style={{
          background: 'linear-gradient(180deg, #FF5A3D 0%, #E53A24 100%)',
          border: '6px solid rgba(255,255,255,0.6)',
        }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V4a3 3 0 0 1 3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      </Link>

      {/* Tap to Start */}
      <p className="mt-5 text-white/85 text-sm tracking-wide">Tap to Start</p>
    </main>
  );
}

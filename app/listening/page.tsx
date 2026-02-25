'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Mic } from 'lucide-react';

export default function Listening() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/processing'), 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <p className="mb-4 text-2xl font-semibold tracking-wide">Listening…</p>
      <p className="text-sm opacity-60 mb-10">Speak now, I'm capturing your voice</p>

      {/* Microphone + Glow + Pulse Waves */}
      <div className="relative flex items-center justify-center">
        {/* Outer expanding rings */}
        <span className="absolute h-40 w-40 rounded-full border border-orange-500 opacity-20 animate-[ping_2s_linear_infinite]"></span>
        <span className="absolute h-32 w-32 rounded-full border border-orange-500 opacity-30 animate-[ping_2.5s_linear_infinite]"></span>
        <span className="absolute h-24 w-24 rounded-full border border-orange-500 opacity-40 animate-[ping_3s_linear_infinite]"></span>

        {/* Inner glow circle */}
        <div className="h-20 w-20 rounded-full bg-orange-600/80 flex items-center justify-center shadow-[0_0_30px_rgba(255,120,50,0.6)] animate-pulse">
          <Mic className="h-10 w-10 text-white" />
        </div>
      </div>
    </main>
  );
}

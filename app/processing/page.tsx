'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2, Bot, User } from 'lucide-react';

export default function Processing() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/cart'), 4500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-purple-400 via-pink-300 to-yellow-200 px-4 py-10">
      {/* Chat Container */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-6 space-y-6 border border-gray-100 overflow-hidden">
        {/* Customer Message */}
        <div className="flex items-start gap-3 animate-[fadeIn_0.9s_ease]">
          <User className="w-10 h-10 text-gray-600 bg-gray-200 p-2 rounded-full shadow" />
          <div className="flex flex-col gap-2">
            <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-4 rounded-2xl rounded-bl-none max-w-xs shadow-md">
              <p className="font-medium text-gray-800">I want 1 Chicken Burger and 2 Coke</p>
            </div>
            {/* Product previews */}
            <div className="flex gap-3 mt-1">
              <img src="/b.png" alt="Chicken Burger" className="w-16 h-16 rounded-xl object-cover shadow-lg" />
              <img src="/c.png" alt="Coke" className="w-16 h-16 rounded-xl object-cover shadow-lg" />
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex items-start gap-3 animate-[fadeIn_1.1s_ease] justify-end">
          <div className="flex flex-col items-end gap-2">
            <div className="bg-gradient-to-br from-orange-400 via-orange-300 to-orange-100 p-4 rounded-2xl rounded-br-none max-w-xs shadow-lg">
              <p className="text-gray-900">
                Got it! Confirming your order:
                <br />• 1 Chicken Burger
                <br />• 2 Coke
              </p>
            </div>
            {/* Typing dots */}
            <div className="flex gap-1 justify-end">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-200"></span>
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-400"></span>
            </div>
          </div>
          <Bot className="w-10 h-10 text-white bg-orange-500 p-2 rounded-full shadow" />
        </div>
      </div>

      {/* Processing Indicator */}
      <div className="flex items-center gap-3 mt-6 animate-[fadeIn_1.4s_ease]">
        <Loader2 className="w-6 h-6 animate-spin text-gray-700" />
        <p className="text-gray-800 font-semibold tracking-wide">Processing your order…</p>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-bounce {
            animation: bounce 1s infinite;
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
        `}
      </style>
    </main>
  );
}

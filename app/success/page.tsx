'use client';
import Link from 'next/link';

export default function Success() {
  return (
    <main className="h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-green-50 to-white">
      {/* Success Checkmark Animation */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-green-200 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute w-24 h-24 bg-green-300 rounded-full opacity-40 animate-pulse"></div>

        <div className="w-24 h-24 bg-green-600 text-white flex items-center justify-center rounded-full shadow-xl animate-[popIn_0.5s_ease]">
          <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="white" strokeWidth="3">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <h1 className="text-2xl font-bold text-green-700 mt-6 animate-[fadeInUp_0.8s_ease]">Your order is confirmed!</h1>
      <p className="mt-2 text-gray-600 animate-[fadeInUp_1s_ease]">Arriving in 25–30 minutes</p>

      {/* Button */}
      <Link href="/" className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition animate-[fadeInUp_1.2s_ease]">
        Track Order
      </Link>

      {/* Keyframes */}
      <style>
        {`
          @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </main>
  );
}

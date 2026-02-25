'use client';
import Link from 'next/link';

export default function Payment() {
  return (
    <main className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Complete Your Payment</h2>

      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm border border-gray-100">
        {/* QR Code */}
        <div className="flex flex-col items-center">
          <img src="/qr.png" className="w-40 h-40 rounded-lg border shadow-sm" alt="QR Code" />
          <p className="text-gray-600 text-sm mt-2">Scan to Pay</p>
        </div>

        {/* Wallet Options */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <button className="flex items-center gap-1 bg-white shadow-sm border px-3 py-2 rounded-lg">
            <img src="/Google_Pay.png" className="w-14" />
          </button>

          <button className="flex items-center gap-1 bg-white shadow-sm border px-3 py-2 rounded-lg">
            <img src="/PhonePe.png" className="w-24" />
          </button>

          <button className="flex items-center gap-1 bg-white shadow-sm border px-3 py-2 rounded-lg">
            <img src="/Paytm_logo.png" className="w-20" />
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center mt-5 mb-3">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Card Inputs */}
        <div className="space-y-3">
          <input type="text" placeholder="Card Number" className="w-full border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" />

          <div className="flex gap-3">
            <input type="text" placeholder="Expiry Date" className="flex-1 border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <input type="text" placeholder="CVV" className="w-20 border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </div>
        </div>

        {/* Pay Button */}
        <Link href="/success" className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold mt-5 shadow hover:bg-gray-800 transition">
          Pay Now
        </Link>
      </div>
    </main>
  );
}

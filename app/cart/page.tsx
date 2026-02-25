'use client';
import Link from 'next/link';

export default function Cart() {
  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="bg-white p-5 shadow-lg rounded-2xl space-y-5 border border-gray-100">
        {/* Chicken Burger */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/b.png" alt="Chicken Burger" className="w-16 h-16 rounded-lg object-cover shadow" />
            <div>
              <p className="font-semibold text-gray-800">Chicken Burger</p>
              <p className="text-gray-500 text-sm">₹120</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
            <span className="font-medium">1</span>
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
          </div>
        </div>

        {/* Coke */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/c.png" alt="Coke" className="w-16 h-16 rounded-lg object-cover shadow" />
            <div>
              <p className="font-semibold text-gray-800">Coke</p>
              <p className="text-gray-500 text-sm">₹40</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
            <span className="font-medium">2</span>
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
          </div>
        </div>

        {/* Bill Section */}
        <div className="border-t pt-4">
          <p className="flex justify-between text-gray-700">
            <span>Subtotal</span> <span>₹200</span>
          </p>
          <p className="flex justify-between text-gray-700">
            <span>Delivery Fee</span> <span>₹30</span>
          </p>
          <p className="flex justify-between font-semibold text-gray-900 text-lg mt-2">
            <span>Total</span> <span>₹230</span>
          </p>
        </div>

        {/* Button */}
        <Link href="/payment" className="block bg-orange-500 text-white text-center py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-orange-600 transition">
          Proceed to Payment
        </Link>
      </div>
    </main>
  );
}

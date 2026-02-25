import { ThemeModeScript } from 'flowbite-react';
import type { Metadata } from 'next';
import { Comfortaa, Libre_Baskerville, Montserrat, Playfair_Display, Inter } from 'next/font/google';
import { ThemeInit } from '../.flowbite-react/init';

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-md mx-auto min-h-screen bg-white shadow-xl">{children}</body>
    </html>
  );
}

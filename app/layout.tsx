import { ThemeModeScript } from 'flowbite-react';
import { Inter, Montserrat, Comfortaa, Playfair_Display, Libre_Baskerville } from 'next/font/google';
import './globals.css';

// Example: load fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Flowbite theme initialization */}
        <ThemeModeScript />
      </head>
      <body className="max-w-md mx-auto min-h-screen bg-white shadow-xl font-sans">{children}</body>
    </html>
  );
}

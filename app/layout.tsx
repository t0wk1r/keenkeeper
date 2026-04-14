import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TimelineProvider } from '@/context/TimelineContext';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'KeenKeeper',
  description: 'Keep meaningful friendships alive',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TimelineProvider>
          <Toaster position="top-right" />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </TimelineProvider>
      </body>
    </html>
  );
}
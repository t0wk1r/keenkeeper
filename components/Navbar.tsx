'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Clock3, ChartNoAxesCombined } from 'lucide-react';
import { cn } from '@/lib/helpers';

const links = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/timeline', label: 'Timeline', icon: Clock3 },
  { href: '/stats', label: 'Stats', icon: ChartNoAxesCombined },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-800">
          Keen<span className="text-emerald-900">Keeper</span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition',
                  active
                    ? 'bg-emerald-900 text-white'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
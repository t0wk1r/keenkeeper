import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#145B47] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Link href="/" className="flex justify-center">
          <img
            src="/logo-light.png"
            alt="KeenKeeper Logo"
          />
        </Link>
        <p className="mx-auto mt-6 max-w-3xl text-sm text-white/95 sm:text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-bold">Social Links</h3>

          <div className="mt-5 flex justify-center gap-4">
            {[
              { icon: FaInstagram, href: 'https://instagram.com/t0wk1r', label: 'Instagram' },
              { icon: FaFacebookF, href: 'https://facebook.com/t0wk1r', label: 'Facebook' },
              { icon: FaXTwitter, href: 'https://x.com/t0wk1r', label: 'X' },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 transition hover:scale-105 hover:bg-slate-100"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-6 text-sm text-white/95">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-4">
              <Link href="#" className="transition hover:text-gray-300">
                Privacy Policy
              </Link>

              <Link href="#" className="transition hover:text-gray-300">
                Terms of Service
              </Link>

              <Link href="#" className="transition hover:text-gray-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
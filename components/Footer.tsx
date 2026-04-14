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
            {[FaInstagram, FaFacebookF, FaXTwitter].map((Icon, index) => (
              <div
                key={index}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900"
              >
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-6 text-sm text-white/95">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
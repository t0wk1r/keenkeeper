import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-extrabold text-emerald-900">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-slate-900">Page not found</h2>
      <p className="mt-3 text-slate-500">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-emerald-900 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
      >
        Back to Home
      </Link>
    </section>
  );
}
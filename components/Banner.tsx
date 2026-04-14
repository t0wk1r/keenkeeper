import { UserPlus } from 'lucide-react';

export default function Banner() {
  return (
    <section className="px-4 pt-14 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Friends to keep close in your life
      </h1>
      <p className="mx-auto mt-5 max-w-3xl text-sm text-slate-500 sm:text-lg">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
        relationships that matter most.
      </p>
      <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
        <UserPlus className="h-4 w-4" />
        Add a Friend
      </button>
    </section>
  );
}
'use client';

import { useTimeline } from '@/context/TimelineContext';
import StatsChart from '@/components/StatsChart';

export default function StatsPage() {
  const { entries } = useTimeline();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-extrabold text-slate-900">Friendship Analytics</h1>

      <div className="mt-8">
        <StatsChart entries={entries} />
      </div>
    </section>
  );
}
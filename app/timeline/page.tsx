'use client';

import { useMemo, useState } from 'react';
import { useTimeline } from '@/context/TimelineContext';
import { InteractionType } from '@/types';
import TimelineFilter from '@/components/TimelineFilter';
import TimelineItem from '@/components/TimelineItem';

export default function TimelinePage() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState<'all' | InteractionType>('all');

  const filteredEntries = useMemo(() => {
    if (filter === 'all') return entries;
    return entries.filter((entry) => entry.type === filter);
  }, [entries, filter]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-extrabold text-slate-900">Timeline</h1>

      <div className="mt-8">
        <TimelineFilter value={filter} onChange={setFilter} />
      </div>

      <div className="mt-10 space-y-4">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry) => <TimelineItem key={entry.id} entry={entry} />)
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-slate-500">
            No timeline entries found.
          </div>
        )}
      </div>
    </section>
  );
}
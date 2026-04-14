'use client';

import { ChevronDown } from 'lucide-react';
import { InteractionType } from '@/types';

interface Props {
  value: 'all' | InteractionType;
  onChange: (value: 'all' | InteractionType) => void;
}

export default function TimelineFilter({ value, onChange }: Props) {
  return (
    <div className="relative w-full max-w-sm">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as 'all' | InteractionType)}
        className="h-14 w-full appearance-none rounded-xl border border-gray-300 bg-white pl-4 pr-12 text-lg text-slate-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200"
      >
        <option value="all">Filter timeline</option>
        <option value="text">Text</option>
        <option value="call">Call</option>
        <option value="video">Video</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-600">
        <ChevronDown className="h-5 w-5" />
      </div>
    </div>
  );
}
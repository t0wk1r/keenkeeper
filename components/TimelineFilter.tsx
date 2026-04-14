'use client';

import { InteractionType } from '@/types';

interface Props {
  value: 'all' | InteractionType;
  onChange: (value: 'all' | InteractionType) => void;
}

export default function TimelineFilter({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as 'all' | InteractionType)}
      className="w-full max-w-sm rounded-xl border border-gray-300 bg-white px-4 py-3 text-lg text-slate-800 outline-none ring-0"
    >
      <option value="all">Filter timeline</option>
      <option value="text">Text</option>
      <option value="call">Call</option>
      <option value="video">Video</option>
    </select>
  );
}
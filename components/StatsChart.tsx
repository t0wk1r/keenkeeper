'use client';

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TimelineEntry } from '@/types';

export default function StatsChart({ entries }: { entries: TimelineEntry[] }) {
  const counts = {
    call: entries.filter((entry) => entry.type === 'call').length,
    text: entries.filter((entry) => entry.type === 'text').length,
    video: entries.filter((entry) => entry.type === 'video').length,
  };

  const data = [
    { name: 'Call', value: counts.call, color: '#134E4A' },
    { name: 'Text', value: counts.text, color: '#7C3AED' },
    { name: 'Video', value: counts.video, color: '#10B981' },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-emerald-900">By Interaction Type</h3>

      <div className="mt-8 h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={6}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
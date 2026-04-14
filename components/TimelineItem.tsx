import { Phone, MessageSquareText, Video } from 'lucide-react';
import { TimelineEntry } from '@/types';
import { formatPrettyDate } from '@/lib/helpers';

export default function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const iconMap = {
    call: Phone,
    text: MessageSquareText,
    video: Video,
  };

  const Icon = iconMap[entry.type];

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-700">
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-emerald-900">{entry.title}</h3>
        <p className="mt-1 text-lg text-slate-500">{formatPrettyDate(entry.date)}</p>
      </div>
    </div>
  );
}
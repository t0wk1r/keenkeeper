'use client';

import { Phone, MessageSquareText, Video } from 'lucide-react';
import toast from 'react-hot-toast';
import { Friend, InteractionType } from '@/types';
import { useTimeline } from '@/context/TimelineContext';

export default function QuickCheckIn({ friend }: { friend: Friend }) {
  const { addEntry } = useTimeline();

  const handleAction = (type: InteractionType) => {
    addEntry(friend.id, friend.name, type);
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} entry added for ${friend.name}`);
  };

  const actions = [
    { type: 'call' as InteractionType, label: 'Call', icon: Phone },
    { type: 'text' as InteractionType, label: 'Text', icon: MessageSquareText },
    { type: 'video' as InteractionType, label: 'Video', icon: Video },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900">Quick Check-In</h3>
      <p className="mt-2 text-slate-500">Log a quick interaction and keep the friendship fresh.</p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.type}
              onClick={() => handleAction(action.type)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              <Icon className="h-4 w-4" />
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
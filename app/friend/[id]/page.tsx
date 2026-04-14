import { notFound } from 'next/navigation';
import { Archive, Mail, Pencil, Trash2, Clock3 } from 'lucide-react';
import friendsData from '@/data/friends.json';
import { Friend } from '@/types';
import StatusBadge from '@/components/StatusBadge';
import QuickCheckIn from '@/components/QuickCheckIn';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function FriendDetailsPage({ params }: Props) {
  const { id } = await params;
  const friend = (friendsData as Friend[]).find((item) => item.id === Number(id));

  if (!friend) return notFound();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mx-auto h-28 w-28 overflow-hidden rounded-full">
              <img
                src={friend.picture}
                alt={friend.name}
                className="h-full w-full object-cover"
              />
            </div>

            <h1 className="mt-5 text-center text-3xl font-bold text-slate-900">
              {friend.name}
            </h1>

            <div className="mt-4 text-center">
              <StatusBadge status={friend.status} />
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-emerald-400 bg-emerald-100 px-3 py-1 text-sm text-emerald-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 text-center leading-7 text-slate-600">
              {friend.bio}
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-slate-600">
              <Mail className="h-4 w-4" />
              <span>{friend.email}</span>
            </div>

            <div className="mt-8 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-white">
                <Clock3 className="h-4 w-4" />
                Snooze 2 Weeks
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-white">
                <Archive className="h-4 w-4" />
                Archive
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-white">
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-slate-500">Days Since Contact</div>
              <div className="mt-3 text-3xl font-bold text-emerald-900">
                {friend.days_since_contact}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-slate-500">Goal</div>
              <div className="mt-3 text-3xl font-bold text-emerald-900">
                {friend.goal} days
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-slate-500">Next Due Date</div>
              <div className="mt-3 text-3xl font-bold text-emerald-900">
                {friend.next_due_date}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Relationship Goal
                </h3>
                <p className="mt-2 text-slate-500">
                  Stay in touch every {friend.goal} days.
                </p>
              </div>

              <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-900 px-4 py-3 text-sm font-semibold text-white">
                <Pencil className="h-4 w-4" />
                Edit
              </button>
            </div>
          </div>

          <QuickCheckIn friend={friend} />
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';
import { Friend } from '@/types';
import StatusBadge from './StatusBadge';

export default function FriendCard({ friend }: { friend: Friend }) {
  return (
    <Link
      href={`/friend/${friend.id}`}
      className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mx-auto h-20 w-20 overflow-hidden rounded-full">
        <img
          src={friend.picture}
          alt={friend.name}
          className="h-full w-full object-cover"
        />
      </div>

      <h3 className="mt-4 text-2xl font-bold text-slate-900">{friend.name}</h3>
      <p className="mt-2 text-lg text-slate-500">{friend.days_since_contact} days</p>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-emerald-400 bg-emerald-100 px-3 py-1 text-sm text-emerald-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <StatusBadge status={friend.status} />
      </div>
    </Link>
  );
}
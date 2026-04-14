import { FriendStatus } from '@/types';
import { cn } from '@/lib/helpers';

const statusMap: Record<FriendStatus, string> = {
  overdue: 'bg-red-500 text-white',
  'almost due': 'bg-emerald-800 text-white',
  'on-track': 'bg-orange-500 text-white',
};

export default function StatusBadge({ status }: { status: FriendStatus }) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize',
        statusMap[status]
      )}
    >
      {status}
    </span>
  );
}
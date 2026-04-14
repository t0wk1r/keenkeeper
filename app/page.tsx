'use client';

import { useEffect, useMemo, useState } from 'react';
import Banner from '@/components/Banner';
import SummaryCards from '@/components/SummaryCards';
import FriendCard from '@/components/FriendCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Friend } from '@/types';
import { useTimeline } from '@/context/TimelineContext';

export default function HomePage() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const { entries } = useTimeline();

  useEffect(() => {
    const fetchFriends = async () => {
      setLoading(true);

      const module = await import('@/data/friends.json');

      setTimeout(() => {
        setFriends(module.default as Friend[]);
        setLoading(false);
      }, 800);
    };

    fetchFriends();
  }, []);

  const stats = useMemo(() => {
    const onTrack = friends.filter((friend) => friend.status === 'on-track').length;

    const needAttention = friends.filter(
      (friend) => friend.status === 'overdue' || friend.status === 'almost due'
    ).length;

    const now = new Date();

    const interactionsThisMonth = entries.filter((entry) => {
      const entryDate = new Date(entry.date);

      return (
        entryDate.getMonth() === now.getMonth() &&
        entryDate.getFullYear() === now.getFullYear()
      );
    }).length;

    return {
      total: friends.length,
      onTrack,
      needAttention,
      interactionsThisMonth,
    };
  }, [friends, entries]);

  return (
    <section className="pb-8">
      <Banner />

      <SummaryCards
        total={stats.total}
        onTrack={stats.onTrack}
        needAttention={stats.needAttention}
        interactionsThisMonth={stats.interactionsThisMonth}
      />

      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-3xl font-bold text-slate-900">Your Friends</h2>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
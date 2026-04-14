'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { InteractionType, TimelineEntry } from '@/types';
import { getTimelineFromStorage, saveTimelineToStorage } from '@/lib/timeline-storage';

interface TimelineContextType {
  entries: TimelineEntry[];
  addEntry: (friendId: number, friendName: string, type: InteractionType) => void;
}

const TimelineContext = createContext<TimelineContextType | undefined>(undefined);

export function TimelineProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<TimelineEntry[]>([]);

  useEffect(() => {
    const stored = getTimelineFromStorage();
    setEntries(stored);
  }, []);

  const addEntry = (friendId: number, friendName: string, type: InteractionType) => {
    const title = `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friendName}`;

    const newEntry: TimelineEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      friendId,
      friendName,
      type,
      title,
      date: new Date().toISOString(),
    };

    setEntries((prev) => {
      const updated = [newEntry, ...prev];
      saveTimelineToStorage(updated);
      return updated;
    });
  };

  const value = useMemo(() => ({ entries, addEntry }), [entries]);

  return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>;
}

export function useTimeline() {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('useTimeline must be used inside TimelineProvider');
  }
  return context;
}
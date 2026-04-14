import { TimelineEntry } from '@/types';

const STORAGE_KEY = 'keenkeeper_timeline';

export function getTimelineFromStorage(): TimelineEntry[] {
  if (typeof window === 'undefined') return [];

  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];

  try {
    return JSON.parse(data) as TimelineEntry[];
  } catch {
    return [];
  }
}

export function saveTimelineToStorage(entries: TimelineEntry[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
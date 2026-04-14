import { InteractionType } from '@/types';

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function formatPrettyDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getInteractionLabel(type: InteractionType) {
  return type.charAt(0).toUpperCase() + type.slice(1);
}
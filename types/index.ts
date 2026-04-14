export type FriendStatus = 'overdue' | 'almost due' | 'on-track';
export type InteractionType = 'call' | 'text' | 'video';

export interface Friend {
  id: number;
  name: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: FriendStatus;
  tags: string[];
  bio: string;
  goal: number;
  next_due_date: string;
}

export interface TimelineEntry {
  id: string;
  friendId: number;
  friendName: string;
  type: InteractionType;
  title: string;
  date: string;
}
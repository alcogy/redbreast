export type Phase = 'unset' | 'progress' | 'complete' | 'canceled' | 'pending';
export interface Project {
  id: number;
  title: string;
  desc: string;
  phase: Phase | null;
  customer: string,
}

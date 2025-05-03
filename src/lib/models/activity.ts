export type ActivityType = 'Tel' | 'Visit' | 'E-mail' | 'SNS' | 'Negotiation';
export interface Activity {
  id: string;
  type: ActivityType;
  date: Date;
  user: string;
  customer: string;
  comment: string;
}

export const sampleActivities: Activity[] = [
  {
    id: '123',
    type: 'Tel',
    date: new Date('2025-05-04 14:12:00'),
    user: "John Smith",
    customer: 'The company',
    comment: 'I called for this company.',
  },
  {
    id: '113',
    type: 'Visit',
    date: new Date('2025-05-03 15:42:20'),
    user: "Sena Vintage",
    customer: 'Guinness Corp.',
    comment: 'I Visited to this company.',
  },
  {
    id: '113',
    type: 'Negotiation',
    date: new Date('2025-05-01 09:02:25'),
    user: "Don Jue",
    customer: 'Guinness Corp.',
    comment: 'eal-world negotiation examples—whether successes, failures, or somewhere in between—\noften offer useful lessons for those involved in business negotiations.\n\nHeres an overview of what we can learn from some real-world negotiation examples.',
  },

]
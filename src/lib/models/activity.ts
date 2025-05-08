export type ActivityType = 'Tel' | 'Visit' | 'E-mail' | 'SNS' | 'Negotiation';
export interface Activity {
  id: number;
  type: ActivityType;
  date: Date;
  userName: string;
  customerName: string;
  comment: string;
}

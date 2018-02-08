export interface EmailMessage {
  id: number;
  title: string;
  from: string;
  to: string;
  body?: string;
  time: number;
}

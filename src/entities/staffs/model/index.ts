export type Authority = 'Admin' | 'Member';
export type Status = 'Active' | 'InActive';

export interface Staff {
  id: string;
  name: string;
  role: Authority;
  signup_date: string;
  status: Status;
}

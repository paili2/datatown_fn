export interface AdminAuth {
  id: string;
  name: string;
  role: 'Admin' | 'Member';
  signup_date: string;
  status: 'Active' | 'InActive';
}

export interface PendingPartners {
  id: string;
  company_name: string;
  account_type: string;
  grade: string;
  request_at: string;
  primary_contact_name: string;
  avatarSrc: string;
  status: 'online' | 'offline';
}

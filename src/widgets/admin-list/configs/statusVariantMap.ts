import { AdminUser } from '@/entities/admins/model';

export const statusVariantMap: Record<AdminUser['status'], 'primary' | 'secondary'> = {
  Active: 'primary',
  InActive: 'secondary',
};

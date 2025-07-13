import { AdminUser } from '@/features/admin-list/types';

export const statusVariantMap: Record<AdminUser['status'], 'primary' | 'secondary'> = {
  Active: 'primary',
  InActive: 'secondary',
};

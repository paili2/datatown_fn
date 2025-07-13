import { AdminAuth } from '@/features/admin-list/types';

export const statusVariantMap: Record<AdminAuth['status'], 'primary' | 'secondary'> = {
  Active: 'primary',
  InActive: 'secondary',
};

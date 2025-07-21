import { Staff } from '@/entities/staffs/model';

export const statusVariantMap: Record<Staff['status'], 'primary' | 'secondary'> = {
  Active: 'primary',
  InActive: 'secondary',
};

import { KResource } from '@/entities/k-resources/model';

export const statusVariantMap: Record<KResource['status'], 'primary' | 'secondary'> = {
  Active: 'primary',
  Inactive: 'secondary',
};

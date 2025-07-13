import { AdminUser } from '@/features/admin-list/types';
import { statusVariantMap } from './statusVariantMap';
import Pill from '@/shared/ui/pill/Pill';
import { ReactNode } from 'react';

interface ColumnConfig<T> {
  key: keyof T;
  header: string;
  render: (item: T) => ReactNode;
  className?: string;
}
export const adminColumns: ColumnConfig<AdminUser>[] = [
  {
    key: 'id',
    header: '관리자 ID',
    render: (item) => <span className="font-medium">{item.id}</span>,
  },
  {
    key: 'name',
    header: '이름',
    render: (item) => <span className="font-medium">{item.name}</span>,
  },
  {
    key: 'role',
    header: '권한',
    render: (item) => <span className="font-medium">{item.role}</span>,
  },
  {
    key: 'signup_date',
    header: '가입일',
    render: (item) => <span className="font-medium">{item.signup_date}</span>,
  },
  {
    key: 'status',
    header: '상태',
    render: (item) => (
      <Pill color="default" variant={statusVariantMap[item.status]}>
        {item.status}
      </Pill>
    ),
  },
];

import { Authority } from '@/entities/admins/model/types';
import { AdminAuth } from '@/features/admin-list';
import Badge, { BadgeColor } from '@/shared/ui/badge/Badge';
import Pill from '@/shared/ui/pill/pill';
import { ReactNode } from 'react';
type Status = 'Active' | 'InActive';
type BadgeMapping<K extends string, V extends BadgeColor> = Record<K, V>;
export interface ColumnConfig<T> {
  key: keyof T;
  header: string;
  render: (item: T, index: number) => ReactNode;
  className?: string;
}

const AdminListTableHeader = () => {
  const getAuthorityColor: BadgeMapping<Authority, BadgeColor> = {
    Admin: 'danger',
    Member: 'success',
  };
  const statusColor: BadgeMapping<Status, BadgeColor> = {
    Active: 'success',
    InActive: 'danger',
  };

  const renderBadge = <K extends string, V extends BadgeColor>(itemValue: K, mapping: BadgeMapping<K, V>) => {
    return (
      <Badge size="sm" color={mapping[itemValue]}>
        {itemValue}
      </Badge>
    );
  };

  const adminColumns: ColumnConfig<AdminAuth>[] = [
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
      key: 'authority',
      header: '권한',
      render: (item) => (
        <Pill color="default" variant="primary">
          {item.authority}
        </Pill>
      ),
    },
    {
      key: 'status',
      header: '상태',
      render: (item) => renderBadge(item.status, statusColor),
    },
    {
      key: 'signup_date',
      header: '가입일',
      render: (item) => item.signup_date,
    },
    {
      key: 'last_login',
      header: '최근 로그인',
      render: (item) => item.last_login,
    },
  ];

  return (
    <>
      <thead className="border-gray-100 border-y dark:border-white/[0.05]">
        <tr>
          {adminColumns.map((column, index) => (
            <th key={String(column.key) + index} className={`px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400 ${column.className || ''}`}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default AdminListTableHeader;

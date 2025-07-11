'use client';

import Badge, { BadgeColor } from '@/shared/ui/badge/Badge';
import { ListView, ColumnConfig } from '@/widgets/list-view';
import { adminData } from '../data/adminList';
import { AdminAuth } from '../types';
import { useAdminListActions } from '../hooks/useAdminListActions';

type Authority = 'Admin' | 'Manager' | 'Operator';
type Status = 'Active' | 'InActive';
type BadgeMapping<K extends string, V extends BadgeColor> = Record<K, V>;

export default function AdminListView() {
  const { headerButtons } = useAdminListActions();
  const getAuthorityColor: BadgeMapping<Authority, BadgeColor> = {
    Admin: 'danger',
    Manager: 'success',
    Operator: 'primary',
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
      render: (item) => renderBadge(item.authority, getAuthorityColor),
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
    <ListView
      data={adminData}
      columns={adminColumns}
      title="관리자 목록"
      searchPlaceholder="관리자 검색..."
      searchFields={['name', 'id', 'authority']}
      showCheckbox={true}
      headerButtons={headerButtons}
      onSelectionChange={(selectedIds) => {
        console.log('선택된 ID들:', selectedIds);
      }}
      getItemId={(item) => item.id.toString()}
    />
  );
}

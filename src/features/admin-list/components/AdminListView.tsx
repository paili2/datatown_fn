'use client';

import Badge, { BadgeColor } from '@/shared/ui/badge/Badge';
import { ListView, ColumnConfig } from '@/widgets/list-view';
import { adminData } from '../data/adminList';
import { AdminAuth } from '../types';
import { useAdminListActions } from '../hooks/useAdminListActions';
import Pill from '@/shared/ui/pill/pill';

export default function AdminListView() {
  const { headerButtons } = useAdminListActions();

  return (
    <ListView
      data={adminData}
      title="관리자 목록"
      searchPlaceholder="관리자 검색..."
      searchFields={['name', 'id', 'role']}
      // headerButtons={headerButtons}
    />
  );
}

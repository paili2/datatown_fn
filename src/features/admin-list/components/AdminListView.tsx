'use client';

import { ListView } from '@/widgets/list-view';
import { adminData } from '../data/adminList';
import { useAdminListActions } from '../hooks/useAdminListActions';

export default function AdminListView() {
  const { headerButtons } = useAdminListActions();

  return (
    <ListView
      data={adminData}
      // headerButtons={headerButtons}
    />
  );
}

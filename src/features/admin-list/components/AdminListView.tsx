'use client';

import { adminData } from '../data/adminList';
import { useAdminListActions } from '../hooks/useAdminListActions';
import AdminListWidget from '@/widgets/admin-list/AdminListWidget';

export default function AdminListView() {
  const { headerButtons } = useAdminListActions();

  return <AdminListWidget data={adminData} />;
}

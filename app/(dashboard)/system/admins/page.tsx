'use client';

import AdminListWidget from '@/widgets/admin-list/AdminListWidget';
import { adminData } from '@/entities/admins/api/adminList';
import React from 'react';

export default function InternalAccounts() {
  return <AdminListWidget data={adminData} />;
}

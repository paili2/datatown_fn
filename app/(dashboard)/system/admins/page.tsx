'use client';

import PageBreadcrumb from '@/shared/ui/page-breadcrumb/PageBreadCrumb';
import { AdminListView } from '@/features/admin-list';

import React from 'react';

export default function InternalAccounts() {
  return (
    <>
      <PageBreadcrumb pageTitle="Internal Accounts" />
      <AdminListView />
    </>
  );
}

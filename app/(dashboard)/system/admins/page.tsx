"use client";

import PageBreadcrumb from "@/shared/ui/page-breadcrumb/PageBreadCrumb";
import { AdminListView } from "@/features/admin-list";

import React from "react";

export default function InternalAccounts() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Internal Accounts" />
      <div className="space-y-6">
        <AdminListView />
      </div>
    </div>
  );
}

"use client";

import ComponentCard from "@/shared/ui/component-card/ComponentCard";
import PageBreadcrumb from "@/shared/ui/page-breadcrumb/PageBreadCrumb";
import { AdminListView } from "@/features/list-view";

import React from "react";

export default function InternalAccounts() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Internal Accounts" />
      <div className="space-y-6">
        <ComponentCard title="관리자 목록">
          <AdminListView />
        </ComponentCard>
      </div>
    </div>
  );
}

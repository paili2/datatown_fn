import ComponentCard from "@/shared/ui/component-card/ComponentCard";
import PageBreadcrumb from "@/shared/ui/page-breadcrumb/PageBreadCrumb";
import BasicTableThree from "@/features/tables/BasicTableThree";
import BasicTableTwo from "@/features/tables/BasicTableTwo";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Basic Data Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Data Table page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Basic Tables" />
      <div className="space-y-6">
        <ComponentCard title="Basic Table 2">
          <BasicTableTwo />
        </ComponentCard>
        <ComponentCard title="Basic Table 3">
          <BasicTableThree />
        </ComponentCard>
      </div>
    </div>
  );
}

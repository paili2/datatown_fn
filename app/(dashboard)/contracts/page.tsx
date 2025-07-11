import PageBreadcrumb from "@/shared/ui/page-breadcrumb/PageBreadCrumb";
import Invoice from "@/features/invoice/Invoice";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Invoice | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Invoice page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function InvoicePage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Invoices" />
      <Invoice />
    </div>
  );
}

import PageBreadcrumb from "@/shared/ui/page-breadcrumb/PageBreadCrumb";
import KanbanBoard from "@/features/task/kanban/KanbanBoard";
import TaskHeader from "@/features/task/TaskHeader";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Task Kanban Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template",
  description: "Tailwind Admin Dashboard",
};

export default function MainPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="프로젝트 대시보드" />
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <TaskHeader />
        <KanbanBoard />
      </div>
    </div>
  );
}

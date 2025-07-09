import PageBreadcrumb from "@/shared/ui/page-breadcrumb/PageBreadCrumb";
import React from "react";
import TaskList from "@/features/task/task-list/TaskList";

export default function DashboardList() {
  return (
    <div>
      <PageBreadcrumb pageTitle="프로젝트 리스트" />
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <TaskList />
      </div>
    </div>
  );
}

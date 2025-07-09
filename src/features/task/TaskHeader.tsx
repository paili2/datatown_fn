"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TaskHeader() {
  const [selectedTaskGroup, setSelectedTaskGroup] =
    useState<string>("프로젝트 대시보드");
  const router = useRouter();

  const taskGroups = [
    { name: "프로젝트 대시보드", path: "/" },
    { name: "프로젝트 리스트", path: "/dashboard-list" },
  ];

  const handleClick = (group: (typeof taskGroups)[number]) => {
    setSelectedTaskGroup(group.name);
    router.push(group.path);
  };

  return (
    <div className="flex flex-col items-center px-4 py-5 xl:px-6 xl:py-6">
      <div className="flex flex-col w-full gap-5 sm:justify-between xl:flex-row xl:items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 items-center gap-x-1 gap-y-2 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
          {taskGroups.map((group) => (
            <button
              key={group.name}
              onClick={() => handleClick(group)}
              className={`inline-flex items-center xl:justify-start justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md group hover:text-gray-900 dark:hover:text-white ${
                selectedTaskGroup === group.name
                  ? "text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

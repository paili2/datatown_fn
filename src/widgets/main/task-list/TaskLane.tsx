"use client";
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "./types/Task";

interface TaskLaneProps {
  lane: string;
  tasks: Task[];
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: string) => void;
}

const TaskLane: React.FC<TaskLaneProps> = ({
  lane,
  tasks,
  onDragOver,
  onDrop,
  onDragStart,
}) => {
  return (
    <div onDragOver={onDragOver} onDrop={onDrop}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="flex items-center gap-3 text-base font-medium text-gray-800 capitalize dark:text-white/90">
          {lane}
          <span
            className={`
    inline-flex rounded-full px-2 py-0.5 text-theme-xs font-medium 
    ${
      lane === "신규 접수"
        ? "bg-gray-100 text-gray-700 dark:bg-white/[0.03] dark:text-white/80 "
        : lane === "검토 중"
        ? "text-warning-700 bg-warning-50 dark:bg-warning-500/15 dark:text-orange-400"
        : lane === "완료"
        ? "bg-success-50 text-success-700 dark:bg-success-500/15 dark:text-success-500"
        : ""
    }
  `}
          >
            {tasks.length}
          </span>
        </h3>
      </div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
          onDragStart={(e) => onDragStart(e, task.id)}
        />
      ))}
    </div>
  );
};

export default TaskLane;

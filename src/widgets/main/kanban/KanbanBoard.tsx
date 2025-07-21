'use client';
import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';
import { Task } from './types/types';
import { initialTasks } from './data/data';

const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const moveTask = useCallback((dragIndex: number, hoverIndex: number) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const draggedTask = newTasks[dragIndex];
      newTasks.splice(dragIndex, 1);
      newTasks.splice(hoverIndex, 0, draggedTask);
      return newTasks;
    });
  }, []);

  const changeTaskStatus = useCallback((taskId: string, newStatus: string) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 border-t border-gray-200 dark:border-white/[0.05]">
        <Column title="신규 접수" tasks={tasks.filter((task) => task.status === '신규 접수')} status="신규 접수" moveTask={moveTask} changeTaskStatus={changeTaskStatus} />
        <Column title="검토 중" tasks={tasks.filter((task) => task.status === '검토 중')} status="검토 중" moveTask={moveTask} changeTaskStatus={changeTaskStatus} />
        <Column title="완료" tasks={tasks.filter((task) => task.status === '완료')} status="완료" moveTask={moveTask} changeTaskStatus={changeTaskStatus} />
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;

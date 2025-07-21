import KanbanBoard from '@/widgets/main/kanban/KanbanBoard';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Task Kanban Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template',
  description: 'Tailwind Admin Dashboard',
};

export default function MainPage() {
  return <KanbanBoard />;
}

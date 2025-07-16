'use client';

import AppHeader from '@/widgets/layout/AppHeader';
import Backdrop from '@/widgets/layout/Backdrop';
import AppSidebar from '@/widgets/layout/sidebar/AppSidebar';
import { useSidebarStore } from '@/widgets/layout/sidebar/hooks/useSidebarStore';
import { isDesktopSidebarOpen } from '@/widgets/layout/sidebar/utils/sidebarUtils';
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isMobileOpen, isHovered } = useSidebarStore();
  const desktopOpen = isDesktopSidebarOpen(isExpanded, isHovered);
  const mainContentMargin = isMobileOpen ? 'ml-0' : desktopOpen ? 'lg:ml-[290px]' : 'lg:ml-[90px]';

  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar />
      <Backdrop />
      <div className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  );
}

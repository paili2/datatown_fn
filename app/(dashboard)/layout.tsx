'use client';

import AppHeader from '@/shared/layout/AppHeader';
import Backdrop from '@/shared/layout/Backdrop';
import AppSidebar from '@/shared/layout/AppSiderbar/AppSidebar';
import { useSidebarStore } from '@/shared/layout/AppSiderbar/hooks/useSidebarStore';
import { isDesktopSidebarOpen } from '@/shared/layout/AppSiderbar/utils/sidebarUtils';
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isMobileOpen } = useSidebarStore();
  const desktopOpen = isDesktopSidebarOpen(isExpanded);
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

'use client';
import React from 'react';
import SidebarLogo from './components/sub/SidebarLogo';
import Siderbar from './components/Siderbar';
import { useSidebarClasses } from './hooks/useSidebarClasses';

const styles = {
  aside:
    'fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 lg:translate-x-0',
};

const AppSidebar = () => {
  const { sidebarWidthClass, sidebarTransitionClass } = useSidebarClasses();

  return (
    <aside className={`${sidebarWidthClass} ${sidebarTransitionClass} ${styles.aside}`}>
      <SidebarLogo />
      <Siderbar />
    </aside>
  );
};

export default AppSidebar;

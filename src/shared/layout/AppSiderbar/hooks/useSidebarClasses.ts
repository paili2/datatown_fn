import { useSidebarStore } from './useSidebarStore';
import { isDesktopSidebarOpen, isSidebarOpen } from '../utils/sidebarUtils';

export function useSidebarClasses() {
  const { isMobileOpen, isExpanded } = useSidebarStore();
  const desktopOpen = isDesktopSidebarOpen(isExpanded);
  const sidebarOpen = isSidebarOpen(desktopOpen, isMobileOpen);

  return {
    sidebarTransitionClass: isMobileOpen ? 'translate-x-0' : '-translate-x-full',
    sidebarWidthClass: sidebarOpen ? 'w-[290px]' : 'w-[90px]',
    baseClass:
      'fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200',
  };
}

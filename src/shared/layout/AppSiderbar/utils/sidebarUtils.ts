export const isSidebarOpen = (isDesktopSidebarOpen: boolean, isMobileSidebarOpen: boolean): boolean => isDesktopSidebarOpen || isMobileSidebarOpen;
export const isDesktopSidebarOpen = (isExpanded: boolean): boolean => isExpanded;
export const isSubmenuOpen = (openSubmenu: { index: number } | null | undefined, index: number): boolean => openSubmenu?.index === index;
export const getSidebarJustifyClass = (isExpanded: boolean): string => (isExpanded ? 'justify-start' : 'lg:justify-center');

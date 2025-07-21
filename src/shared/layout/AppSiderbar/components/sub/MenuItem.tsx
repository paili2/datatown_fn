import Link from 'next/link';
import React from 'react';
import { NavItem } from '../../types';
import { useSidebarStore } from '../../hooks/useSidebarStore';
import { useActivePath } from '../../hooks/useActivePath';

type MenuItemProps = {
  nav: NavItem;
};

const getMenuItemClass = (isActive: boolean) => `menu-item group ${isActive ? 'menu-item-active' : 'menu-item-inactive'}`;
const getMenuItemIconClass = (isActive: boolean) => (isActive ? 'menu-item-icon-active' : 'menu-item-icon-inactive');

const MenuItem = ({ nav }: MenuItemProps) => {
  const { isExpanded, isMobileOpen } = useSidebarStore();
  const isSidebarOpen = isExpanded || isMobileOpen;
  const isActiveMenuItem = useActivePath();

  return (
    <Link href={nav.path} className={getMenuItemClass(isActiveMenuItem(nav.path))}>
      <span className={getMenuItemIconClass(isActiveMenuItem(nav.path))}>{nav.icon}</span>
      {isSidebarOpen && <span className="menu-item-text">{nav.name} </span>}
    </Link>
  );
};

export default MenuItem;

import { ChevronDownIcon } from 'lucide-react';
import { useSidebarStore } from '../../hooks/useSidebarStore';
import { isSidebarOpen, isSubmenuOpen } from '../../utils/sidebarUtils';
import { MenuItemWithSubmenuProps } from '../../types';

const getMenuItemClass = (isActive: boolean) => `menu-item group  cursor-pointer  ${isActive ? 'menu-item-active' : 'menu-item-inactive'} ${isActive ? 'lg:justify-start' : 'lg:justify-center'}`;

const getMenuItemIconClass = (isActive: boolean) => (isActive ? 'menu-item-icon-active' : 'menu-item-icon-inactive');
const getChevronClass = (isRotated: boolean) => `ml-auto w-5 h-5 transition-transform duration-200 ${isRotated && ' rotate-180 text-brand-500'}`;

const MenuItemWithSubmenu = ({ nav, index }: MenuItemWithSubmenuProps) => {
  const { isExpanded, isMobileOpen, openSubmenu, toggleSubmenu } = useSidebarStore();
  const sidebarOpen = isSidebarOpen(isExpanded, isMobileOpen);
  const showChevronRotated = isSubmenuOpen(openSubmenu, index);

  return (
    <button onClick={() => toggleSubmenu(index)} className={getMenuItemClass(showChevronRotated)}>
      <span className={getMenuItemIconClass(showChevronRotated)}>{nav.icon}</span>
      {sidebarOpen && (
        <>
          <span className="menu-item-text">{nav.name}</span>
          <ChevronDownIcon className={getChevronClass(showChevronRotated)} />
        </>
      )}
    </button>
  );
};

export default MenuItemWithSubmenu;

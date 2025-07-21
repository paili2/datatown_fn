import MenuItemWithSubmenu from './sub/MenuItemWithSubmenu';
import { useSidebarStore } from '../hooks/useSidebarStore';
import { isDesktopSidebarOpen, isSidebarOpen, isSubmenuOpen } from '../utils/sidebarUtils';
import SubMenu from './sub/SubMenu';
import MenuItem from './sub/MenuItem';
import { menuItems } from '../data/menuItems';

const Siderbar = () => {
  const { isExpanded, isMobileOpen, openSubmenu, subMenuHeight } = useSidebarStore();
  const sidebarOpen = isSidebarOpen(isExpanded, isMobileOpen);

  return (
    <nav className="flex flex-col gap-4 overflow-y-auto duration-300 ease-linear no-scrollbar">
      <ul className="flex flex-col gap-4">
        {menuItems.map((nav, index) => {
          const isOpen = isSubmenuOpen(openSubmenu, index);
          const height = isOpen ? `${subMenuHeight[`menu-${index}`]}px` : '0px';
          const shouldShowSubmenu = nav.subItems?.length && sidebarOpen;
          return (
            <li key={nav.name}>
              {nav.subItems ? <MenuItemWithSubmenu nav={nav} index={index} /> : <MenuItem nav={nav} />}
              {shouldShowSubmenu && <SubMenu parentMenuIndex={index} containerHeight={height} parentNavItem={nav} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Siderbar;

import SidebarDropdownNavItem, { SidebarDropdownNavItemProps } from './SidebarDropdownNavItem';
import { useSidebarStore } from '../../hooks/useSidebarStore';
import { useEffect, useRef } from 'react';

interface SubMenuProps {
  parentMenuIndex: number;
  containerHeight: string;
  parentNavItem: any;
}

const SubMenu = ({ parentMenuIndex, containerHeight, parentNavItem }: SubMenuProps) => {
  const { openSubmenu, setSubMenuHeight } = useSidebarStore();
  const subMenuContainerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  useEffect(() => {
    if (!openSubmenu) return;

    const subMenuKey = `menu-${openSubmenu.index}`;
    const subMenuScrollHeight = subMenuContainerRefs.current[subMenuKey]?.scrollHeight;

    if (subMenuScrollHeight) {
      setSubMenuHeight(subMenuKey, subMenuScrollHeight);
    }
  }, [openSubmenu, setSubMenuHeight]);
  return (
    <div
      ref={(el) => {
        subMenuContainerRefs.current[`menu-${parentMenuIndex}`] = el;
      }}
      className="overflow-hidden transition-all duration-300"
      style={{ height: containerHeight }}
    >
      <ul className="mt-2 space-y-1 ml-9">
        {parentNavItem.subItems!.map((subNavItem: SidebarDropdownNavItemProps) => (
          <SidebarDropdownNavItem key={subNavItem.name} {...subNavItem} />
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;

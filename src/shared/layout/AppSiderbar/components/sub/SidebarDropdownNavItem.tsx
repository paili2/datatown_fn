import Link from 'next/link';
import { useActivePath } from '../../hooks/useActivePath';

export interface SidebarDropdownNavItemProps {
  name: string;
  path: string;
}
const getItemClass = (active: boolean) => `menu-dropdown-item ${active ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}`;

const SidebarDropdownNavItem = ({ name, path }: SidebarDropdownNavItemProps) => {
  const isActive = useActivePath();
  return (
    <li>
      <Link href={path} className={getItemClass(isActive(path))}>
        {name}
      </Link>
    </li>
  );
};

export default SidebarDropdownNavItem;

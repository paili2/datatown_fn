import Link from "next/link";
import { MenuDropdownItemProps } from "../types";
import { getBadgeList } from "../utils/getBadgeList";
import SidebarFlagBadge from "./SidebarFlagBadge";

const MenuDropdownItem: React.FC<MenuDropdownItemProps> = ({
  name,
  path,
  isActive,
  isOngoing = false,
  isPro = false,
}) => {
  const active = isActive(path);
  const badges = getBadgeList(isOngoing, isPro).filter((b) => b.flag);

  return (
    <li>
      <Link
        href={path}
        className={`menu-dropdown-item
                ${
                  active
                    ? "menu-dropdown-item-active"
                    : "menu-dropdown-item-inactive"
                }`}
      >
        {name}
        <div className="flex items-center gap-1 ml-auto">
          {badges.map((b) =>
            b.flag ? (
              <SidebarFlagBadge key={b.label} label={b.label} active={active} />
            ) : null
          )}
        </div>
      </Link>
    </li>
  );
};

export default MenuDropdownItem;

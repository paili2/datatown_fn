"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "./hooks/useSidebarStore";
import SidebarLogo from "./components/SidebarLogo";
import { useSidebarClasses } from "./styles/styles";
import { menuItems } from "./data/menuItems";
import RenderMenuItems from "./components/RenderMenuItems";
import { authItems } from "./data/authItems";

const AppSidebar: React.FC = () => {
  const { baseClass, widthClass, sidebarSlideClass } = useSidebarClasses();
  const {
    isExpanded,
    openSubmenu,
    setIsHovered,
    toggleSubmenu,
    setOpenSubmenu,
  } = useSidebarStore();

  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );

  const pathname = usePathname();
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "menu" ? menuItems : authItems;
      items.forEach((nav, index) => {
        if (nav.subItems?.some((sub) => isActive(sub.path))) {
          setOpenSubmenu({
            type: menuType as "menu" | "auth",
            index,
          });
          submenuMatched = true;
        }
      });
    });
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive, setOpenSubmenu]);

  useEffect(() => {
    if (!openSubmenu) return;

    const key = `${openSubmenu.type}-${openSubmenu.index}`;
    const height = subMenuRefs.current[key]?.scrollHeight;

    if (height) {
      setSubMenuHeight((prev) => ({
        ...prev,
        [key]: height,
      }));
    }
  }, [openSubmenu]);

  return (
    <aside
      className={`${baseClass}  ${widthClass}  ${sidebarSlideClass}  lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SidebarLogo />
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <RenderMenuItems
              subMenuHeight={subMenuHeight}
              isActive={isActive}
              subMenuRefs={subMenuRefs}
              handleSubmenuToggle={toggleSubmenu}
              navItems={menuItems}
              menuType={"auth"}
            ></RenderMenuItems>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;

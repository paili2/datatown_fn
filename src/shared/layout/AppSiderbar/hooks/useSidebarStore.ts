import { create } from 'zustand';

type SidebarState = {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isHovered: boolean;
  activeItem: string | null;
  openSubmenu: {
    index: number;
  } | null;
  subMenuHeight: Record<string, number>;
  setIsHovered: (hovered: boolean) => void;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  toggleSubmenu: (index: number) => void;
  setActiveItem: (item: string | null) => void;
  setOpenSubmenu: (submenu: { index: number } | null) => void;
  setSubMenuHeight: (key: string, height: number) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  isExpanded: true,
  isMobileOpen: false,
  isHovered: false,
  activeItem: null,
  openSubmenu: null,
  subMenuHeight: {},

  setOpenSubmenu: (submenu) => set({ openSubmenu: submenu }),

  setIsHovered: (hovered) => set({ isHovered: hovered }),

  toggleSidebar: () => set((state) => ({ isExpanded: !state.isExpanded })),

  toggleMobileSidebar: () => set((state) => ({ isMobileOpen: !state.isMobileOpen })),

  setActiveItem: (item) => set({ activeItem: item }),

  toggleSubmenu: (index) =>
    set((state) => {
      const isSame = state.openSubmenu?.index === index;
      return {
        openSubmenu: isSame ? null : { index },
      };
    }),

  setSubMenuHeight: (key, height) =>
    set((state) => ({
      subMenuHeight: { ...state.subMenuHeight, [key]: height },
    })),
}));

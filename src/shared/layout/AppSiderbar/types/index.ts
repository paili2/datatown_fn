export type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
  subItems?: { name: string; path: string }[];
};

export interface MenuItemWithSubmenuProps {
  nav: NavItem;
  index: number;
}

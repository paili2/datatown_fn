export interface ListHeaderProps {
  title?: string;
  onSearch?: (searchTerm: string) => void;
  showSearch?: boolean;
  searchPlaceholder?: string;
  className?: string;
  buttons?: HeaderButtonConfig[];
}

export interface ListPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPageInfo?: boolean;
  showPageNumbers?: boolean;
  className?: string;
}

export interface HeaderButtonConfig {
  text: string;
  handler: () => void;
  variant?: "primary" | "success" | "danger" | "outline";
}

export interface ListViewActionsConfig {
  headerButtons?: {
    buttons: HeaderButtonConfig[];
  };
}

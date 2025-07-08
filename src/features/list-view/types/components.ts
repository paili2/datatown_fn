export interface Transaction {
  image: string;
  action: string;
  date: string;
  amount: string;
  category: string;
  status: "Success" | "Failed";
}

export interface Admin {
  id: string;
  name: string;
  authority: "Operator" | "Manager" | "Admin";
  signup_date: string;
  status: "Active" | "InActive";
  last_login: string;
}

export interface ListHeaderProps {
  title?: string;
  onSearch?: (searchTerm: string) => void;
  showSearch?: boolean;
  searchPlaceholder?: string;
  className?: string;
}
export interface ListPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPageInfo?: boolean;
  showPageNumbers?: boolean;
  className?: string;
}
export interface ListTableProps {
  items: Transaction[];
  onViewMore?: (item: Transaction) => void;
  onDelete?: (item: Transaction) => void;
  className?: string;
}
export interface ListTableRowProps {
  item: Transaction;
  index: number;
  onViewMore?: (item: Transaction) => void;
  onDelete?: (item: Transaction) => void;
  className?: string;
}

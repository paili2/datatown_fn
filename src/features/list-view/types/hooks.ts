import { Transaction } from "./components";

export interface UseListViewProps {
  data: Transaction[];
  itemsPerPage?: number;
  initialPage?: number;
}

export interface UseListViewReturn {
  // 검색 관련
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredData: Transaction[];

  // 페이지네이션 관련
  currentPage: number;
  totalPages: number;
  currentItems: Transaction[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startIndex: number;
  endIndex: number;
  totalItems: number;

  // 액션 핸들러
  handleSearch: (term: string) => void;
  handleViewMore: (item: Transaction) => void;
  handleDelete: (item: Transaction) => void;
}

export interface UsePaginationProps {
  data: any[];
  itemsPerPage: number;
  initialPage?: number;
}

export interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  currentItems: any[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startIndex: number;
  endIndex: number;
  totalItems: number;
}

// utils/listUtils.ts
import { Transaction } from "../types/components";

// 검색 관련 유틸리티
export const filterTransactions = (
  data: Transaction[],
  searchTerm: string
): Transaction[] => {
  if (!searchTerm.trim()) {
    return data;
  }

  const lowerSearchTerm = searchTerm.toLowerCase();

  return data.filter(
    (item) =>
      item.action.toLowerCase().includes(lowerSearchTerm) ||
      item.category.toLowerCase().includes(lowerSearchTerm) ||
      item.status.toLowerCase().includes(lowerSearchTerm) ||
      item.amount.toLowerCase().includes(lowerSearchTerm) ||
      item.date.toLowerCase().includes(lowerSearchTerm)
  );
};

// 정렬 관련 유틸리티
export type SortField = "action" | "date" | "amount" | "category" | "status";
export type SortDirection = "asc" | "desc";

export const sortTransactions = (
  data: Transaction[],
  field: SortField,
  direction: SortDirection = "asc"
): Transaction[] => {
  return [...data].sort((a, b) => {
    let aValue: any = a[field];
    let bValue: any = b[field];

    // 날짜 정렬을 위한 변환
    if (field === "date") {
      aValue = new Date(aValue).getTime();
      bValue = new Date(bValue).getTime();
    }

    // 금액 정렬을 위한 변환 (숫자 추출)
    if (field === "amount") {
      aValue = parseFloat(aValue.replace(/[^0-9.-]+/g, ""));
      bValue = parseFloat(bValue.replace(/[^0-9.-]+/g, ""));
    }

    if (direction === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
};

// 상태별 필터링
export const filterByStatus = (
  data: Transaction[],
  status: "Success" | "Pending" | "Failed" | "all"
): Transaction[] => {
  if (status === "all") {
    return data;
  }
  return data.filter((item) => item.status === status);
};

// 카테고리별 필터링
export const filterByCategory = (
  data: Transaction[],
  category: string | "all"
): Transaction[] => {
  if (category === "all") {
    return data;
  }
  return data.filter((item) => item.category === category);
};

// 고유 카테고리 목록 추출
export const getUniqueCategories = (data: Transaction[]): string[] => {
  const categories = data.map((item) => item.category);
  return [...new Set(categories)];
};

// 통계 계산
export const calculateStats = (data: Transaction[]) => {
  const totalAmount = data.reduce((sum, item) => {
    const amount = parseFloat(item.amount.replace(/[^0-9.-]+/g, ""));
    return sum + amount;
  }, 0);

  const statusCounts = data.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryCounts = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalAmount,
    totalTransactions: data.length,
    statusCounts,
    categoryCounts,
  };
};

// 데이터 포맷팅
export const formatAmount = (amount: string): string => {
  const num = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

// 페이지네이션 유틸리티
export const getPageData = (
  data: Transaction[],
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return {
    currentItems: data.slice(startIndex, endIndex),
    totalPages,
    startIndex,
    endIndex,
    totalItems: data.length,
  };
};

// 검색 하이라이트
export const highlightSearchTerm = (
  text: string,
  searchTerm: string
): string => {
  if (!searchTerm.trim()) {
    return text;
  }

  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
};

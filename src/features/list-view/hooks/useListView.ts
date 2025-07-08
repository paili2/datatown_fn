"use client";

// hooks/useListView.ts (수정된 버전)
import { useState, useMemo } from "react";
import { Transaction } from "../types/components";
import { usePagination } from "./usePagination";
import {
  filterTransactions,
  sortTransactions,
  filterByStatus,
  filterByCategory,
  SortDirection,
  SortField,
} from "../utils/listUtils";

interface UseListViewProps {
  data: Transaction[];
  itemsPerPage?: number;
  initialPage?: number;
}

export function useListView({
  data,
  itemsPerPage = 5,
  initialPage = 1,
}: UseListViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [statusFilter, setStatusFilter] = useState<
    Transaction["status"] | "all"
  >("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // 필터링된 데이터
  const filteredData = useMemo(() => {
    let result = data;

    // 검색 필터
    result = filterTransactions(result, searchTerm);

    // 상태 필터
    result = filterByStatus(result, statusFilter);

    // 카테고리 필터
    result = filterByCategory(result, categoryFilter);

    // 정렬
    result = sortTransactions(result, sortField, sortDirection);

    return result;
  }, [
    data,
    searchTerm,
    statusFilter,
    categoryFilter,
    sortField,
    sortDirection,
  ]);

  // 페이지네이션
  const pagination = usePagination({
    data: filteredData,
    itemsPerPage,
    initialPage,
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    pagination.goToPage(1);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    pagination.goToPage(1);
  };

  const handleStatusFilter = (status: Transaction["status"] | "all") => {
    setStatusFilter(status);
    pagination.goToPage(1);
  };

  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category);
    pagination.goToPage(1);
  };

  return {
    // 상태
    searchTerm,
    sortField,
    sortDirection,
    statusFilter,
    categoryFilter,

    // 데이터
    filteredData,

    // 페이지네이션
    ...pagination,

    // 핸들러
    handleSearch,
    handleSort,
    handleStatusFilter,
    handleCategoryFilter,
    handleViewMore: (item: Transaction) => console.log("View more:", item),
    handleDelete: (item: Transaction) => console.log("Delete:", item),
  };
}

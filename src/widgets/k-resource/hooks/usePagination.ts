'use client';

import { useState, useMemo } from 'react';
import { KResource } from '@/entities/k-resources/model';

interface UsePaginationProps {
  data: KResource[];
  pageSize?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  paginatedData: any[];
  setCurrentPage: (page: number) => void;
}

export const usePagination = ({ data, pageSize = 10 }: UsePaginationProps): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(data.length / pageSize), [data, pageSize]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, pageSize]);

  return {
    currentPage,
    totalPages,
    paginatedData,
    setCurrentPage,
  };
};

import { useState, useMemo } from 'react';
import { AdminUser } from '@/entities/admins/model';

interface UseAdminListPaginationProps {
  data: AdminUser[];
  pageSize?: number;
}

interface UseAdminListPaginationReturn {
  currentPage: number;
  totalPages: number;
  paginatedData: any[];
  setCurrentPage: (page: number) => void;
}

export const useAdminListPagination = ({ data, pageSize = 10 }: UseAdminListPaginationProps): UseAdminListPaginationReturn => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(data.length / pageSize), [data.length, pageSize]);

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

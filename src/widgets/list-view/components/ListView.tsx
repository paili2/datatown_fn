// components/ListView.tsx (제네릭 버전)
'use client';

import { ReactNode, useState, useMemo } from 'react';
import ListHeader from './ListHeader';
import ListPagination from './ListPagination';
import { usePagination } from '../hooks/usePagination';
import Checkbox from '@/shared/form/input/Checkbox';

export interface ColumnConfig<T> {
  key: keyof T;
  header: string;
  render: (item: T, index: number) => ReactNode;
  className?: string;
}

export interface ListViewProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  title?: string;
  searchPlaceholder?: string;
  itemsPerPage?: number;
  className?: string;
  searchFields?: (keyof T)[];
  showCheckbox?: boolean;
  onSelectionChange?: (selectedIds: string[]) => void;
  getItemId?: (item: T) => string;
  headerButtons?: import('../types/components').HeaderButtonConfig[];
}

export default function ListView<T>({
  data,
  columns,
  title = 'List View',
  searchPlaceholder = 'Search...',
  itemsPerPage = 10,
  className = '',
  searchFields = [],
  showCheckbox = false,
  onSelectionChange,
  getItemId = (item: T) => {
    const id = (item as Record<string, unknown>).id;
    return id ? String(id) : '';
  },
  headerButtons,
}: ListViewProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  // 검색 필터링
  const filteredData = useMemo(() => {
    if (!searchTerm || searchFields.length === 0) return data;

    return data.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        return value && String(value).toLowerCase().includes(searchTerm.toLowerCase());
      }),
    );
  }, [data, searchTerm, searchFields]);

  // 페이지네이션
  const pagination = usePagination({
    data: filteredData,
    itemsPerPage,
    initialPage: currentPage,
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    pagination.goToPage(1);
  };

  const handlePageChange = (page: number) => {
    pagination.goToPage(page);
  };

  // 체크박스 관련 핸들러
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    if (newSelectAll) {
      const allIds = pagination.currentItems.map((item) => getItemId(item as T));
      setSelectedIds(allIds);
      onSelectionChange?.(allIds);
    } else {
      setSelectedIds([]);
      onSelectionChange?.([]);
    }
  };

  const handleRowSelect = (id: string) => {
    const newSelectedIds = selectedIds.includes(id) ? selectedIds.filter((selectedId) => selectedId !== id) : [...selectedIds, id];

    setSelectedIds(newSelectedIds);
    setSelectAll(newSelectedIds.length === pagination.currentItems.length);
    onSelectionChange?.(newSelectedIds);
  };

  return (
    <div className={`rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ${className}`}>
      <ListHeader title={title} onSearch={handleSearch} showSearch={searchFields.length > 0} searchPlaceholder={searchPlaceholder} buttons={headerButtons} />
      <div className="overflow-hidden">
        <div className="max-w-full px-5 overflow-x-auto sm:px-6">
          <table className="w-full table-auto">
            <thead className="border-gray-100 border-y dark:border-white/[0.05]">
              <tr>
                {showCheckbox && (
                  <th className="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Checkbox checked={selectAll} onChange={handleSelectAll} />
                  </th>
                )}
                {columns.map((column, index) => (
                  <th key={index} className={`px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400 ${column.className || ''}`}>
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {pagination.currentItems.map((item, rowIndex) => {
                const itemId = getItemId(item as T);
                const isSelected = selectedIds.includes(itemId);

                return (
                  <tr key={rowIndex}>
                    {showCheckbox && (
                      <td className="px-4 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                        <Checkbox checked={isSelected} onChange={() => handleRowSelect(itemId)} />
                      </td>
                    )}
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className={`px-4 py-4 text-gray-700 text-theme-sm dark:text-gray-400 ${column.className || ''}`}>
                        {column.render(item as T, rowIndex)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ListPagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} onPageChange={handlePageChange} showPageInfo={true} showPageNumbers={true} />
    </div>
  );
}

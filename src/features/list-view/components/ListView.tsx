// components/ListView.tsx (제네릭 버전)
"use client";

import { ReactNode, useState, useMemo } from "react";
import ListHeader from "./ListHeader";
import ListPagination from "./ListPagination";
import { usePagination } from "../hooks/usePagination";
import MoreIcon from "./MoreIcon";
import TableDropdown from "@/shared/ui/table-dropdown/TableDropdown";

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
  onViewMore?: (item: T) => void;
  onDelete?: (item: T) => void;
  className?: string;
  searchFields?: (keyof T)[];
}

export default function ListView<T>({
  data,
  columns,
  title = "List View",
  searchPlaceholder = "Search...",
  itemsPerPage = 10,
  onViewMore,
  onDelete,
  className = "",
  searchFields = [],
}: ListViewProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 검색 필터링
  const filteredData = useMemo(() => {
    if (!searchTerm || searchFields.length === 0) return data;

    return data.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        return (
          value &&
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
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

  return (
    <div
      className={`rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ${className}`}
    >
      <ListHeader
        title={title}
        onSearch={handleSearch}
        showSearch={searchFields.length > 0}
        searchPlaceholder={searchPlaceholder}
      />

      <div className="overflow-hidden">
        <div className="max-w-full px-5 overflow-x-auto sm:px-6">
          <table className="w-full table-auto">
            <thead className="border-gray-100 border-y dark:border-white/[0.05]">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className={`px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400 ${
                      column.className || ""
                    }`}
                  >
                    {column.header}
                  </th>
                ))}
                {(onViewMore || onDelete) && (
                  <th className="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="relative">
                      <span className="sr-only">Action</span>
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {pagination.currentItems.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-4 py-4 text-gray-700 text-theme-sm dark:text-gray-400 ${
                        column.className || ""
                      }`}
                    >
                      {column.render(item, rowIndex)}
                    </td>
                  ))}
                  {(onViewMore || onDelete) && (
                    <td className="px-4 py-4 text-gray-700 text-theme-sm dark:text-gray-400">
                      <div className="relative inline-block">
                        <TableDropdown
                          dropdownButton={
                            <button className="text-gray-500 dark:text-gray-400">
                              <MoreIcon />
                            </button>
                          }
                          dropdownContent={
                            <>
                              {onViewMore && (
                                <button
                                  onClick={() => onViewMore(item)}
                                  className="text-xs flex w-full rounded-lg px-3 py-2 text-left font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                >
                                  상세보기
                                </button>
                              )}
                              {onDelete && (
                                <button
                                  onClick={() => onDelete(item)}
                                  className="text-xs flex w-full rounded-lg px-3 py-2 text-left font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                >
                                  삭제
                                </button>
                              )}
                            </>
                          }
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ListPagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
        showPageInfo={true}
        showPageNumbers={true}
      />
    </div>
  );
}

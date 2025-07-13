// components/ListView.tsx (제네릭 버전)
'use client';

import { ReactNode } from 'react';
import ListHeader from './ListHeader';
import ListPagination from './ListPagination';
import Checkbox from '@/shared/form/input/Checkbox';
import Pill from '@/shared/ui/pill/Pill';
import AdminListTableHeader, { ColumnConfig } from '@/widgets/admin-list/components/AdminListTableHeader';
import AdminListTableBody from '@/widgets/admin-list/components/AdminListTableBody';
import AdminListToolbar from '@/widgets/admin-list/components/AdminListToolbar';

export interface ListViewProps<T> {
  data: T[];
  itemsPerPage?: number;
  className?: string;
  headerButtons?: import('../types/components').HeaderButtonConfig[];
}

export default function ListView<T>({ data, itemsPerPage = 10, className = '', headerButtons }: ListViewProps<T>) {
  return (
    <div className={`rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ${className}`}>
      <AdminListToolbar />
      {/* <ListHeader title={title} onSearch={handleSearch} showSearch={searchFields.length > 0} searchPlaceholder={searchPlaceholder} buttons={headerButtons} /> */}
      <div className="overflow-x-auto max-w-full px-5 sm:px-6">
        <table className="w-full table-auto">
          <AdminListTableHeader />
          <AdminListTableBody data={data} />
        </table>
      </div>
      {/* 페이지네이션은 tbody와 분리되어야 하므로, 필요시 아래처럼 별도로 사용하세요.
      <ListPagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
        showPageInfo={true}
        showPageNumbers={true}
      /> */}
    </div>
  );
}

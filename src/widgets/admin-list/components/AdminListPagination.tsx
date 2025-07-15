// components/ListPagination.tsx
'use client';

import { PrevPageButton, NextPageButton, PageList } from '../renderers/paginationRenderers';

interface AdminListPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// 스타일 변수 정의
const styles = {
  container: ' flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-white/[0.05]',
};

const AdminListPagination = (props: AdminListPaginationProps) => {
  return (
    <div className={styles.container}>
      <PrevPageButton {...props} />
      <PageList {...props} />
      <NextPageButton {...props} />
    </div>
  );
};

export default AdminListPagination;

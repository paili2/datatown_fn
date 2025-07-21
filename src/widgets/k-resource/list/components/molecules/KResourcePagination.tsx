'use client';

import { NextPageButton, PageList, PrevPageButton } from './atoms/Pagination';

interface KResourcePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const styles = {
  container: ' flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-white/[0.05]',
};

const KResourcePagination = (props: KResourcePaginationProps) => {
  return (
    <div className={styles.container}>
      <PrevPageButton {...props} />
      <PageList {...props} />
      <NextPageButton {...props} />
    </div>
  );
};

export default KResourcePagination;

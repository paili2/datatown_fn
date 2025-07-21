import React from 'react';
import Button from '@/shared/ui/button/Button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { range } from '@/shared/utils/range';

// 스타일 객체
const styles = {
  prevText: 'hidden sm:inline',
  nextText: 'hidden sm:inline',
  pageNumberButtonBase: 'flex h-10 w-10 items-center justify-center rounded-lg text-theme-sm font-medium transition-colors',
  pageNumberButtonActive: 'bg-brand-500 text-white',
  pageNumberButtonInactive: 'text-gray-700 hover:bg-brand-500/[0.08] dark:hover:bg-brand-500 dark:hover:text-white hover:text-brand-500 dark:text-gray-400',
};

interface PrevPageButtonProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PrevPageButton = ({ currentPage, onPageChange }: PrevPageButtonProps) => (
  <Button size="sm" variant="outline" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
    <ChevronLeftIcon />
    <span className={styles.prevText}>이전</span>
  </Button>
);

interface NextPageButtonProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const NextPageButton = ({ currentPage, totalPages, onPageChange }: NextPageButtonProps) => (
  <Button size="sm" variant="outline" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
    <span className={styles.nextText}>다음</span>
    <ChevronRightIcon />
  </Button>
);

interface PageNumberButtonProps {
  pageNumber: number;
  isActive: boolean;
  onClick: (page: number) => void;
}

export const PageNumberButton = ({ pageNumber, isActive, onClick }: PageNumberButtonProps) => {
  const buttonClass = [styles.pageNumberButtonBase, isActive ? styles.pageNumberButtonActive : styles.pageNumberButtonInactive].join(' ');
  return (
    <button onClick={() => onClick(pageNumber)} className={buttonClass}>
      {pageNumber}
    </button>
  );
};

interface PageListProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PageList = ({ currentPage, totalPages, onPageChange }: PageListProps) => (
  <ul className="hidden items-center gap-0.5 sm:flex">
    {range(1, totalPages).map((pageNumber) => (
      <li key={pageNumber}>
        <PageNumberButton pageNumber={pageNumber} isActive={currentPage === pageNumber} onClick={onPageChange} />
      </li>
    ))}
  </ul>
);

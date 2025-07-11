// components/ListPagination.tsx
"use client";

import Button from "@/shared/ui/button/Button";
import { ListPaginationProps } from "../types/components";

export default function ListPagination({
  currentPage,
  totalPages,
  onPageChange,
  showPageInfo = true,
  showPageNumbers = true,
  className = "",
}: ListPaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 dark:border-white/[0.05] ${className}`}
    >
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <Button
          size="sm"
          variant="outline"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <PreviousIcon />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        {/* Page Info (Mobile) */}
        {showPageInfo && (
          <span className="block text-sm font-medium text-gray-700 dark:text-gray-400 sm:hidden">
            Page {currentPage} of {totalPages}
          </span>
        )}

        {/* Page Numbers (Desktop) */}
        {showPageNumbers && (
          <ul className="hidden items-center gap-0.5 sm:flex">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNumber = idx + 1;
              return (
                <li key={idx}>
                  <button
                    onClick={() => handlePageClick(pageNumber)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-theme-sm font-medium transition-colors ${
                      currentPage === pageNumber
                        ? "bg-brand-500 text-white"
                        : "text-gray-700 hover:bg-brand-500/[0.08] dark:hover:bg-brand-500 dark:hover:text-white hover:text-brand-500 dark:text-gray-400"
                    }`}
                  >
                    {pageNumber}
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* Next Button */}
        <Button
          onClick={handleNext}
          size="sm"
          variant="outline"
          disabled={currentPage === totalPages}
        >
          <span className="hidden sm:inline">Next</span>
          <NextIcon />
        </Button>
      </div>
    </div>
  );
}

// Previous Icon Component
function PreviousIcon() {
  return (
    <svg
      className="fill-current"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.58301 9.99868C2.58272 10.1909 2.65588 10.3833 2.80249 10.53L7.79915 15.5301C8.09194 15.8231 8.56682 15.8233 8.85981 15.5305C9.15281 15.2377 9.15297 14.7629 8.86018 14.4699L5.14009 10.7472L16.6675 10.7472C17.0817 10.7472 17.4175 10.4114 17.4175 9.99715C17.4175 9.58294 17.0817 9.24715 16.6675 9.24715L5.14554 9.24715L8.86017 5.53016C9.15297 5.23717 9.15282 4.7623 8.85983 4.4695C8.56684 4.1767 8.09197 4.17685 7.79917 4.46984L2.84167 9.43049C2.68321 9.568 2.58301 9.77087 2.58301 9.99715C2.58301 9.99766 2.58301 9.99817 2.58301 9.99868Z"
        fill=""
      />
    </svg>
  );
}

// Next Icon Component
function NextIcon() {
  return (
    <svg
      className="fill-current"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z"
        fill=""
      />
    </svg>
  );
}

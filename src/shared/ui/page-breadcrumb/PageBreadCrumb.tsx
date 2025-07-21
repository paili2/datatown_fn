'use client';

import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const PageBreadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbItems = pathname.split('/').filter(Boolean);

  const getHref = (index: number) => '/' + breadcrumbItems.slice(0, index + 1).join('/');
  const isLastItem = (index: number) => index !== breadcrumbItems.length - 1;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <nav>
        <ol className="flex items-center gap-1.5">
          {breadcrumbItems.map((item, index) => (
            <li key={index}>
              <Link className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400" href={getHref(index)}>
                {item}
                {isLastItem(index) && <ChevronRightIcon className="w-4 h-4" />}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Partners Dashboard | DataTown',
  description: 'Partners dashboard page for DataTown platform',
};

export default function PartnersDashboard() {
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">Partners Dashboard</h3>
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">파트너스 대시보드 페이지입니다.</p>
        </div>
      </div>
    </div>
  );
}

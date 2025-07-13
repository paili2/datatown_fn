import { ReactNode } from 'react';
import { adminColumns } from '../config/columns';

export interface ColumnConfig<T> {
  key: keyof T;
  header: string;
  render: (item: T, index: number) => ReactNode;
  className?: string;
}

const AdminListTableHeader = () => {
  return (
    <>
      <thead className="border-gray-100 border-y dark:border-white/[0.05]">
        <tr>
          {adminColumns.map((column, index) => (
            <th key={String(column.key) + index} className={`px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400 ${column.className || ''}`}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default AdminListTableHeader;

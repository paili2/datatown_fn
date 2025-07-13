import { AdminAuth } from '@/features/admin-list/types';
import { adminColumns } from './config/columns';

const AdminListTableBody = <T,>({ data }: { data: T[] }) => {
  return (
    <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
      {data.map((item, rowIndex) => {
        return (
          <tr key={rowIndex}>
            {adminColumns.map((column, colIndex) => (
              <td key={colIndex} className={`px-4 py-4 text-gray-700 text-theme-sm dark:text-gray-400 ${column.className || ''}`}>
                {column.render(item as AdminAuth, rowIndex)}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default AdminListTableBody;

import { AdminUser } from '@/features/admin-list/types';
import { TableRow } from '@/shared/ui/table';
import { renderCells } from '../renderers/columnRenderer';

interface TableBodyProps {
  adminUsers: AdminUser[];
}

const styles = {
  tableBody: 'divide-y divide-gray-100 dark:divide-white/[0.05]',
  tableCell: 'px-4 py-4 text-gray-700 text-theme-sm dark:text-gray-400',
};

const AdminListTableBody = ({ adminUsers }: TableBodyProps) => (
  <tbody className={styles.tableBody}>
    {adminUsers.map((user) => (
      <TableRow key={user.id}>
        {renderCells({
          variant: 'body',
          user,
          cellClass: styles.tableCell,
        })}
      </TableRow>
    ))}
  </tbody>
);

export default AdminListTableBody;

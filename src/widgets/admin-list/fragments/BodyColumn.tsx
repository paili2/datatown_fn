import { TableCell } from '@/shared/ui/table';
import { adminColumns } from '../configs/columns';
import { AdminUser } from '@/entities/admins/model';

interface BodyColumnProps {
  cellClass: string;
  user: AdminUser;
}

const BodyColumn = ({ cellClass, user }: BodyColumnProps) => {
  return adminColumns.map((col) => (
    <TableCell key={String(col.key)} className={`${cellClass} ${col.className}`}>
      {col.render(user)}
    </TableCell>
  ));
};

export default BodyColumn;

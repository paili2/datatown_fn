import { TableCell } from '@/shared/ui/table';
import { adminColumns } from '../configs/columns';

interface HeaderColumnProps {
  cellClass: string;
}

const HeaderColumn = ({ cellClass }: HeaderColumnProps) => {
  return adminColumns.map((col) => (
    <TableCell key={String(col.key)} className={`${cellClass} ${col.className}`}>
      {col.header}
    </TableCell>
  ));
};

export default HeaderColumn;

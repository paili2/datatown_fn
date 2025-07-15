import { TableCell } from '@/shared/ui/table';
import { kResourceColumns } from '../configs/columns';

interface HeaderColumnProps {
  cellClass: string;
}

const HeaderColumn = ({ cellClass }: HeaderColumnProps) => {
  return kResourceColumns.map((col) => (
    <TableCell key={String(col.key)} className={`${cellClass} ${col.className}`}>
      {col.header}
    </TableCell>
  ));
};

export default HeaderColumn;

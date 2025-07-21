import { TableCell } from '@/shared/ui/table';
import { staffsColumns } from '../../configs/columns';
import { Staff } from '@/entities/staffs/model';

interface BodyColumnProps {
  cellClass: string;
  staff: Staff;
}

const BodyColumn = ({ cellClass, staff }: BodyColumnProps) => {
  return staffsColumns.map((col) => (
    <TableCell key={String(col.key)} className={`${cellClass} ${col.className}`}>
      {col.render(staff)}
    </TableCell>
  ));
};

export default BodyColumn;

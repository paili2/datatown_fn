import { TableCell } from '@/shared/ui/table';
import { kResourceColumns } from '../configs/columns';
import { KResource } from '@/entities/k-resources/model';

interface BodyColumnProps {
  cellClass: string;
  kResource: KResource;
}

const BodyColumn = ({ cellClass, kResource }: BodyColumnProps) => {
  return kResourceColumns.map((col) => (
    <TableCell key={String(col.key)} className={`${cellClass} ${col.className}`}>
      {col.render(kResource)}
    </TableCell>
  ));
};

export default BodyColumn;

import { TableCell } from '@/shared/ui/table';
import { kResourceColumns } from '../../configs/columns';
import { KResource } from '@/entities/k-resources/model';
import Link from 'next/link';

interface BodyColumnProps {
  cellClass: string;
  kResource: KResource;
}

const BodyColumn = ({ cellClass, kResource }: BodyColumnProps) => {
  return kResourceColumns.map((col) => (
    <TableCell key={String(col.key)} className={`${cellClass} ${col.className}`}>
      <Link href={`/k-resources/my-resources/${kResource.resource_id}`}>{col.render(kResource)}</Link>
    </TableCell>
  ));
};

export default BodyColumn;

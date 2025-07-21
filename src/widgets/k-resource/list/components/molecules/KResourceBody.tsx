import { KResource } from '@/entities/k-resources/model';
import { TableRow } from '@/shared/ui/table';
import BodyColumn from '../atoms/BodyColumn';

interface TableBodyProps {
  kResources: KResource[];
}

const styles = {
  tableBody: 'divide-y divide-gray-100 dark:divide-white/[0.05]',
  tableCell: 'px-4 py-4 text-gray-700 text-theme-sm dark:text-gray-400',
};

const KResourceTableBody = ({ kResources }: TableBodyProps) => (
  <tbody className={styles.tableBody}>
    {kResources.map((kResource) => (
      <TableRow key={kResource.resource_id}>
        <BodyColumn cellClass={styles.tableCell} kResource={kResource} />
      </TableRow>
    ))}
  </tbody>
);

export default KResourceTableBody;

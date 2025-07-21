import { Staff } from '@/entities/staffs/model';
import { TableRow } from '@/shared/ui/table';
import BodyColumn from '../atoms/BodyColumn';

interface TableBodyProps {
  staffs: Staff[];
}

const styles = {
  tableBody: 'divide-y divide-gray-100 dark:divide-white/[0.05]',
  tableCell: 'px-4 py-4 text-gray-700 text-theme-sm dark:text-gray-400',
};

const StaffsTableBody = ({ staffs }: TableBodyProps) => (
  <tbody className={styles.tableBody}>
    {staffs.map((staff) => (
      <TableRow key={staff.id}>
        <BodyColumn cellClass={styles.tableCell} staff={staff} />
      </TableRow>
    ))}
  </tbody>
);

export default StaffsTableBody;

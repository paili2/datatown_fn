import { TableRow } from '@/shared/ui/table';
import HeaderColumn from '../atoms/HeaderColumn';

const styles = {
  tableHeader: 'border-gray-100 border-y dark:border-white/[0.05]',
  tableHeaderCell: 'px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400',
};

const StaffsTableHeader = () => (
  <thead className={styles.tableHeader}>
    <TableRow>
      <HeaderColumn cellClass={styles.tableHeaderCell} />
    </TableRow>
  </thead>
);

export default StaffsTableHeader;

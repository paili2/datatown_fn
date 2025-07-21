import StaffsTableBody from './components/molecules/StaffsTableBody';
import StaffsTableHeader from './components/molecules/StaffsTableHeader';
import StaffsToolbar from './components/molecules/StaffsToolbar';
import { Staff } from '@/entities/staffs/model';
import StaffsPagination from './components/molecules/StaffsPagination';
import PageBreadcrumb from '@/shared/ui/page-breadcrumb/PageBreadCrumb';
import { usePagination } from './hooks/usePagination';

export interface StaffsWidgetProps {
  data: Staff[];
  pageSize?: number;
}

const styles = {
  container: 'rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1',
  table: 'w-full table-auto border-collapse',
};

const StaffsWidget = ({ data, pageSize = 10 }: StaffsWidgetProps) => {
  const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination({
    data,
    pageSize,
  });

  return (
    <>
      <PageBreadcrumb />
      <div className={styles.container}>
        <StaffsToolbar />
        <table className={styles.table}>
          <StaffsTableHeader />
          <StaffsTableBody staffs={paginatedData} />
        </table>
        <StaffsPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </>
  );
};

export default StaffsWidget;

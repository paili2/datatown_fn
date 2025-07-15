import AdminListTableBody from './components/AdminListTableBody';
import AdminListTableHeader from './components/AdminListTableHeader';
import AdminListToolbar from './components/AdminListToolbar';
import { AdminUser } from '@/entities/admins/model';
import AdminListPagination from './components/AdminListPagination';
import PageBreadcrumb from '@/shared/ui/page-breadcrumb/PageBreadCrumb';
import { usePagination } from './hooks/usePagination';

export interface AdminListWidgetProps {
  data: AdminUser[];
  pageSize?: number;
}

const styles = {
  container: 'rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1',
  table: 'w-full table-auto border-collapse',
};

const AdminListWidget = ({ data, pageSize = 10 }: AdminListWidgetProps) => {
  const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination({
    data,
    pageSize,
  });

  return (
    <>
      <PageBreadcrumb pageTitle="Internal Accounts" />
      <div className={styles.container}>
        <AdminListToolbar />
        <table className={styles.table}>
          <AdminListTableHeader />
          <AdminListTableBody adminUsers={paginatedData} />
        </table>
        <AdminListPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </>
  );
};

export default AdminListWidget;

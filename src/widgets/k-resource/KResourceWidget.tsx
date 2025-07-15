import { KResource } from '@/entities/k-resources/model';
import PageBreadcrumb from '@/shared/ui/page-breadcrumb/PageBreadCrumb';
import KResourceToolbar from './components/KResourceToolbar';
import KResourceHeader from './components/KResourceHeader';
import KResourceTableBody from './components/KResoruceBody';
import KResourcePagination from './components/KResourcePagination';
import { usePagination } from './hooks/usePagination';

export interface KResourceWidgetProps {
  data: KResource[];
  pageSize?: number;
}

const styles = {
  container: 'rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1',
  table: 'w-full table-auto border-collapse',
};

const KResourceWidget = ({ data, pageSize = 10 }: KResourceWidgetProps) => {
  const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination({
    data,
    pageSize,
  });

  return (
    <>
      <PageBreadcrumb pageTitle="K-Resource Management" />
      <div className={styles.container}>
        <KResourceToolbar />
        <table className={styles.table}>
          <KResourceHeader />
          <KResourceTableBody kResources={paginatedData} />
        </table>
        <KResourcePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </>
  );
};

export default KResourceWidget;

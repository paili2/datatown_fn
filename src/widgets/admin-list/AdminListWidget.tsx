import AdminListTableBody from './components/AdminListTableBody';
import AdminListTableHeader from './components/AdminListTableHeader';
import AdminListToolbar from './components/AdminListToolbar';

export interface AdminListWidgetProps<T> {
  data: T[];
  itemsPerPage?: number;
  className?: string;
}

const AdminListWidget = <T,>({ data, itemsPerPage = 10, className = '' }: AdminListWidgetProps<T>) => {
  return (
    <div className={`rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 ${className}`}>
      <AdminListToolbar />
      <table className="w-full table-auto">
        <AdminListTableHeader />
        <AdminListTableBody data={data} />
      </table>
    </div>
  );
};

export default AdminListWidget;

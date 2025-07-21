import TaskList from '@/widgets/main/task-list/TaskList';
import PageBreadcrumb from '@/shared/ui/page-breadcrumb/PageBreadCrumb';

const ProjectsDashboardPage = () => {
  return (
    <div>
      <PageBreadcrumb />
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <TaskList />
      </div>
    </div>
  );
};

export default ProjectsDashboardPage;

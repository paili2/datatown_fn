import { PendingPartners } from '@/entities/pendingpartners/model';
import PageBreadcrumb from '@/shared/ui/page-breadcrumb/PageBreadCrumb';
import PendingPartnersItem from './components/PendingPartnersItem';

export default function PendingPartnersWidget({ data }: { data: PendingPartners[] }) {
  return (
    <>
      <PageBreadcrumb pageTitle="Pending Partners" />
      <div>
        {data.map((task) => (
          <PendingPartnersItem key={task.id} {...task} />
        ))}
      </div>
    </>
  );
}

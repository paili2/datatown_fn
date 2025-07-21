'use client';

import { PendingPartners } from '@/entities/pendingpartners/model';
import PageBreadcrumb from '@/shared/ui/page-breadcrumb/PageBreadCrumb';
import PendingPartnersItem from './components/molecules/PendingPartnersItem';
import usePendingPartnerActions from './hooks/usePendingPartnerActions';

export default function PendingPartnersWidget({ data }: { data: PendingPartners[] }) {
  const { pendingPartners, handleApprove, handleReject } = usePendingPartnerActions(data);
  return (
    <>
      <PageBreadcrumb />
      <div>
        {pendingPartners.map((partner) => (
          <PendingPartnersItem key={partner.id} {...partner} onApprove={() => handleApprove(partner.id)} onReject={() => handleReject(partner.id)} />
        ))}
      </div>
    </>
  );
}

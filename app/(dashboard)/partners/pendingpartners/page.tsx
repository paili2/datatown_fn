import PendingPartnersWidget from '@/widgets/pendingpartners/PendingPartnersWidget';
import { initialPendingPartners } from '@/entities/pendingpartners/api/partnersList';

export default function PendingPartnersPage() {
  return (
    <>
      <PendingPartnersWidget data={initialPendingPartners} />
    </>
  );
}

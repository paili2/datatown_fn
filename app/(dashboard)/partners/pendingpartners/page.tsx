import { mockPendingPartnersData } from '@/entities/pendingpartners/api/mockData';
import PendingPartnersWidget from '@/widgets/pendingpartners/PendingPartnersWidget';

export default function PendingPartnersPage() {
  return (
    <>
      <PendingPartnersWidget data={mockPendingPartnersData} />
    </>
  );
}

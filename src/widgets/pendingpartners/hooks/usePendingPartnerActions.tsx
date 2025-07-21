import { PendingPartners } from '@/entities/pendingpartners/model';
import { useState } from 'react';

const usePendingPartnerActions = (data: PendingPartners[]) => {
  const [pendingPartners, setPendingPartners] = useState<PendingPartners[]>(data);

  const handleApprove = async (id: string) => {
    const next = pendingPartners.filter((item) => item.id !== id);
    setPendingPartners(next);

    try {
      await fetch(`/api/partners/${id}/approve`, { method: 'POST' });
    } catch (error) {
      setPendingPartners(pendingPartners);
      alert('처리 실패!');
    }
  };

  const handleReject = async (id: string) => {
    const next = pendingPartners.filter((item) => item.id !== id);
    setPendingPartners(next);

    try {
      await fetch(`/api/partners/${id}/reject`, { method: 'POST' });
    } catch (error) {
      setPendingPartners(pendingPartners);
      alert('처리 실패!');
    }
  };
  return { pendingPartners, handleApprove, handleReject };
};

export default usePendingPartnerActions;

import React from 'react';
import { PendingPartners } from '../../../../entities/pendingpartners/model';
import { PartnerInfo } from '../atoms/PartnerInfo';
import { PartnerMeta } from '../atoms/PartnerMeta';
import { PartnerActions, PartnerActionsProps } from '../atoms/PartnerActions';

const PendingPartnersItem = (props: PendingPartners & PartnerActionsProps) => {
  return (
    <div className="flex justify-between items-center gap-4 shrink-0 p-5 mb-4 bg-white border border-gray-200 rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5">
      <PartnerInfo {...props} />
      <PartnerMeta {...props} />
      <PartnerActions {...props} />
    </div>
  );
};

export default PendingPartnersItem;

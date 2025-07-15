import React from 'react';
import { PendingPartners } from '../../../entities/pendingpartners/model';
import { PartnerActions, PartnerInfo, PartnerMeta } from '../fragments/PartnerFragments';

const PendingPartnersItem: React.FC<PendingPartners> = ({ id, company_name, account_type, grade, request_at, primary_contact_name }) => {
  return (
    <div className="flex justify-between items-center gap-4 shrink-0 p-5 mb-4 bg-white border border-gray-200 rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5">
      <PartnerInfo id={id} company_name={company_name} />
      <PartnerMeta account_type={account_type} grade={grade} request_at={request_at} primary_contact_name={primary_contact_name} />
      <PartnerActions />
    </div>
  );
};

export default PendingPartnersItem;

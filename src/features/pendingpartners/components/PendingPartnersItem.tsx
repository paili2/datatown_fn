import React from "react";
import { PendingPartners } from "../types/components";
import Button from "@/shared/ui/button/Button";

const PendingPartnersItem: React.FC<PendingPartners> = ({
  id,
  company_name,
  account_type,
  grade,
  request_at,
  primary_contact_name,
}) => {
  return (
    <div className="p-5 mb-4 bg-white border border-gray-200 rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5">
      <div className="flex flex-col gap-5 xl:flex-row">
        <div className="flex items-center justify-between w-full gap-8">
          <div className="flex items-center gap-4 w-[150px] shrink-0">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90 w-[50px] truncate">
              #{id}
            </h3>
            <p className="text-base font-medium text-gray-800 dark:text-white/90 w-[80px] truncate">
              {account_type}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[180px] shrink-0">
            <p className="text-lg text-gray-800 dark:text-white/90 truncate">
              {company_name}
            </p>
            <p className="text-sm text-gray-800 dark:text-white/90 truncate">
              {request_at}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[120px] shrink-0">
            <p className="text-base text-gray-800 dark:text-white/90 truncate">
              {account_type}
            </p>
            <p className="text-base text-gray-800 dark:text-white/90 truncate">
              {grade}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[180px] shrink-0">
            <p className="text-base text-gray-800 dark:text-white/90 truncate">
              담당자: {primary_contact_name}
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Button size="sm" variant="outline">
              수락
            </Button>
            <Button size="sm" variant="outline">
              거절
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingPartnersItem;

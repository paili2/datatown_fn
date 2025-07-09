"use client";

import React from "react";
import PendingPartnersHeader from "./PendingPartnersHeader";
import PendingPartnersLane from "./PendingPartnersLane";
import { initialPendingPartners } from "../data/data";

export default function PendingPartnersList() {
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <PendingPartnersHeader />
        <div className="p-4 space-y-8 border-t border-gray-200 mt-7 dark:border-gray-800 sm:mt-0 xl:p-6">
          <PendingPartnersLane tasks={initialPendingPartners} />
        </div>
      </div>
    </div>
  );
}

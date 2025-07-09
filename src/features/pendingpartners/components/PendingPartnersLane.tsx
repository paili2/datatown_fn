"use client";
import React from "react";
import PendingPartnersItem from "./PendingPartnersItem";
import { PendingPartners } from "../types/components";

interface PendingPartnersLaneProps {
  tasks: PendingPartners[];
}

const PendingPartnersLane: React.FC<PendingPartnersLaneProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <PendingPartnersItem key={task.id} {...task} />
      ))}
    </div>
  );
};

export default PendingPartnersLane;

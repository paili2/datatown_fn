"use client";

import { HeaderButtonConfig } from "@/widgets/list-view/types/components";

export function useKResourcesListActions() {
  const handleAdd = () => {
    console.log("K-Resources 추가");
    // 여기에 K-Resources 추가 로직 추가하면 됨
  };

  const headerButtons: HeaderButtonConfig[] = [
    {
      text: "리소스 추가",
      handler: handleAdd,
      variant: "outline",
    },
  ];

  return {
    headerButtons,
    handleAdd,
  };
}

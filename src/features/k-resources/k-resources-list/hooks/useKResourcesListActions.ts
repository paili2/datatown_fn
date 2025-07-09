"use client";

import { ListViewActionsConfig } from "@/widgets/list-view/types/components";

export function useKResourcesListActions() {
  const handleAdd = () => {
    console.log("K-Resources 추가");
    // 여기에 K-Resources 추가 로직 추가하면 됨
  };

  const config: ListViewActionsConfig = {
    headerButtons: {
      buttons: [
        {
          text: "리소스 추가",
          handler: handleAdd,
          variant: "outline",
        },
      ],
    },
  };

  return {
    config,
    handleAdd,
  };
}

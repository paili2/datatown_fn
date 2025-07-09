"use client";

import { ListViewActionsConfig } from "@/widgets/list-view/types/components";

export function useAdminListActions() {
  const handleAdd = () => {
    console.log("관리자 추가");
    // 여기에 관리자 추가 로직 추가하면 됨
  };

  const handleDelete = () => {
    console.log("관리자 일괄 삭제");
    // 여기에 일괄 삭제 로직 추가하면 됨
  };

  const config: ListViewActionsConfig = {
    headerButtons: {
      buttons: [
        {
          text: "추가",
          handler: handleAdd,
          variant: "success",
        },
        {
          text: "삭제",
          handler: handleDelete,
          variant: "danger",
        },
      ],
    },
  };

  return {
    config,
    handleAdd,
    handleDelete,
  };
}

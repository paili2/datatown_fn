"use client";

import Badge from "@/shared/ui/badge/Badge";
import { ListView, ColumnConfig } from "@/widgets/list-view";
import { adminData } from "../data/adminList";
import { AdminAuth } from "../types";
import { useAdminListActions } from "../hooks/useAdminListActions";

export default function AdminListView() {
  const { headerButtons } = useAdminListActions();

  const adminColumns: ColumnConfig<AdminAuth>[] = [
    {
      key: "id",
      header: "관리자 ID",
      render: (item) => <span className="font-medium">{item.id}</span>,
    },
    {
      key: "name",
      header: "이름",
      render: (item) => <span className="font-medium">{item.name}</span>,
    },
    {
      key: "authority",
      header: "권한",
      render: (item) => {
        const getAuthorityColor = (authority: string) => {
          switch (authority) {
            case "Admin":
              return "danger";
            case "Manager":
              return "success";
            case "Operator":
              return "primary";
            default:
              return "light";
          }
        };

        return (
          <Badge size="sm" color={getAuthorityColor(item.authority)}>
            {item.authority}
          </Badge>
        );
      },
    },
    {
      key: "status",
      header: "상태",
      render: (item) => {
        const getStatusColor = (status: string) => {
          switch (status) {
            case "Active":
              return "success";
            case "InActive":
              return "danger";
            default:
              return "light";
          }
        };

        return (
          <Badge size="sm" color={getStatusColor(item.status)}>
            {item.status}
          </Badge>
        );
      },
    },
    {
      key: "signup_date",
      header: "가입일",
      render: (item) => item.signup_date,
    },
    {
      key: "last_login",
      header: "최근 로그인",
      render: (item) => item.last_login,
    },
  ];

  return (
    <ListView
      data={adminData}
      columns={adminColumns}
      title="관리자 목록"
      searchPlaceholder="관리자 검색..."
      searchFields={["name", "id", "authority"]}
      showCheckbox={true}
      headerButtons={headerButtons}
      onSelectionChange={(selectedIds) => {
        console.log("선택된 ID들:", selectedIds);
      }}
      getItemId={(item) => item.id.toString()}
    />
  );
}

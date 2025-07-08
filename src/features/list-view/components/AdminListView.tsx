"use client";

import Badge from "@/shared/ui/badge/Badge";
import { Admin } from "../types/components";
import ListView, { ColumnConfig } from "./ListView";
import { adminData } from "../data/adminList";

export default function AdminListView() {
  const adminColumns: ColumnConfig<Admin>[] = [
    {
      key: "id",
      header: "ID",
      render: (item) => <span className="font-medium">{item.id}</span>,
    },
    {
      key: "name",
      header: "Name",
      render: (item) => <span className="font-medium">{item.name}</span>,
    },
    {
      key: "authority",
      header: "Authority",
      render: (item) => {
        const getAuthorityColor = (authority: string) => {
          switch (authority) {
            case "Operator":
              return "error";
            case "Manager":
              return "warning";
            case "Admin":
              return "success";
            default:
              return "primary";
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
      key: "signup_date",
      header: "Signup Date",
      render: (item) => item.signup_date,
    },
    {
      key: "status",
      header: "Status",
      render: (item) => {
        const getStatusColor = (status: string) => {
          switch (status) {
            case "Active":
              return "success";
            case "InActive":
              return "error";
            default:
              return "primary";
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
      key: "last_login",
      header: "Last Login",
      render: (item) => item.last_login,
    },
  ];

  const handleViewMore = (item: Admin) => {
    console.log("View more:", item);
    // 여기에 상세 보기 로직 추가
  };

  const handleDelete = (item: Admin) => {
    console.log("Delete:", item);
    // 여기에 삭제 로직 추가
  };

  return (
    <ListView
      data={adminData}
      columns={adminColumns}
      title="관리자 목록"
      searchPlaceholder="관리자 검색..."
      searchFields={["name", "id", "authority"]}
      onViewMore={handleViewMore}
      onDelete={handleDelete}
    />
  );
}

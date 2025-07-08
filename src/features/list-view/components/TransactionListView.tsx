"use client";

import Badge from "@/shared/ui/badge/Badge";
import { Transaction } from "../types/components";
import ListView, { ColumnConfig } from "./ListView";
import { transactionData } from "../data/transAction";

export default function TransactionListView() {
  const transactionColumns: ColumnConfig<Transaction>[] = [
    {
      key: "image",
      header: "User",
      render: (item) => (
        <div className="flex items-center gap-3">
          <img src={item.image} alt="User" className="h-8 w-8 rounded-full" />
        </div>
      ),
    },
    {
      key: "action",
      header: "Action",
      render: (item) => <span className="font-medium">{item.action}</span>,
    },
    {
      key: "date",
      header: "Date",
      render: (item) => item.date,
    },
    {
      key: "amount",
      header: "Amount",
      render: (item) => <span className="font-medium">{item.amount}</span>,
    },
    {
      key: "category",
      header: "Category",
      render: (item) => item.category,
    },
    {
      key: "status",
      header: "Status",
      render: (item) => {
        const getStatusColor = (status: string) => {
          switch (status) {
            case "Success":
              return "success";
            case "Failed":
              return "warning";
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
  ];

  const handleViewMore = (item: Transaction) => {
    console.log("View transaction:", item);
  };

  const handleDelete = (item: Transaction) => {
    console.log("Delete transaction:", item);
  };

  return (
    <ListView
      data={transactionData}
      columns={transactionColumns}
      title="Latest Transactions"
      searchPlaceholder="Search transactions..."
      searchFields={["action", "category"]}
      onViewMore={handleViewMore}
      onDelete={handleDelete}
    />
  );
}

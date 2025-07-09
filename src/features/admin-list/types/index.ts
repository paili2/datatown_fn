export interface AdminAuth {
  id: string;
  name: string;
  authority: "Operator" | "Manager" | "Admin";
  signup_date: string;
  status: "Active" | "InActive";
  last_login: string;
}

import { User } from "lucide-react";
import { NavItem } from "../types";

export const authItems: NavItem[] = [
  {
    icon: <User />,
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin", pro: false },
      { name: "Sign Up", path: "/signup", pro: false },
    ],
  },
];

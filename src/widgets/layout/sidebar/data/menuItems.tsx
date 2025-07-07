import { NavItem } from "../types";
import {
  Folder,
  Grid2X2Icon,
  Rows3,
  Sheet,
  StickyNote,
  UserCircle2Icon,
  Users,
} from "lucide-react";

export const menuItems: NavItem[] = [
  {
    icon: <Grid2X2Icon />,
    name: "대시보드",
    path: "/",
  },
  {
    name: "파트너",
    icon: <UserCircle2Icon />,
    subItems: [
      { name: "파트너사 리스트", path: "/partners" },
      { name: "우리 회사 상세 페이지", path: "/partners/me" },
    ],
  },
  {
    icon: <StickyNote />,
    name: "K리소스",
    subItems: [
      { name: "K-Resources 리스트", path: "/k-resources" },
      { name: "우리 회사 K-Resources", path: "/k-resources/me" },
    ],
  },
  {
    icon: <Folder />,
    name: "관리",
    subItems: [
      { name: "프로젝트 리스트", path: "/project/active" },
      { name: "컨소시엄 리스트", path: "/consortium/active" },
      { name: "계약 및 정산 목록", path: "/contracts" },
      { name: "조직", path: "/company" },
      { name: "내부 관리자", path: "/system/admins" },
    ],
  },
  // {
  //   icon: <Folder />,
  //   name: "Project List",
  //   subItems: [
  //     { name: "참여중인 프로젝트", path: "/project/active", ongoing: true },
  //     { name: "참여한 프로젝트", path: "/project/archived" },
  //   ],
  // },
  // {
  //   icon: <Rows3 />,
  //   name: "Consortium List",
  //   subItems: [
  //     { name: "참여중인 컨소시엄", path: "/consortium/active", ongoing: true },
  //     { name: "참여한 컨소시엄", path: "/consortium/archived" },
  //   ],
  // },
  // {
  //   icon: <Sheet />,
  //   name: "Contract & Settlement List",
  //   path: "/contracts",
  // },
  // {
  //   icon: <Users />,
  //   name: "Organization",
  //   path: "/company",
  // },
  // {
  //   icon: <UserCircle2Icon />,
  //   name: "Internal Admins",
  //   path: "/system/admins",
  // },
];

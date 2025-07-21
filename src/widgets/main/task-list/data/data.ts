import { Task } from "../types/Task";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Finish user onboarding",
    isChecked: false,
    dueDate: "Tomorrow",
    commentCount: 1,
    category: "Marketing",
    userAvatar: "/images/user/user-01.jpg",
    status: "신규 접수",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "2",
    title: "Solve the Dribble prioritization issue with the team",
    isChecked: false,
    dueDate: "Tomorrow",
    commentCount: 2,
    category: "Marketing",
    userAvatar: "/images/user/user-02.jpg",
    status: "신규 접수",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "3",
    title: "Finish user onboarding",
    isChecked: true,
    dueDate: "Feb 12, 2024",
    commentCount: 1,
    category: "Marketing",
    userAvatar: "/images/user/user-03.jpg",
    status: "신규 접수",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "4",
    title: "Work in Progress (WIP) Dashboard",
    isChecked: false,
    dueDate: "Jan 8, 2027",
    commentCount: 2,
    category: "Template",
    userAvatar: "/images/user/user-04.jpg",
    status: "검토 중",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "5",
    title: "Product Update - Q4 2024",
    isChecked: false,
    dueDate: "Jan 8, 2027",
    commentCount: 2,
    userAvatar: "/images/user/user-05.jpg",
    status: "검토 중",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "6",
    title: "Kanban Flow Manager",
    isChecked: true,
    dueDate: "Jan 8, 2027",
    commentCount: 2,
    userAvatar: "/images/user/user-06.jpg",
    status: "검토 중",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "7",
    title: "Make internal feedback",
    isChecked: false,
    dueDate: "Jan 8, 2027",
    commentCount: 2,
    userAvatar: "/images/user/user-07.jpg",
    status: "검토 중",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "8",
    title: "Do some projects on React Native with Flutter",
    isChecked: false,
    dueDate: "Feb 12, 2027",
    commentCount: 1,
    category: "Marketing",
    userAvatar: "/images/user/user-08.jpg",
    status: "완료",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "9",
    title: "Design marketing assets",
    isChecked: false,
    dueDate: "Feb 12, 2027",
    commentCount: 1,
    category: "Marketing",
    userAvatar: "/images/user/user-09.jpg",
    status: "완료",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "10",
    title: "Kanban Flow Manager",
    isChecked: false,
    dueDate: "Feb 12, 2027",
    commentCount: 1,
    category: "Marketing",
    userAvatar: "/images/user/user-10.jpg",
    status: "완료",
    toggleChecked: () => {}, // This will be replaced
  },
  {
    id: "11",
    title: "Change license and remove products",
    isChecked: false,
    dueDate: "Feb 12, 2027",
    commentCount: 1,
    category: "Marketing",
    userAvatar: "/images/user/user-11.jpg",
    status: "완료",
    toggleChecked: () => {}, // This will be replaced
  },
];

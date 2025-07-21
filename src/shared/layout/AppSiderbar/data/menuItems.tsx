import { Folder, FolderArchive, Grid2X2Icon, Projector, UserCircle2Icon } from 'lucide-react';

export type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
  subItems?: { name: string; path: string; pro?: boolean; ongoing?: boolean }[];
};

export const menuItems: NavItem[] = [
  {
    icon: <Grid2X2Icon />,
    name: 'Dashboard',
    path: '/',
  },
  {
    icon: <Projector />,
    name: 'Project',
    path: '/',
    subItems: [{ name: '프로젝트 대시보드', path: '/projects/dashboard' }],
  },
  {
    name: 'Partners',
    icon: <UserCircle2Icon />,
    path: '/',
    subItems: [
      { name: '대시보드', path: '/partners/dashboard' },
      { name: '내 프로젝트', path: '/partners/my-projects' },
      { name: '내 컨소시엄', path: '/partners/my-consortiums' },
      { name: '챗봇', path: '/partners/chatbot' },
      { name: '승인 대기 파트너', path: '/partners/pendingpartners' },
    ],
  },
  {
    icon: <FolderArchive />,
    name: 'K-Resources',
    path: '/',
    subItems: [
      { name: 'K-리소스 대시보드', path: '/k-resources/dashboard' },
      { name: 'K-리소스 리스트', path: '/k-resources/my-resources' },
      { name: 'K-리소스 챗봇', path: '/k-resources/chatbot' },
    ],
  },
  {
    icon: <Folder />,
    name: 'Management',
    path: '/',
    subItems: [
      { name: '내부 계정', path: '/managements/internal-accounts' },
      { name: '스태프', path: '/managements/staffs' },
    ],
  },
];

import { AdminAuth } from '@/features/admin-list/types';
import Pill from '@/shared/ui/pill/pill';
import { ColumnConfig } from '../AdminListTableHeader';
import Badge, { BadgeColor } from '@/shared/ui/badge/Badge';

type Status = 'Active' | 'InActive';
type BadgeMapping<K extends string, V extends BadgeColor> = Record<K, V>;
const statusColor: BadgeMapping<Status, BadgeColor> = {
  Active: 'success',
  InActive: 'danger',
};

const renderBadge = <K extends string, V extends BadgeColor>(itemValue: K, mapping: BadgeMapping<K, V>) => {
  return (
    <Badge size="sm" color={mapping[itemValue]}>
      {itemValue}
    </Badge>
  );
};

export const adminColumns: ColumnConfig<AdminAuth>[] = [
  {
    key: 'id',
    header: '관리자 ID',
    render: (item) => <span className="font-medium">{item.id}</span>,
  },
  {
    key: 'name',
    header: '이름',
    render: (item) => <span className="font-medium">{item.name}</span>,
  },
  {
    key: 'authority',
    header: '권한',
    render: (item) => (
      <Pill color="default" variant="primary">
        {item.authority}
      </Pill>
    ),
  },
  {
    key: 'signup_date',
    header: '가입일',
    render: (item) => item.signup_date,
  },
  {
    key: 'status',
    header: '상태',
    render: (item) => renderBadge(item.status, statusColor),
  },
];

import { KResource } from '@/entities/k-resources/model';
import Pill from '@/shared/ui/pill/Pill';
import { ReactNode } from 'react';
import { statusVariantMap } from './statusVariantMap';

interface ColumnConfig<T> {
  key: keyof T;
  header: string;
  render: (item: T) => ReactNode;
  className?: string;
}
export const kResourceColumns: ColumnConfig<KResource>[] = [
  {
    key: 'country_code',
    header: '국가 코드',
    render: (item) => <span className="font-medium">{item.country_code}</span>,
  },
  {
    key: 'resource_id',
    header: 'Resource ID',
    render: (item) => <span className="font-medium">{item.resource_id}</span>,
  },
  {
    key: 'resource_name',
    header: 'Resource Name',
    render: (item) => <span className="font-medium">{item.resource_name}</span>,
  },
  {
    key: 'type',
    header: 'Type',
    render: (item) => <span className="font-medium">{item.type}</span>,
  },
  {
    key: 'status',
    header: 'Status',
    render: (item) => (
      <Pill color="default" variant={statusVariantMap[item.status]}>
        {item.status}
      </Pill>
    ),
  },
  {
    key: 'tags',
    header: 'Tags',
    render: (item) => (
      <span>
        {item.tags.map((tag, idx) => (
          <span key={tag}>
            {tag}
            {idx < item.tags.length - 1 && ', '}
          </span>
        ))}
      </span>
    ),
  },
];

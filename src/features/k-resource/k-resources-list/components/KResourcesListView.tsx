'use client';

import Badge from '@/shared/ui/badge/Badge';
import { ListView } from '@/__deprecated__/list-view';
import { kResourcesData } from '../../../../entities/k-resources/api/kResourcesList';
import { KResource } from '../../../../entities/k-resources/model';
import { useKResourcesListActions } from '../hooks/useKResourcesListActions';
import { ColumnConfig } from '@/shared/ui/table';

interface KResourcesListViewProps {
  data: KResource[];
}

export default function KResourcesListView() {
  const { headerButtons } = useKResourcesListActions();

  const kResourcesColumns: ColumnConfig<KResource>[] = [
    {
      key: 'country_code',
      header: '국가',
      render: (item) => {
        const getCountryName = (code: string) => {
          switch (code) {
            case 'KR':
              return '대한민국';
            case 'US':
              return '미국';
            case 'JP':
              return '일본';
            case 'SG':
              return '싱가포르';
            default:
              return code;
          }
        };

        return (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{getCountryName(item.country_code)}</span>
          </div>
        );
      },
    },
    {
      key: 'id',
      header: '리소스 ID',
      render: (item) => <span className="font-medium">{item.id}</span>,
    },
    {
      key: 'name',
      header: '리소스명',
      render: (item) => <span className="font-medium">{item.name}</span>,
    },
    {
      key: 'resource_type',
      header: '리소스 타입',
      render: (item) => {
        const getTypeColor = (type: string) => {
          switch (type) {
            case 'Database':
              return 'primary';
            case 'Web Server':
              return 'success';
            case 'Storage':
              return 'warning';
            case 'Load Balancer':
              return 'info';
            case 'Cache':
              return 'warning';
            case 'Monitoring':
              return 'success';
            case 'Backup':
              return 'primary';
            case 'Development':
              return 'light';
            case 'Testing':
              return 'light';
            case 'Staging':
              return 'light';
            default:
              return 'light';
          }
        };

        return (
          <Badge size="sm" color={getTypeColor(item.resource_type)}>
            {item.resource_type}
          </Badge>
        );
      },
    },
    {
      key: 'status',
      header: '상태',
      render: (item) => {
        const getStatusColor = (status: string) => {
          switch (status) {
            case 'active':
              return 'success';
            case 'inactive':
              return 'danger';
            case 'pending':
              return 'warning';
            default:
              return 'light';
          }
        };

        const getStatusText = (status: string) => {
          switch (status) {
            case 'active':
              return '활성';
            case 'inactive':
              return '비활성';
            case 'pending':
              return '대기중';
            default:
              return status;
          }
        };

        return (
          <Badge size="sm" color={getStatusColor(item.status)}>
            {getStatusText(item.status)}
          </Badge>
        );
      },
    },
    {
      key: 'tags',
      header: '관련 태그',
      render: (item) => (
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag, index) => (
            <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: 'owner',
      header: '리소스 소유자',
      render: (item) => <span className="font-medium text-gray-900 dark:text-white">{item.owner.display_name}</span>,
    },
  ];

  return (
    <ListView
      data={kResourcesData}
      columns={kResourcesColumns}
      title="K-Resources 목록"
      searchPlaceholder="K-Resources 검색..."
      searchFields={['name', 'id', 'resource_type']}
      showCheckbox={true}
      headerButtons={headerButtons}
      onSelectionChange={(selectedIds) => {
        console.log('선택된 ID들:', selectedIds);
      }}
      getItemId={(item) => item.id.toString()}
    />
  );
}

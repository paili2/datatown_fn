'use client';

import { mockKResourcesData } from '@/entities/k-resources/api/mockData';
import KResourceWidgetDetail from '@/widgets/k-resource/detail/KResourceWidgetDetail';
import { useParams } from 'next/navigation';
import { useDataOrNotFound } from '@/shared/hooks/useDataOrNotFound';
import { KResource } from '@/entities/k-resources/model';

const Page = () => {
  const params = useParams();
  const { id } = params;
  const kResource = mockKResourcesData.find((kResource) => kResource.resource_id === Number(id));

  if (!kResource) return <div>KResource not found</div>;

  return <KResourceWidgetDetail kResource={kResource} />;
};

export default Page;

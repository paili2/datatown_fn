'use client';

import { kResourcesData } from '@/features/k-resource/k-resources-list';
import KResourceWidget from '@/widgets/k-resource/KResourceWidget';

export default function KResourceList() {
  return <KResourceWidget data={kResourcesData} />;
}

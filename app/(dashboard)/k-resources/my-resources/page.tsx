'use client';

import { mockKResourcesData } from '@/entities/k-resources/api/mockData';
import KResourceWidget from '@/widgets/k-resource/list/KResourceWidget';
import React from 'react';

export default function MyResources() {
  return <KResourceWidget data={mockKResourcesData} />;
}

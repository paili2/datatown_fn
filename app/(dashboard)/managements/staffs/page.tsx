'use client';

import StaffsWidget from '@/widgets/staffs/StaffsWidget';
import { mockStaffsData } from '@/entities/staffs/api/mockData';
import React from 'react';

export default function Staffs() {
  return <StaffsWidget data={mockStaffsData} />;
}

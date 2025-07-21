'use client';

import PageBreadcrumb from '@/shared/ui/page-breadcrumb/PageBreadCrumb';
import DetailLayoutWrapper from './components/atoms/DetailLayoutWrapper';
import DetailInner from './components/atoms/DetailInner';
import { KResource } from '@/entities/k-resources/model';
import MainSection from './components/molecules/MainSection';
import SideSection from './components/molecules/SideSection';

const KResourceWidgetDetail = ({ kResource }: { kResource: KResource }) => {
  return (
    <>
      <PageBreadcrumb />
      <DetailLayoutWrapper>
        <DetailInner>
          <MainSection {...kResource} />
          <SideSection />
        </DetailInner>
      </DetailLayoutWrapper>
    </>
  );
};

export default KResourceWidgetDetail;

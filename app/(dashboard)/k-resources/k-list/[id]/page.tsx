import BlockHeading from '@/features/k-resource/detail/components/BlockHeading';
import DetailSection from '@/features/k-resource/detail/components/DetailSection';
import TextBox from '@/features/k-resource/detail/components/TextBox';
import { tagData } from '@/features/k-resource/detail/data/kResourceDetailData';
import Badge from '@/shared/ui/badge/Badge';
import ComponentCard from '@/shared/ui/component-card/ComponentCard';
import PageBreadcrumb from '@/shared/ui/page-breadcrumb/PageBreadCrumb';

const Page = () => {
  return (
    <div className="flex flex-col gap-10 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
      <PageBreadcrumb pageTitle={'#109 라이즈(RIZE)'} />
      <div className="w-full flex gap-25">
        <section className="w-2/3 mx-auto flex flex-col justify-between pl-10 gap-10">
          <DetailSection></DetailSection>
          <div className="flex flex-col justify-between gap-2">
            <BlockHeading title="설명"></BlockHeading>
            <TextBox text={'SM 엔터테인먼트 소속 보이그룹'}></TextBox>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <BlockHeading title="태그"></BlockHeading>
            <div className="flex gap-2">
              {tagData.map((data, index) => (
                <Badge key={index} color="light">
                  {data}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <BlockHeading title="프로젝트 요청 진행현황"></BlockHeading>
            <TextBox badge="검토중" text={'#109 [Concert_Interview] NCT 도쿄 콘서트 인터뷰 2025년 12월 1일'}></TextBox>
          </div>
        </section>
        <section className="w-1/3">
          <ComponentCard title="인텔리전스 허브">하이</ComponentCard>
        </section>
      </div>
    </div>
  );
};

export default Page;

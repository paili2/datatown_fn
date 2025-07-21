import DetailInfo, { DetailInfoProps } from './atoms/DetailInfo';
import DescriptionEditor from './atoms/DescriptionEditor';
import TagDisplay, { TagDisplayProps } from './atoms/TagDisplay';

type MainSectionProps = DetailInfoProps & TagDisplayProps;

const MainSection = (props: MainSectionProps) => {
  return (
    <section className="w-2/3 mx-auto flex flex-col justify-between pl-10 gap-10">
      <DetailInfo {...props} />
      <DescriptionEditor />
      <TagDisplay {...props} />
    </section>
  );
};

export default MainSection;

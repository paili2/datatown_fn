import Pill from '@/shared/ui/pill/Pill';
import { Subtitle } from '@/shared/ui/typographys/Subtitle';
import { KResource } from '@/entities/k-resources/model';

export type TagDisplayProps = Pick<KResource, 'tags'>;

const TagDisplay = ({ tags }: TagDisplayProps) => {
  return (
    <div className="flex flex-col justify-between gap-2">
      <Subtitle variant="subtitle2" children="Tags" />
      <div className="flex gap-2">
        {tags.map((data, index) => (
          <Pill key={index} color="default">
            {data}
          </Pill>
        ))}
      </div>
    </div>
  );
};

export default TagDisplay;

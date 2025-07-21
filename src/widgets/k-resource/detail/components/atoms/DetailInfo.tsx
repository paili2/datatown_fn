import { Body } from '@/shared/ui/typographys/Body';
import Pill from '@/shared/ui/pill/Pill';
import React from 'react';
import { KResource } from '@/entities/k-resources/model';
import { Heading } from '@/shared/ui/typographys/Heading';
import { Label } from '@/shared/ui/typographys/Label';

export type DetailInfoProps = Pick<KResource, 'resource_id' | 'resource_name' | 'type' | 'status' | 'partner'>;

const DetailInfo = ({ resource_id, resource_name, type, status, partner }: DetailInfoProps) => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <Label variant="semibold" children={`#${resource_id} `} />
        <Heading children={`${resource_name} `} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-5">
          <Body variant="body1-semibold" children="Type" />
          <Pill color="default" children={type} />
        </div>
        <div className="flex items-center gap-5">
          <Body variant="body1-semibold" children="Status" />
          <Pill color="default" children={status} />
        </div>
        <div className="flex items-center gap-5">
          <Body variant="body1-semibold" children="소유 파트너" />
          <Pill color="default" children={partner} />
        </div>
      </div>
    </>
  );
};

export default DetailInfo;

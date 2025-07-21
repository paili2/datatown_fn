import { Caption } from '@/shared/ui/typographys/Caption';
import Pill from '@/shared/ui/pill/Pill';
import { PendingPartners } from '@/entities/pendingpartners/model';

export type PartnerMetaProps = Pick<PendingPartners, 'account_type' | 'grade' | 'request_at' | 'primary_contact_name'>;

export const PartnerMeta = ({ account_type, grade, request_at, primary_contact_name }: PartnerMetaProps) => (
  <div className="flex items-center gap-2">
    <Pill variant="primary" color="outline">
      {account_type}
    </Pill>
    <Pill variant="primary" color="outline">
      {grade}
    </Pill>
    <Caption variant="regular">{`Requested at ${request_at}`}</Caption>
    <Caption variant="regular">{`by ${primary_contact_name}`}</Caption>
  </div>
);

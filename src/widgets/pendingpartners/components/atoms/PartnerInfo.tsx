import { Subtitle } from '@/shared/ui/typographys/Subtitle';
import Avatar from '@/shared/ui/avatar/Avatar';
import { Body } from '@/shared/ui/typographys/Body';
import { PendingPartners } from '@/entities/pendingpartners/model';

export type PartnerInfoProps = Pick<PendingPartners, 'id' | 'company_name' | 'avatarSrc' | 'status'>;

export const PartnerInfo = ({ id, company_name, avatarSrc, status }: PartnerInfoProps) => (
  <div className="flex items-center gap-4">
    <Subtitle variant="subtitle2">{`#${id}`}</Subtitle>
    <Avatar src={avatarSrc} size="large" status={status} />
    <Body variant="body2-semibold">{company_name}</Body>
  </div>
);

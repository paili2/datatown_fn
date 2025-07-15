// fragments/PartnerFragments.tsx
import { Caption } from '@/shared/ui/typographys/Caption';
import { Subtitle } from '@/shared/ui/typographys/Subtitle';
import Avatar from '@/shared/ui/avatar/Avatar';
import { Body } from '@/shared/ui/typographys/Body';
import Pill from '@/shared/ui/pill/Pill';
import BaseButton from '@/shared/ui/button/BaseButton';

export interface PartnerInfoProps {
  id: string;
  company_name: string;
  avatarSrc?: string;
  status?: 'online' | 'offline';
}

export const PartnerInfo = ({ id, company_name, avatarSrc = '/images/sm.png', status = 'online' }: PartnerInfoProps) => (
  <div className="flex items-center gap-4">
    <Subtitle variant="subtitle2">{`#${id}`}</Subtitle>
    <Avatar src={avatarSrc} size="large" status={status} />
    <Body variant="body2-semibold">{company_name}</Body>
  </div>
);

export interface PartnerMetaProps {
  account_type: string;
  grade: string;
  request_at: string;
  primary_contact_name: string;
}

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

export interface PartnerActionsProps {
  onReject?: () => void;
  onApprove?: () => void;
  rejectLabel?: string;
  approveLabel?: string;
}

export const PartnerActions = ({ onReject, onApprove, rejectLabel = '거절', approveLabel = '수락' }: PartnerActionsProps) => (
  <div className="flex items-center gap-2">
    <BaseButton size="sm" variant="secondary" color="outline" onClick={onReject}>
      {rejectLabel}
    </BaseButton>
    <BaseButton size="sm" variant="primary" color="outline" onClick={onApprove}>
      {approveLabel}
    </BaseButton>
  </div>
);

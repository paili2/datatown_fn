import BaseButton from '@/shared/ui/button/BaseButton';

export interface PartnerActionsProps {
  onReject?: () => void;
  onApprove?: () => void;
}

export const PartnerActions = ({ onReject, onApprove }: PartnerActionsProps) => (
  <div className="flex items-center gap-2">
    <BaseButton size="sm" variant="secondary" color="outline" onClick={onReject} children="거절" />
    <BaseButton size="sm" variant="primary" color="outline" onClick={onApprove} children="수락" />
  </div>
);

import { COLORS } from '@/shared/design/foundation/color';
import React from 'react';

export interface AvatarStatusProps {
  status: 'online' | 'offline' | 'busy';
  size: 'small' | 'large';
}

// 사이즈는 6*6, 8*8 두 가지만 사용
const statusSizeClasses = {
  small: 'h-[6px] w-[6px]',
  large: 'h-[8px] w-[8px]',
};

const statusColorClasses = {
  online: COLORS.primary.deepest,
  busy: COLORS.neutral.gray400,
  offline: COLORS.neutral.white,
};

const AvatarStatus: React.FC<AvatarStatusProps> = ({ status, size }) => {
  return (
    <span style={{ backgroundColor: statusColorClasses[status] }} className={`absolute bottom-0 right-0 rounded-full border-[1.5px] border-white dark:border-gray-900 ${statusSizeClasses[size]}`} />
  );
};

export default AvatarStatus;

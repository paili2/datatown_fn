import Image from 'next/image';
import React from 'react';
import AvatarStatus from './AvatarStatus';

interface AvatarProps {
  src: string; // 아바타 이미지 URL
  alt?: string; // 대체 텍스트
  size?: 'small' | 'large'; // 아바타 사이즈
  status?: 'online' | 'offline' | 'busy' | 'none'; // 상태 표시
}

// 사이즈는 28*28(small), 43*43(large) 두 가지만 사용
const sizeClasses: Record<'small' | 'large', string> = {
  small: 'h-[28px] w-[28px] max-w-[28px]',
  large: 'h-[43px] w-[43px] max-w-[43px]',
};

const sizeValues: Record<'small' | 'large', number> = {
  small: 28,
  large: 43,
};

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'User Avatar', size = 'small', status = 'none' }) => {
  return (
    <div className={`relative rounded-full ${sizeClasses[size]}`}>
      <Image width={sizeValues[size]} height={sizeValues[size]} sizes="100vw" src={src} alt={alt} className="object-cover w-full rounded-full" />
      {status !== 'none' && <AvatarStatus status={status} size={size} />}
    </div>
  );
};

export default Avatar;

import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
  variant?: 'subtitle1' | 'subtitle2';
  className?: string;
}

const subtitleClassMap = {
  subtitle1: 'font-semibold text-[28px] leading-[1.3]',
  subtitle2: 'font-normal text-[18px] leading-[1.4]',
};

export const Subtitle: React.FC<SubtitleProps> = ({ children, variant = 'subtitle1', className = '' }) => {
  return <div className={`${subtitleClassMap[variant]} ${className}`}>{children}</div>;
};

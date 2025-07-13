import React from 'react';

interface BodyProps {
  children: React.ReactNode;
  variant?: 'body1-semibold' | 'body2-semibold' | 'body1-regular' | 'body2-regular';
  className?: string;
}

const bodyClassMap = {
  'body1-semibold': 'font-semibold text-[18px] leading-[1.5]',
  'body2-semibold': 'font-semibold text-[16px] leading-[1.5]',
  'body1-regular': 'font-normal text-[18px] leading-[1.5]',
  'body2-regular': 'font-normal text-[16px] leading-[1.5]',
};

export const Body: React.FC<BodyProps> = ({ children, variant = 'body1-regular', className = '' }) => {
  return <div className={`${bodyClassMap[variant]} ${className}`}>{children}</div>;
};

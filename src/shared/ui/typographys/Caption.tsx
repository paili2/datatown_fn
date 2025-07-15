import { COLORS } from '@/shared/design/foundation/color';
import React from 'react';

// COLORS 객체에서 가능한 모든 색상 값의 타입을 추출 (never 타입 문제 해결)
type ColorValue =
  | (typeof COLORS)['primary'][keyof (typeof COLORS)['primary']]
  | (typeof COLORS)['secondary'][keyof (typeof COLORS)['secondary']]
  | (typeof COLORS)['neutral'][keyof (typeof COLORS)['neutral']];

interface CaptionProps {
  children: React.ReactNode;
  variant?: 'semibold' | 'regular';
  className?: string;
  color?: ColorValue; // color를 자동 추론 타입으로 변경
}

const captionClassMap = {
  semibold: 'font-semibold text-[14px] leading-[1.4]',
  regular: 'font-normal text-[14px] leading-[1.4]',
};

export const Caption: React.FC<CaptionProps> = ({ children, variant = 'regular', className = '', color }) => {
  return (
    <div style={{ color: color ?? COLORS.neutral.gray400 }} className={`${captionClassMap[variant]} ${className}`}>
      {children}
    </div>
  );
};

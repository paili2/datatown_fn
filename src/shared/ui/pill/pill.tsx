import { COLORS } from '@/shared/design/foundation/color';
import React from 'react';

type PillVariant = 'primary' | 'secondary' | 'neutral';
type PillColor = 'default' | 'hover' | 'press' | 'focus' | 'disable' | 'outline';
// type PillSize = 'sm' | 'md' | 'lg';

interface PillProps {
  variant?: PillVariant; // Pill variant
  color?: PillColor; // Pill color
  startIcon?: React.ReactNode; // Icon at the start
  endIcon?: React.ReactNode; // Icon at the end
  children: React.ReactNode; // Pill content
}

const Pill: React.FC<PillProps> = ({ variant = 'primary', color = 'default', startIcon, endIcon, children }) => {
  const baseStyles = 'text-[12px] px-[10px] py-[5px] inline-flex items-center justify-center rounded-full';

  const variants = {
    primary: {
      default: {
        backgroundColor: COLORS.primary.deepest,
        color: COLORS.neutral.white,
      },
      hover: {
        backgroundColor: COLORS.primary.base,
        color: COLORS.neutral.white,
      },
      press: {
        backgroundColor: COLORS.primary.deeper,
        color: COLORS.neutral.white,
      },
      focus: {
        backgroundColor: COLORS.primary.deeper,
        color: COLORS.neutral.white,
      },
      disable: {
        backgroundColor: COLORS.primary.deeper,
        color: COLORS.neutral.white,
      },
      outline: {
        backgroundColor: COLORS.neutral.white,
        color: COLORS.primary.base,
        border: `1px solid ${COLORS.primary.base}`,
      },
    },
    secondary: {
      default: {
        backgroundColor: COLORS.secondary.deepest,
        color: COLORS.neutral.white,
      },
      hover: {
        backgroundColor: COLORS.secondary.base,
        color: COLORS.neutral.white,
      },
      press: {
        backgroundColor: COLORS.secondary.deeper,
        color: COLORS.neutral.white,
      },
      focus: {
        backgroundColor: COLORS.secondary.deeper,
        color: COLORS.neutral.white,
      },
      disable: {
        backgroundColor: COLORS.secondary.deeper,
        color: COLORS.neutral.white,
      },
      outline: {
        backgroundColor: COLORS.secondary.base,
        color: COLORS.neutral.white,
        border: `1px solid ${COLORS.secondary.base}`,
      },
    },
    neutral: {
      default: {
        backgroundColor: COLORS.neutral.white,
        color: COLORS.neutral.black,
      },
      hover: {
        backgroundColor: COLORS.neutral.white,
        color: COLORS.neutral.black,
      },
      press: {
        backgroundColor: COLORS.neutral.white,
        color: COLORS.neutral.black,
      },
      focus: {
        backgroundColor: COLORS.neutral.white,
        color: COLORS.neutral.black,
      },
      disable: {
        backgroundColor: COLORS.neutral.white,
        color: COLORS.neutral.black,
      },
      outline: {
        backgroundColor: COLORS.neutral.white,
        color: COLORS.neutral.black,
      },
    },
  };

  return (
    <span style={{ ...variants[variant][color] }} className={`${baseStyles}`}>
      {startIcon && <span className="mr-1">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-1">{endIcon}</span>}
    </span>
  );
};

export default Pill;

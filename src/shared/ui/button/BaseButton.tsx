import { COLORS } from '@/shared/design/foundation/color';

type ButtonVariant = 'primary' | 'secondary' | 'neutral';
type ButtonColor = 'default' | 'hover' | 'press' | 'focus' | 'disable' | 'outline';
// type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant; // Button variant
  color?: ButtonColor; // Button color
  startIcon?: React.ReactNode; // Icon at the start
  endIcon?: React.ReactNode; // Icon at the end
  children: React.ReactNode; // Button content
}

const BaseButton = ({ variant = 'primary', color = 'default', startIcon, endIcon, children }: ButtonProps) => {
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
        backgroundColor: COLORS.primary.base,
        color: COLORS.neutral.white,
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

export default BaseButton;

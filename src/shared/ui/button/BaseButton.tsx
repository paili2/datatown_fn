import { COLORS } from '@/shared/design/foundation/color';

type ButtonVariant = 'primary' | 'secondary' | 'neutral';
type ButtonColor = 'default' | 'hover' | 'press' | 'focus' | 'disable' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant; // 버튼 스타일 종류
  color?: ButtonColor; // 버튼 색상 상태
  size?: ButtonSize; // 버튼 크기
  startIcon?: React.ReactNode; // 왼쪽 아이콘
  endIcon?: React.ReactNode; // 오른쪽 아이콘
  children: React.ReactNode; // 버튼 내용
}

// 사이즈별 스타일 정의 (빌드업 단계)
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-[16px] px-[12px] py-[6px]',
  md: 'text-[16px] px-[20px] py-[8px]',
  lg: 'text-[16px] px-[24px] py-[12px]',
};

const BaseButton = ({ variant = 'primary', color = 'default', size = 'sm', startIcon, endIcon, children }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full';

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
    <span style={{ ...variants[variant][color] }} className={`${baseStyles} ${sizeStyles[size]}`}>
      {startIcon && <span className="mr-1">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-1">{endIcon}</span>}
    </span>
  );
};

export default BaseButton;

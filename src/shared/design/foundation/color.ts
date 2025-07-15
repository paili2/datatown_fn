// src/shared/design/foundation/colors.ts

export const COLORS = {
  primary: {
    lightest: '#CCF5F2', // 1단계 (가장 밝음)
    lighter: '#99ECE5', // 2단계
    base: '#66E2D9', // 3단계 (기본)
    deeper: '#33D9CC', // 4단계
    deepest: '#1AD4C5', // 5단계 (가장 진함/강조)
  },
  secondary: {
    lightest: '#FFDADB', // 예시값, 실제 팔레트로 교체
    lighter: '#FFB5B7', // 예시값
    base: '#FF9194', // 예시값 (기본)
    deeper: '#FF6C70', // 예시값
    deepest: '#FF595E', // 예시값 (가장 진함/강조)
  },
  neutral: {
    black: '#000000',
    white: '#FFFFFF',
    gray100: '#F5F5F5',
    gray200: '#E0E0E0',
    gray300: '#BDBDBD',
    gray400: '#909090', // 추가됨
    gray450: '#757575',
    gray500: '#212121',
  },
} as const;

export type PrimaryColorKey = keyof typeof COLORS.primary; // 'lightest' | 'lighter' | 'base' | 'deeper' | 'deepest'
export type SecondaryColorKey = keyof typeof COLORS.secondary; // 동일
export type ColorPalette = typeof COLORS;

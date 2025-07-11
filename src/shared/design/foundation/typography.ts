// src/shared/design/foundation/typography.ts

// Pretendard 폰트
const FONT_FAMILY = `'Pretendard', 'Apple SD Gothic Neo', sans-serif`;

export const TYPOGRAPHY = {
  heading1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 700,
    fontSize: '60px',
  },
  heading2: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '48px',
  },
  heading3: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '40px',
  },
  subtitle1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '28px',
  },
  subtitle2: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '18px',
  },
  bodyRegular1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '18px',
  },
  bodyRegular2: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '16px',
  },
  bodySemiBold1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '18px',
  },
  bodySemiBold2: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '16px',
  },
  captionRegular: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '14px',
  },
  captionSemiBold: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '14px',
  },
  labelRegular: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '12px',
  },
  labelSemiBold: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '12px',
  },
} as const;

export type TypographyStyleKey = keyof typeof TYPOGRAPHY;
export type TypographyPreset = (typeof TYPOGRAPHY)[TypographyStyleKey];

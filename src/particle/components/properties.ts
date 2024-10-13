export const Sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;
export type Size = (typeof Sizes)[keyof typeof Sizes];

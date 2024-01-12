export type ColorType =
  | 'action'
  | 'disabled'
  | 'error'
  | 'info'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

export type FontSizeType = 'inherit' | 'large' | 'medium' | 'small';

export const IconSizeMap = {
  inherit: 'inherit',
  large: '2.1875rem',
  medium: '1.5rem',
  small: '1.25rem',
} as const;

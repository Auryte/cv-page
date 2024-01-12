import { ButtonBaseProps, ButtonClasses } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { FC, PropsWithChildren } from 'react';

export interface ButtonProps {
  // is used for overriting or extend the styles applied to the component.
  classes?: Partial<ButtonClasses>;

  // is used for adding colors
  color?: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'>;

  // is used for disabling elevation
  disableElevation?: boolean;

  // is used for disabling keyboard focus riple
  disableFocusRipple?: boolean;

  // is used for disabling the button
  disabled?: boolean;

  // is used for installing a icon component after the button text
  endIcon?: React.ReactNode;

  // is used for assigning the full width of the container to the component
  fullWidth?: boolean;

  // is used for replacing a button element with "a" tag, and forwarding to the link after pressed
  href?: string;

  // is used for defining the size of the component
  size?: OverridableStringUnion<'small' | 'medium' | 'large'>;

  // is used for installing a icon component before the button text
  startIcon?: React.ReactNode;

  // is used for adding styles to the component
  sx?: object;

  // is used for defining the variant of the component f.e. "contained"
  variant?: OverridableStringUnion<'text' | 'outlined' | 'contained'>;
}

export type ButtonComponent = FC<PropsWithChildren<ButtonBaseProps<'button', ButtonProps>>>;

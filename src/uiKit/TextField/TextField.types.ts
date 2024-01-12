import { FC } from 'react';

type ColorUnion = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
type MarginUnion = 'dense' | 'none' | 'normal';
type SizeUnion = 'medium' | 'small';
type VariantUnion = 'filled' | 'outlined' | 'standard';
type TypeUnion = 'text' | 'email' | 'password' | 'phone' | 'number' | 'search';
type Callback = () => void;

export interface TextFieldProps {
  // is used for helping the user to fill a form faster, especially on mobile devices
  autoComplete?: string;

  // is used for focusing the component in the first mount
  autoFocus?: boolean;

  // is used for overwriting or extending styles applied to the component
  classes?: object;

  // is used for defining the color of the component
  color?: ColorUnion;

  // is used for defining the default value of the component
  defaultValue?: string;

  // is used for defining it the component is disabled
  disabled?: boolean;

  // is used for defining the error state of the component
  error?: boolean;

  // is used for defining if the component will take the full width of the component
  fullWidth?: boolean;

  // is used for defining the helper text content
  helperText?: React.ReactNode;

  // is used for defining the id of the component
  id?: string;

  // is used for defining the props applied to the Input element
  InputProps?: object;

  // is used for passing a ref to the component
  inputRef?: React.Ref<any>;

  // is used for defining the label of the component
  label?: React.ReactNode;

  // is used for defining the margin of the component
  margin?: MarginUnion;

  // is used for defining the maximum number of rows to display when multiline option is set to true.
  maxRows?: number | string;

  // is used for defining the minumum number of rows to display when multiline option is set to true.
  minRows?: number | string;

  // is used for changing the Input element to be a textarea
  multiline?: boolean;

  // is used for defining the name of the component
  name?: string;

  // is used for defining the callback while the value is changed
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // is used for defining the callback while the component is out of focus
  onBlur?: Callback;

  // is used for defining the callback while the component is focused
  onFocus?: Callback;

  // is used for defining the callback while the component is clicked
  onClick?: Callback;

  // is used for defining the placeholder text of the component
  placeholder?: string;

  // is used for defining if the component is required
  required?: boolean;

  // is used for defining the number of rows to display when multiline option is set to true.
  rows?: number | string;

  // is used for defining the size of the component
  size?: SizeUnion;

  // is used for defining the styles of the component
  sx?: object;

  // is used for defining the type of the input element
  type?: TypeUnion;

  // is used for defining the value of the component
  value?: string;

  // is used for defining the variant of the component
  variant?: VariantUnion;

  // is used for defining the start element that appears in the input - either a string or a Icon
  startelement?: React.ReactElement | string;

  // is used for defining the end element that appears in the input - either a string or a Icon
  endelement?: React.ReactElement | string;
}

export type TextFieldComponent = FC<TextFieldProps>;

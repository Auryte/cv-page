import { TextFieldProps } from '@mui/material';
import { FC, ReactElement } from 'react';

type TTextFieldProps = {
  startelement?: ReactElement | string;
  endelement?: ReactElement | string;
};

export type TextFieldComponent = FC<TextFieldProps & TTextFieldProps>;

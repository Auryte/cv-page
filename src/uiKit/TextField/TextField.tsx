'use client';

import { InputAdornment, TextField as MuiTextField } from '@mui/material';

import { styles } from './TextField.styles';
import { TextFieldComponent } from './TextField.types';

export const TextField: TextFieldComponent = (props) => {
  const { sx, type = 'text', variant = 'standard', startelement, endelement, ...restTextFieldProps } = props;

  const { standardVariantStyles } = styles;

  return (
    <MuiTextField
      sx={{
        ...standardVariantStyles,
        ...sx,
      }}
      type={type}
      variant={variant}
      InputProps={{
        startAdornment: startelement && <InputAdornment position='start'>{startelement}</InputAdornment>,
        endAdornment: endelement && <InputAdornment position='end'>{endelement}</InputAdornment>,
      }}
      {...restTextFieldProps}
    />
  );
};

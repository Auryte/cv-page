'use client';

import { InputAdornment, TextField as MuiTextField } from '@mui/material';
import React from 'react';

import { styles } from './TextField.styles';
import { TextFieldComponent } from './TextField.types';

export const TextField: TextFieldComponent = (props) => {
  const {
    autoComplete,
    autoFocus,
    classes,
    color,
    defaultValue,
    disabled,
    error,
    fullWidth,
    helperText,
    id,
    InputProps,
    inputRef,
    label,
    margin,
    maxRows,
    minRows,
    multiline,
    name,
    onChange,
    onBlur,
    onFocus,
    onClick,
    placeholder,
    required,
    rows,
    size,
    sx,
    type = 'text',
    value,
    variant = 'standard',
    startelement,
    endelement,
    ...restTextFieldProps
  } = props;
  const { standardVariantStyles } = styles;

  return (
    <MuiTextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      classes={classes}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      inputProps={InputProps}
      inputRef={inputRef}
      label={label}
      margin={margin}
      maxRows={maxRows}
      minRows={minRows}
      multiline={multiline}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onClick={onClick}
      placeholder={placeholder}
      required={required}
      rows={rows}
      size={size}
      sx={{
        ...standardVariantStyles,
        ...sx,
      }}
      type={type}
      value={value}
      variant={variant}
      InputProps={{
        startAdornment: startelement && <InputAdornment position='start'>{startelement}</InputAdornment>,
        endAdornment: endelement && <InputAdornment position='end'>{endelement}</InputAdornment>,
      }}
      {...restTextFieldProps}
    />
  );
};

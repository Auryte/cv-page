import { Button as MuiButton } from '@mui/material';

import { ButtonComponent } from '@/uiKit/Button/Button.types';

export const Button: ButtonComponent = (props) => {
  const {
    children,
    classes,
    disableElevation,
    disableFocusRipple,
    disabled,
    endIcon,
    href,
    size,
    startIcon,
    sx,
    ...restMuiProps
  } = props;

  return (
    <MuiButton
      classes={classes}
      disabled={disabled}
      disableElevation={disableElevation}
      disableFocusRipple={disableFocusRipple}
      endIcon={endIcon}
      href={href}
      size={size}
      startIcon={startIcon}
      sx={sx}
      {...restMuiProps}
    >
      {children}
    </MuiButton>
  );
};

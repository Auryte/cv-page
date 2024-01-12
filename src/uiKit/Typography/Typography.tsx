import { Typography as MuiTypography } from '@mui/material';

import { TypographyComponent } from '@/uiKit/Typography/Typography.types';

export const Typography: TypographyComponent = (props) => {
  const { className, children, ...typographyMuiProps } = props;

  return (
    <MuiTypography
      className={className}
      {...typographyMuiProps}
    >
      {children}
    </MuiTypography>
  );
};

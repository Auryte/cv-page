import { Typography as MuiTypography } from '@mui/material';

import { TypographyComponent } from '@/uiKit/Typography/Typography.types';

export const Typography: TypographyComponent = (props) => {
  const {
    align,
    component,
    classes,
    className,
    children,
    gutterBottom,
    noWrap,
    paragraph,
    sx,
    variant,
    variantMapping,
  } = props;

  return (
    <MuiTypography
      align={align}
      component={component}
      classes={classes}
      className={className}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      sx={sx}
      variant={variant}
      variantMapping={variantMapping}
    >
      {children}
    </MuiTypography>
  );
};

import { TypographyOwnProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type TTypographyProps = {
  className?: string;
};

export type TypographyComponent = FC<PropsWithChildren<TypographyOwnProps & TTypographyProps>>;

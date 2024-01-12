import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';
import { FC, PropsWithChildren } from 'react';

export interface TooltipProps {
  sx?: object;
  title: string;
}

export type TooltipComponent = FC<PropsWithChildren<TooltipProps & MuiTooltipProps>>;

import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

export type BackgroundedTextBlockProps = {
  sx?: object & SxProps<Theme>;
  words: string[];
};

export type BackgroundedTextComponent = (props: BackgroundedTextBlockProps) => ReactNode;

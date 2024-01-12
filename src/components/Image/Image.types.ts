import type { ImageLoader, ImageProps, StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface ImageComponentProps extends ImageProps {
  loader?: ImageLoader;
  src: StaticImageData | string;
  style?: Record<string, string>;
}

export type ImageComponent = (props: ImageComponentProps) => ReactNode;

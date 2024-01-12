import type { LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

export type LinkComponent = FC<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & LinkProps>;

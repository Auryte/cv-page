import type { LinkProps } from 'next/link';
import type { FC, PropsWithChildren } from 'react';
import { AnchorHTMLAttributes } from 'react';

export type LinkComponent = FC<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & LinkProps>;

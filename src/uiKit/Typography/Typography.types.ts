import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface TypographyClasses {
  alignCenter: string;
  alignJustify: string;
  alignLeft: string;
  alignRight: string;
  body1: string;
  body2: string;
  button: string;
  caption: string;
  gutterBottom: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  inherit: string;
  noWrap: string;
  overline: string;
  paragraph: string;
  root: string;
  subtitle1: string;
  subtitle2: string;
}

export interface TypographyProps {
  // is used for set the text-align on the component
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';

  // is used for passing components as children of the component
  children?: React.ReactNode;

  // is used for adding classes to the component
  className?: string;

  // is used for overriting or extend the styles applied to the component.
  classes?: Partial<TypographyClasses>;

  // is used for the root node
  component?: any;

  // is used for adding a bottom margin to the component
  gutterBottom?: boolean;

  // is used for preventing the component to wrap
  noWrap?: boolean;

  // is used for setting the component to be a paragraph
  paragraph?: boolean;

  // is used for adding styles to the component
  sx?: object;

  // is used for defining the variant of the component f.e. h1/h2
  variant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  // is used for mapping the variant prop to a range of different HTML element types.

  variantMapping?: object;
}

export type TypographyComponent = FC<
  PropsWithChildren<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>> & TypographyProps
>;

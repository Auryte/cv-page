import NextLink from 'next/link';

import { LinkComponent } from './Link.types';

export const Link: LinkComponent = (props) => {
  const {
    as,
    children,
    href,
    locale,
    onClick,
    onMouseEnter,
    onTouchStart,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    ...restLinkProps
  } = props;

  return (
    <NextLink
      as={as}
      href={href}
      locale={locale}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onTouchStart={onTouchStart}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      {...restLinkProps}
    >
      {children}
    </NextLink>
  );
};

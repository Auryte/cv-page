'use client';

import NextImage from 'next/image';

import { ImageComponent } from './Image.types';

export const Image: ImageComponent = (props) => {
  const {
    alt,
    blurDataURL,
    fill,
    height,
    loader,
    loading,
    placeholder,
    priority,
    quality,
    src,
    unoptimized,
    width,
    ...restImageProps
  } = props;

  return (
    <NextImage
      alt={alt}
      blurDataURL={blurDataURL}
      fill={fill}
      height={height}
      loader={loader}
      loading={loading}
      placeholder={placeholder}
      priority={priority}
      quality={quality}
      src={src}
      unoptimized={unoptimized}
      width={width}
      {...restImageProps}
    />
  );
};

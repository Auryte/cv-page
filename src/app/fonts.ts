import { Open_Sans, Roboto } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'auto',
});

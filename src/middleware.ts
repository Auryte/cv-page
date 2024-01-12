import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { isSupportedLanguage } from '@/lib/i18n/isSupportedLanguage';

import { i18nConfig, LANGUAGE } from './lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lang = pathname.split('/')[1];
  const response = NextResponse.next();
  const langFromCookies = cookies().get('NEXT_LOCALE')?.value as LANGUAGE;
  const pathnameNoLang = pathname.split('/')[2];
  const withDefaultLanguage = pathnameNoLang
    ? new URL(`/${i18nConfig.defaultLanguage}/${pathnameNoLang}`, request.url)
    : new URL(`/${i18nConfig.defaultLanguage}`, request.url);

  const withCookiesLanguage = pathnameNoLang
    ? new URL(`/${langFromCookies}/${pathnameNoLang}`, request.url)
    : new URL(`/${langFromCookies}`, request.url);

  if (isSupportedLanguage(lang)) {
    return response;
  }

  return langFromCookies ? NextResponse.redirect(withCookiesLanguage) : NextResponse.redirect(withDefaultLanguage);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

/**
 * @jest-environment node
 */

import { middleware } from '@/middleware';
import { NextRequest, NextResponse } from 'next/server';

const supportedLanguage = 'lt';
const unsupportedLanguage = 'fr';
const defaultLanguage = 'en';
const baseTestUrl = 'http://test-url';

let mockCookie = 'lt';

jest.mock('next/headers', ()=>({
  cookies: ()=> ({get: () => 'lt'})
}))

describe('Middleware', () => {
  afterEach(()=>{
    jest.clearAllMocks();
  });

  it('should return the same response if the language is supported', () => {
    const req = new NextRequest(new Request(`${baseTestUrl}/${supportedLanguage}/login`), {})

    const response = middleware(req);

    expect(response).toBeInstanceOf(NextResponse);
  });

  it('should redirect to the default language if the language is not supported', () => {
    mockCookie = 'fr';
    const req = new NextRequest(new Request(`${baseTestUrl}/${unsupportedLanguage}/login`), {})
 
    const response = middleware(req);

    expect(response).toBeInstanceOf(NextResponse);
    expect(response.status).toBe(307);
    expect(response.headers.get('Location')).toBe(`${baseTestUrl}/${defaultLanguage}/login`);
  });
});
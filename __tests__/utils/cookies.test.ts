import { setLocaleCookie } from '@/utils/cookies';
import {cookies} from 'next/headers';

jest.mock('next/headers', ()=>({
cookies: ()=> ({ get: () => 'en' })
}));

describe('setLocaleCookie utils function', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    it('should set cookie', () => {
        setLocaleCookie('en');
        const resultCookie = (typeof window !== 'undefined') && cookies().get('NEXT_LOCALE');
        expect(resultCookie).toEqual('en');
    })
});
import { getDictionary, LANGUAGE } from '@/lib/i18n';

export interface NotFoundInterceptorProps {
  params: {
    'not-found': string[];
  };
}

export default async function NotFoundInterceptor(props: NotFoundInterceptorProps) {
  const { params } = props;

  const dictionary = await getDictionary(params['not-found'][0] as LANGUAGE);
  const { heading } = dictionary['not-found'];

  return (
    <main>
      <h1>{heading}</h1>
    </main>
  );
}

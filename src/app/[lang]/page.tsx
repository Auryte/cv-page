import { Banner } from '@/components/Banner/Banner';
import { getDictionary, LANGUAGE } from '@/lib/i18n';

export const metadata = {
  description: 'Aureja Slance - Front-end developer.',
  title: 'Aureja Slance | Home',
};

export interface IHomePageProps {
  params: {
    lang: LANGUAGE;
  };
}

async function HomePage(props: IHomePageProps) {
  const { lang } = props.params;
  const { home } = await getDictionary(lang);

  return (
    <main>
      <Banner dictionary={home} />
    </main>
  );
}

export default HomePage;

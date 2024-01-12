import { AboutContent } from '@/app/[lang]/about/components/AboutContent/AboutContent';
import { getDictionary, LANGUAGE } from '@/lib/i18n';

export const metadata = {
  description:
    'Aureja Slance - Dedicated and proactive software developer with a strong foundation in frontend technologies and agile methodologies',
  title: 'Aureja Slance | About',
};

export interface AboutPageProps {
  params: {
    lang: LANGUAGE;
  };
}

const AboutPage = async (props: AboutPageProps) => {
  const { lang } = props.params;
  const { about } = await getDictionary(lang);

  return (
    <AboutContent
      dictionary={about}
      lang={lang}
    />
  );
};

export default AboutPage;

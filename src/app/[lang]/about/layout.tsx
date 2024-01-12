import '@/styles/globals.css';

import { RootLayoutComponentTypes } from '@/app/layout';
import Layout from '@/components/Layout/Layout';
import { getDictionary } from '@/lib/i18n';

const AboutPageLayout: RootLayoutComponentTypes = async (props) => {
  const { children, params } = props;
  const { lang } = params;
  const { headings } = await getDictionary(lang);

  return <Layout heading={headings.about}>{children}</Layout>;
};

export default AboutPageLayout;

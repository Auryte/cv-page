import '@/styles/globals.css';

import { defaultPageUrl, pageUrlOptions } from '@/components/Header/config/headerOptions.config';
import { Header } from '@/components/Header/Header';
import { getDictionary } from '@/lib/i18n';

import { RootLayoutComponentTypes } from '../layout';

const LocaleLayout: RootLayoutComponentTypes = async (props) => {
  const { children, params } = props;
  const { lang } = params;
  const { headerMenu } = await getDictionary(lang);

  return (
    <>
      <Header
        dictionary={headerMenu}
        defaultPage={defaultPageUrl(headerMenu, lang)}
        pages={pageUrlOptions(headerMenu, lang)}
      />
      {children}
    </>
  );
};

export default LocaleLayout;

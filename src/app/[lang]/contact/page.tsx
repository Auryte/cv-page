import { getDictionary, LANGUAGE } from '@/lib/i18n';

import { ContactFormContainer } from './components/ContactFormContainer/ContactFormContainer';

export const metadata = {
  description: 'Aureja Slance - front-end developer. Let"s work together.',
  title: 'Aureja Slance | Contacts',
};

export interface ContactsPageProps {
  params: {
    lang: LANGUAGE;
  };
}

const ContactPage = async (props: ContactsPageProps) => {
  const { lang } = props.params;
  const { contact } = await getDictionary(lang);

  return (
    <ContactFormContainer
      dictionary={contact}
      lang={lang}
    />
  );
};

export default ContactPage;

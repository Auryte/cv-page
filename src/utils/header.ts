import { Dictionary } from '@/lib/i18n';

export const currentTab = (pathname: string, dictionary: Dictionary['headerMenu']) => {
  let path = pathname?.split('/')[2];
  if (path === undefined) return dictionary.home;
  else if (path === 'about') return dictionary.about;
  else if (path === 'resume') return dictionary.resume;
  else if (path === 'projects') return dictionary.projects;
  else if (path === 'contact') return dictionary.contact;
};

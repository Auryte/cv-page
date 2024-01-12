import { Dictionary, LANGUAGE } from '@/lib/i18n';

export type HeaderConfigTypes = {
  id: string;
  url: string;
};

export const pageUrlOptions = (dictionary: Dictionary['headerMenu'], lang: LANGUAGE): HeaderConfigTypes[] => [
  {
    id: dictionary.home,
    url: `${process.env.API_BASE_URL}/${lang}`,
  },
  {
    id: dictionary.about,
    url: `${process.env.API_BASE_URL}/${lang}/about`,
  },
  {
    id: dictionary.resume,
    url: `${process.env.API_BASE_URL}/${lang}/resume`,
  },
  {
    id: dictionary.projects,
    url: `${process.env.API_BASE_URL}/${lang}/projects`,
  },
  {
    id: dictionary.contact,
    url: `${process.env.API_BASE_URL}/${lang}/contact`,
  },
];

export const defaultPageUrl = (dictionary: Dictionary['headerMenu'], lang: LANGUAGE) =>
  pageUrlOptions(dictionary, lang)[0].id;

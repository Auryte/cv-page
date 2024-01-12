import { Dictionary } from '@/lib/i18n';

export type companyOptionsProps = {
  period: string;
  place: string;
  name: string;
  role: string;
};

export const companyOptions = (dictionary: Dictionary['resume']): companyOptionsProps[] => [
  {
    period: '01/2012 – 06/2022',
    place: dictionary.kaunas,
    name: 'a3d',
    role: dictionary.architect,
  },
  {
    period: '06/2022 – ',
    place: dictionary.vilnius,
    name: 'coherent solutions',
    role: dictionary.engineer,
  },
];

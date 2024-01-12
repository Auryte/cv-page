import { insuranceAppTools, weatherAppTools } from '@/components/BackgroundedTextBlock/config/textOptions.config';
import { Dictionary } from '@/lib/i18n';
import { getInsuranceImage, getWeatherAppImage } from '@/utils/getImages';

import { ProjectOptionsProps } from '../types/Project.types';

export const PROJECT_OPTIONS = (dictionary: Dictionary['projects']): ProjectOptionsProps[] => [
  {
    id: 'weather',
    image: getWeatherAppImage,
    link: 'https://wonderful-stardust-b19471.netlify.app/',
    words: weatherAppTools,
    chapters: [
      dictionary.weather.mainFeatures.chapter1,
      dictionary.weather.mainFeatures.chapter2,
      dictionary.weather.mainFeatures.chapter3,
      dictionary.weather.mainFeatures.chapter4,
      dictionary.weather.mainFeatures.chapter5,
    ],
  },
  {
    id: 'insurance',
    image: getInsuranceImage,
    link: 'https://github.com/Auryte/insurance_FE',
    words: insuranceAppTools,
    chapters: [
      dictionary.insurance.mainFeatures.chapter1,
      dictionary.insurance.mainFeatures.chapter2,
      dictionary.insurance.mainFeatures.chapter3,
      dictionary.insurance.mainFeatures.chapter4,
    ],
  },
];

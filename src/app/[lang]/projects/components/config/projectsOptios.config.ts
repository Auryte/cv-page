import { interiorProjectTools, weatherAppTools } from '@/components/BackgroundedTextBlock/config/textOptions.config';
import { Dictionary } from '@/lib/i18n';
import { getInteriorProjectImage, getStarWarsImage, getWeatherAppImage } from '@/utils/getImages';
import { ProjectOptionsProps } from '../../types/Project.types';


export const projectOptions = (dictionary: Dictionary['projects']): ProjectOptionsProps[] => [
  {
    id: 'weather',
    image: getWeatherAppImage,
    link: 'https://weather-city-b5o128olk-auryte.vercel.app/',
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
    id: 'starwars',
    image: getStarWarsImage,
    link: 'https://star-wars-theta-one.vercel.app/',
    words: interiorProjectTools,
    chapters: [
      dictionary.starwars.mainFeatures.chapter1,
      dictionary.starwars.mainFeatures.chapter2,
      dictionary.starwars.mainFeatures.chapter3,
    ],
  },
  {
    id: 'interior',
    image: getInteriorProjectImage,
    link: '/https://inter-designas-n66t5c3xj-auryte.vercel.app/',
    words: interiorProjectTools,
    chapters: [
      dictionary.interior.mainFeatures.chapter1,
      dictionary.interior.mainFeatures.chapter2,
      dictionary.interior.mainFeatures.chapter3,
    ],
  },
];

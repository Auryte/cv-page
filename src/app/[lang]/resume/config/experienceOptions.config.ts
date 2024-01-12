import { Dictionary } from '@/lib/i18n';
export type WorkExperienceProps = {
  chapters: string[];
  date: string;
  id: string;
  intro: string;
  role: string;
  tools: string;
};
export const workExperienceOptions = (dictionary: Dictionary['resume']): WorkExperienceProps[] => [
  {
    chapters: [
      dictionary.foodProject.chapter1,
      dictionary.foodProject.chapter2,
      dictionary.foodProject.chapter3,
      dictionary.foodProject.chapter4,
    ],
    date: '08 2023 – ',
    id: dictionary.foodProject.title,
    intro: dictionary.foodProject.introduction,
    role: 'Front-end developer',
    tools: 'Next.js App router, React, Typescript, Mui, Jest, PlayWright, React Testing Library, Zod, Git, Bitbucket,',
  },
  {
    chapters: [
      dictionary.forexProject.chapter1,
      dictionary.forexProject.chapter2,
      dictionary.forexProject.chapter3,
      dictionary.forexProject.chapter4,
      dictionary.forexProject.chapter5,
      dictionary.forexProject.chapter6,
      dictionary.forexProject.chapter7,
      dictionary.forexProject.chapter8,
    ],
    date: '01 2023 – 08 2023',
    id: dictionary.forexProject.title,
    intro: dictionary.forexProject.introduction,
    role: 'Fullstack developer',
    tools:
      'React, Redux, Redux-saga, Redux-form, Hooks, Material UI, Axios, Jest, Node.js, Express, Joi, MongoDB, Mongoose, Git, Bitbucket, Firebase, GoogleAuth, Google Identitity toolkit API',
  },
  {
    chapters: [
      dictionary.insuaranceProject.chapter1,
      dictionary.insuaranceProject.chapter2,
      dictionary.insuaranceProject.chapter3,
    ],
    date: '11 2022 – 01 2023',
    id: dictionary.insuaranceProject.title,
    intro: dictionary.insuaranceProject.introduction,
    role: 'Fullstack developer',
    tools:
      'Next.js Page router, TypeScript, Hooks, Context API,  Material UI, React-hook-form, Axios, Yup, Jest, MSW, Node.js, Express, MongoDB, Mongoose, AJV, JWT, Bcrypt, Swagger, JSDoc, Cloudinary, ESlint, Prettier, Git, Bitbucket, Scrum Pocker Tool',
  },
  {
    chapters: [
      dictionary.weatherProject.chapter1,
      dictionary.weatherProject.chapter2,
      dictionary.weatherProject.chapter3,
      dictionary.weatherProject.chapter4,
      dictionary.weatherProject.chapter5,
    ],
    date: '08 2022 – 11 2022',
    id: dictionary.weatherProject.title,
    intro: dictionary.weatherProject.introduction,
    role: 'Front-end developer',
    tools:
      'React, TypeScript, Hooks, Context API, React Router, Redux, SCSS modules, Jest, React Testing Library, Git, GitHub',
  },
  {
    chapters: [
      dictionary.socialProject.chapter1,
      dictionary.socialProject.chapter2,
      dictionary.socialProject.chapter3,
      dictionary.socialProject.chapter4,
      dictionary.socialProject.chapter5,
    ],
    date: '06 2022 – 08 2022',
    id: dictionary.socialProject.title,
    intro: dictionary.socialProject.introduction,
    role: 'Fullstack developer',
    tools: 'HTML, CSS, JavaScript ES6+, Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Git, Bitbucket',
  },
];

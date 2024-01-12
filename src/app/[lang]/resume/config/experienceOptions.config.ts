import { Dictionary } from '@/lib/i18n';

export type WorkExperienceProps = {
  chapters: string[];
  date: string;
  id: string;
  intro: string;
  role: string;
  tools: string;
};

export const WORK_EXPERIENCE_OPTIONS = (dictionary: Dictionary['resume']): WorkExperienceProps[] => [
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
      'React, Redux, Redux-saga, Redux-form, Hooks, Material UI, Axios, Jest, Node.js, Express, Joi, MongoDB, Mongoose, Git, Bitbucket, Firebase, GoogleAuth, Google Identity toolkit API',
  },
  {
    chapters: [
      dictionary.insuaranceProject.chapter1,
      dictionary.insuaranceProject.chapter2,
      dictionary.insuaranceProject.chapter3,
      dictionary.insuaranceProject.chapter4,
      dictionary.insuaranceProject.chapter5,
    ],
    date: '06 2022 – 01 2023',
    id: dictionary.insuaranceProject.title,
    intro: dictionary.insuaranceProject.introduction,
    role: 'Fullstack developer',
    tools:
      'Next.js Page router, TypeScript, Hooks, Context API,  Material UI, React-hook-form, Axios, Yup, Jest, MSW, Node.js, Express, MongoDB, Mongoose, AJV, JWT, Bcrypt, Swagger, JSDoc, Cloudinary, ESlint, Prettier, Git, Bitbucket, Scrum Pocker Tool',
  },
];

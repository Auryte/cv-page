import { Article } from '@/components/Article/Article';
import { BackgroundedTextBlock } from '@/components/BackgroundedTextBlock/BackgroundedTextBlock';
import { skills } from '@/components/BackgroundedTextBlock/config/textOptions.config';
import { SubHeading } from '@/components/SubHeading/SubHeading';
import { getDictionary, LANGUAGE } from '@/lib/i18n';

import { Education } from './components/Education/Education';
import { WorkExperience } from './components/WorkExperience/WorkExperience';

export const metadata = {
  description: 'Aureja Slance - resume. Skills - Javascript, React, Next.js, Node.js, MongoDB, Mongoose',
  title: 'Aureja Slance | Resume',
};

export interface ResumePageProps {
  params: {
    lang: LANGUAGE;
  };
}

const ResumePage = async (props: ResumePageProps) => {
  const { lang } = props.params;
  const { resume } = await getDictionary(lang);

  return (
    <>
      <Article dictionary={resume} />
      <SubHeading heading={resume.skills} />
      <BackgroundedTextBlock words={skills} />
      <SubHeading heading={resume.experience} />
      <WorkExperience dictionary={resume} />
      <SubHeading heading={resume.education} />
      <Education dictionary={resume} />
    </>
  );
};

export default ResumePage;

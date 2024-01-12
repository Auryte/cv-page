import { LANGUAGE, getDictionary } from '@/lib/i18n';
import { SubHeading } from '@/components/SubHeading/SubHeading';
import { BackgroundedTextBlock } from '@/components/BackgroundedTextBlock/BackgroundedTextBlock';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { Education } from './components/Education/Education';
import { Article } from '@/components/Article/Article';
import { skills } from '@/components/BackgroundedTextBlock/config/textOptions.config';

export const metadata = {
  description: 'Aureja Slance | Resume',
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

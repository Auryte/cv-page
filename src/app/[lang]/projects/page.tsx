import { LANGUAGE, getDictionary } from '@/lib/i18n';
import { Project } from './components/Project/Project';
import { ProjectOptionsProps } from './types/Project.types';
import { projectOptions } from './components/config/projectsOptios.config';

export const metadata = {
  description: 'Aureja Slance | Projects',
  title: 'Aureja Slance | Projects',
};
export interface ProjectsPageProps {
  params: {
    lang: LANGUAGE;
  };
}
const ProjectsPage = async (props: ProjectsPageProps) => {
  const { lang } = props.params;
  const { projects } = await getDictionary(lang);
  return (
    <>
      {projectOptions(projects).map(({ id, image, link, words, chapters }: ProjectOptionsProps) => (
        <>
          {chapters && (
            <Project
              key={id}
              chapters={chapters}
              dictionary={projects}
              id={id}
              image={image}
              link={link}
              words={words}
            />
          )}
        </>
      ))}
    </>
  );
};

export default ProjectsPage;

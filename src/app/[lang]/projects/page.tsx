import { getDictionary, LANGUAGE } from '@/lib/i18n';

import { Project } from './components/Project/Project';
import { PROJECT_OPTIONS } from './config/projectsOptios.config';
import { ProjectOptionsProps } from './types/Project.types';

export const metadata = {
  description: 'Aureja Slance - projects. Tools: Javascript, React, Next.js, Node.js, MongoDB, Mongoose',
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
      {PROJECT_OPTIONS(projects).map(({ id, image, link, words, chapters }: ProjectOptionsProps) => (
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

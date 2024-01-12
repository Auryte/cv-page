import '@/styles/globals.css';

import { getDictionary } from '@/lib/i18n';
import { RootLayoutComponentTypes } from '@/app/layout';
import { Grid } from '@/uiKit/Grid/Grid';
import { Heading } from '@/components/Heading/Heading';

const ProjectsPageLayout: RootLayoutComponentTypes = async (props) => {
  const { children, params } = props;
  const { lang } = params;
  const { headings } = await getDictionary(lang);
  return (
    <Grid
      container
      direction='column'
      spacing={5}
      sx={{ paddingTop: '112px', paddingBottom: '96px' }}
    >
      <Heading
        heading={headings.projects}
      />
      {children}
    </Grid>
  );
};

export default ProjectsPageLayout;

import '@/styles/globals.css';

import { getDictionary } from '@/lib/i18n';
import { RootLayoutComponentTypes } from '@/app/layout';
import { Grid } from '@/uiKit/Grid/Grid';
import { Heading } from '@/components/Heading/Heading';

const ResumePageLayout: RootLayoutComponentTypes = async (props) => {
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
      <Heading heading={headings.resume} />
      {children}
    </Grid>
  );
};

export default ResumePageLayout;

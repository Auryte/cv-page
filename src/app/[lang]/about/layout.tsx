import '@/styles/globals.css';

import { getDictionary } from '@/lib/i18n';
import { RootLayoutComponentTypes } from '@/app/layout';
import { Grid } from '@/uiKit/Grid/Grid';
import { Heading } from '@/components/Heading/Heading';

const AboutPageLayout: RootLayoutComponentTypes = async (props) => {
  const { children, params } = props;
  const { lang } = params;
  const { headings } = await getDictionary(lang);
  return (
    <Grid
      container
      direction='column'
      spacing={5}
      sx={{ marginTop: '72px', paddingBottom: '96px' }}
    >
      <Heading heading={headings.about} />
      {children}
    </Grid>
  );
};

export default AboutPageLayout;

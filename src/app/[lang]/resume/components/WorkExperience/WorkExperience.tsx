import { Accordion } from '@/components/Accordion/Accordion';
import { Dictionary } from '@/lib/i18n';
import { Box } from '@/uiKit/Box/Box';
import { Grid } from '@/uiKit/Grid/Grid';
import { Typography } from '@/uiKit/Typography/Typography';

import { styles } from './WorkExperience.styles';
import { COMPANY_OPTIONS } from '../../config/companyOptions.config';
import { WORK_EXPERIENCE_OPTIONS } from '../../config/experienceOptions.config';
import { Company } from '../Company/Company';

export const WorkExperience = (props: { dictionary: Dictionary['resume'] }) => {
  const { dictionary } = props;

  return (
    <Grid
      container
      item
      direction='column'
      md={4}
      sx={styles.sectionWrapper}
    >
      <Company options={COMPANY_OPTIONS(dictionary)[1]} />
      <Box sx={styles.accordionWrapper}>
        <Accordion
          dictionary={dictionary}
          accordionContent={WORK_EXPERIENCE_OPTIONS(dictionary)}
        />
      </Box>
      <Company options={COMPANY_OPTIONS(dictionary)[0]} />
      <Typography>{dictionary.architectDescription}</Typography>
      <Typography sx={styles.description}>
        <strong>{dictionary.tools}</strong> {dictionary.architectTools}
      </Typography>
    </Grid>
  );
};

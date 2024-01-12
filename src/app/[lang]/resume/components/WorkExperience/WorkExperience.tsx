import { styles } from './WorkExperience.styles';
import { workExperienceOptions } from '../../config/experienceOptions.config';
import { Dictionary } from '@/lib/i18n';
import { Accordion } from '@/components/Accordion/Accordion';
import { Grid } from '@/uiKit/Grid/Grid';
import { Company } from '../Company/Company';
import { companyOptions } from '../../config/companyOptions.config';
import { Typography } from '@/uiKit/Typography/Typography';
import { Box } from '@/uiKit/Box/Box';

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
      <Company options={companyOptions(dictionary)[1]} />
      <Box sx={styles.accordionWrapper}>
        <Accordion
          dictionary={dictionary}
          accordionContent={workExperienceOptions(dictionary)}
        />
      </Box>
      <Company options={companyOptions(dictionary)[0]} />
      <Typography>{dictionary.architectDescription}</Typography>
      <Typography sx={styles.description}>
        <strong>{dictionary.tools}</strong> {dictionary.architectTools}
      </Typography>
    </Grid>
  );
};

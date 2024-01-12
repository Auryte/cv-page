import { Grid } from '@/uiKit/Grid/Grid';
import { Typography } from '@/uiKit/Typography/Typography';
import { hasBlackBackground, hasGreyBackground } from '@/utils/wordsPositionCheck';

import { BackgroundedTextComponent } from './BackgroundedTextBlock.types';
import { styles } from './BackgrounsTextBlock.styles';

export const BackgroundedTextBlock: BackgroundedTextComponent = (props) => {
  const { sx, words } = props;

  return (
    <Grid
      container
      item
      direction='row'
      md={4}
      sx={{
        ...styles.sectionWrapper,
        ...sx,
      }}
    >
      {words.map((skill, index) => (
        <Typography
          key={index}
          variant='h4'
          sx={[
            hasGreyBackground(index) ? styles.bgGrey : styles.noBackround,
            hasBlackBackground(index) && styles.bgBlack,
          ]}
        >
          {skill}
        </Typography>
      ))}
    </Grid>
  );
};

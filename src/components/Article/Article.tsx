import { Grid } from '@/uiKit/Grid/Grid';
import { Typography } from '@/uiKit/Typography/Typography';
import { styles } from './Article.styles';
import { ArticleComponent } from './Article.types';

export const Article: ArticleComponent = (props) => {
  const { dictionary, sxTitle, sxWrapper } = props;
  return (
    <Grid
      container
      item
      direction='column'
      md={4}
      sx={{ ...styles.sectionWrapper, ...sxWrapper }}
    >
      <Typography
        variant='h3'
        sx={{ ...styles.title, ...sxTitle }}
      >
        {dictionary.summaryTitle}
      </Typography>
      <Typography sx={styles.introduction}>{dictionary.summaryArticle}</Typography>
    </Grid>
  );
};

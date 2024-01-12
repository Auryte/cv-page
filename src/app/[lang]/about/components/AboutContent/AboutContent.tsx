import { Box } from '@/uiKit/Box/Box';
import { Typography } from '@/uiKit/Typography/Typography';
import { Grid } from '@/uiKit/Grid/Grid';
import { Button } from '@/uiKit/Button/Button';
import { getAboutImage, getCV } from '@/utils/getImages';
import Link from 'next/link';
import { styles } from './AboutContent.styles';
import { ArticleWithImage } from '@/components/ArticleWitthImage/ArticleWithImage';
import { AboutContentComponent } from './AboutContent.types';

export const AboutContent: AboutContentComponent = (props) => {
  const { dictionary, lang } = props;
  return (
    <>
      <Grid
        container
        item
        direction='column'
        md={4}
        sx={styles.sectionWrapper}
      >
        <Typography
          variant='body2'
          sx={styles.introduction}
        >
          {dictionary.introduction}
        </Typography>

        <Grid
          item
          md={3}
          sx={styles.quoteWrapper}
        >
          <Typography
            variant='h3'
            sx={styles.quoteGrey}
            style={{ fontWeight: 100 }}
          >
            {dictionary.quote1}
          </Typography>
          <Box sx={{ marginTop: '16px' }}>
            <Typography
              variant='h3'
              sx={styles.qouteRegular}
            >
              {dictionary.quote2}
            </Typography>
            <Typography
              variant='h3'
              sx={styles.quoteBlack}
            >
              {dictionary.quote3}
            </Typography>
          </Box>
          <Box sx={{ marginTop: '16px' }}>
            <Typography
              variant='h3'
              sx={styles.quoteGrey}
            >
              {dictionary.quote4}
            </Typography>
            <Typography
              variant='h3'
              sx={styles.qouteRegular}
            >
              {dictionary.quote5}
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          md={4}
        >
          <Link
            href={getCV}
            target='_blank'
          >
            <Button
              color='inherit'
              variant='outlined'
              size='small'
              sx={styles.button}
            >
              {dictionary.download}
            </Button>
          </Link>
        </Grid>
      </Grid>

      <ArticleWithImage
        dictionary={dictionary}
        image={getAboutImage}
        link={`${process.env.NEXT_PUBLIC_URL}/${lang}/contact`}
        chapters={[dictionary.mainFeatures.chapter1]}
        sxTypo={{ width: {md: '70%', xs: '100%'} }}
      />
    </>
  );
};

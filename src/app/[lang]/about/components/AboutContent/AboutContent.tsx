import Link from 'next/link';

import { ArticleWithImage } from '@/components/ArticleWithImage/ArticleWithImage';
import { language } from '@/lib/i18n';
import { Box } from '@/uiKit/Box/Box';
import { Button } from '@/uiKit/Button/Button';
import { Grid } from '@/uiKit/Grid/Grid';
import { Typography } from '@/uiKit/Typography/Typography';
import { getAboutImage, getCVEN, getCVLT } from '@/utils/getImages';

import { styles } from './AboutContent.styles';
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
            href={lang === language.lt ? getCVLT : getCVEN}
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
        sxTypo={{
          width: {
            md: '70%',
            xs: '100%',
          },
        }}
      />
    </>
  );
};

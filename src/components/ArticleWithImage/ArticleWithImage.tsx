import { Button } from '@/uiKit/Button/Button';
import { Grid } from '@/uiKit/Grid/Grid';
import { List, ListItem } from '@mui/material';
import Link from 'next/link';
import { styles } from './ArticleWithImage.styles';
import { Box } from '@/uiKit/Box/Box';
import { Typography } from '@/uiKit/Typography/Typography';
import { ArticleWithImageComponent } from './ArticleWithImage.types';

export const ArticleWithImage: ArticleWithImageComponent = (props) => {
  const { chapters, dictionary, image, link, sxArticleWrapper, sxImage, sxBlock, sxTypo } = props;
  return (
    <>
      <Grid
        item
        sx={styles.imgWrapper}
      >
        <Box
          component='img'
          src={image}
          sx={{ ...styles.image, ...sxImage }}
        />
      </Grid>
      <Grid
        container
        item
        direction='column'
        md={4}
        sx={{ ...styles.articleWrapper, ...sxArticleWrapper }}
      >
        <List>
          {chapters.map((chapter: string, index: number) => (
            <ListItem
              key={index}
              sx={{ padding: 0 }}
            >
              <Typography
                variant='body2'
                sx={{ ...styles.article, ...sxTypo }}
              >
                {chapter}
              </Typography>
            </ListItem>
          ))}
        </List>

        <Grid
          container
          item
          spacing={3}
          md={4}
          sx={{ padding: '48px' }}
        >
          <Link
            href={link}
            target='_blank'
          >
            <Button
              color='inherit'
              variant='outlined'
              size='small'
              sx={styles.button}
            >
              {dictionary.linkButton}
            </Button>
          </Link>
        </Grid>
        <Box sx={{ ...styles.colorBlock, ...sxBlock }} />
      </Grid>
    </>
  );
};

import { Grid } from '@/uiKit/Grid/Grid';
import { styles } from './Project.styles';
import { BackgroundedTextBlock } from '@/components/BackgroundedTextBlock/BackgroundedTextBlock';
import { Article } from '@/components/Article/Article';
import { ArticleWithImage } from '@/components/ArticleWitthImage/ArticleWithImage';
import { ProjectComponent } from '../../types/Project.types';

export const Project: ProjectComponent = (props) => {
  const { chapters, dictionary, id, image, link, words } = props;
  return (
    <>
      <Grid
        container
        item
        direction='column'
        md={4}
        sx={styles.sectionWrapper}
      >
        <Article dictionary={dictionary[id]} />
        <BackgroundedTextBlock
          sx={styles.backgroundedTextBlock}
          words={words}
        />
      </Grid>
      <Grid
        container
        item
        direction='column'
        md={4}
        sx={styles.sectionImageWrapper}
      >
        <ArticleWithImage
          dictionary={dictionary[id]}
          image={image}
          link={link}
          chapters={chapters}
          sxArticleWrapper={styles.sxArticleWrapper}
          sxImage={styles.sxImage}
          sxBlock={{ display: 'none' }}
          sxTypo={{ padding: 0 }}
        />
      </Grid>
    </>
  );
};

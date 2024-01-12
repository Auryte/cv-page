import Link from 'next/link';

import { Grid } from '@/uiKit/Grid/Grid';
import { Icon } from '@/uiKit/Icon/Icon';
import { Typography } from '@/uiKit/Typography/Typography';
import { styles } from './HeaderLogo.styles';

const HeaderLogo = () => (
  <Link
    href='/'
    passHref
    style={styles.link}
  >
    <Grid
      alignItems='center'
      container
      item
      justifyContent='start'
      sx={{ backgroundColor: 'inherit' }}
    >
      <Grid
        alignItems='center'
        container
        item
        sx={{ backgroundColor: 'inherit' }}
        xs={3}
      >
        <Icon
          color='primary'
          fontSize='large'
          name='logo'
        />
      </Grid>
      <Grid
        alignItems='start'
        container
        direction='column'
        item
        justifyContent='right'
        sx={{ backgroundColor: 'inherit' }}
        xs={9}
      >
        <Typography sx={styles.text}>Aureja</Typography>
      </Grid>
    </Grid>
  </Link>
);

export default HeaderLogo;

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
      <Icon
        color='primary'
        fontSize='large'
        name='logo'
      />
      <Typography sx={styles.text}>Aureja</Typography>
    </Grid>
  </Link>
);

export default HeaderLogo;

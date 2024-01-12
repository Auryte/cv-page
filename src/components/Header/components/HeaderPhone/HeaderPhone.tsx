import Link from 'next/link';

import { Grid } from '@/uiKit/Grid/Grid';
import { Icon } from '@/uiKit/Icon/Icon';
import { Typography } from '@/uiKit/Typography/Typography';

import { styles } from './HeaderPhone.styles';

const HeaderPhone = () => (
  <Grid
    item
    justifyContent='space-evenly'
    alignContent='center'
    alignItems='center'
    sx={styles.wrapper}
  >
    <Typography>|</Typography>
    <Link href='tel:+37069913990'>
      <Icon
        name='phone'
        fontSize='small'
        sx={styles.icon}
      />
    </Link>
    <Link
      href='tel:+37069913990'
      style={styles.phoneLink}
    >
      <Typography sx={styles.text}>+370 699 13990</Typography>
    </Link>

    <Typography>|</Typography>
  </Grid>
);

export default HeaderPhone;

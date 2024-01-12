import { Grid } from '@/uiKit/Grid/Grid';

import { HeaderIconsMenu } from './components/HeaderIconsMenu/HeaderIconsMenu';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import { HeaderMobileMenu } from './components/HeaderMobileMenu/HeaderMobileMenu';
import HeaderPhone from './components/HeaderPhone/HeaderPhone';
import { HeaderTabBar } from './components/HeaderTabBar/HeaderTabBar';
import { styles } from './Header.styles';
import { HeaderComponent } from './Header.types';

export const Header: HeaderComponent = (props) => {
  const { dictionary, defaultPage, pages } = props;

  return (
    <Grid
      alignItems='center'
      container
      item
      justifyContent='space-between'
      sx={styles.mainWrapper}
      xs={12}
    >
      <Grid
        item
        md={2}
        sx={{ backgroundColor: 'inherit' }}
        xs={6}
      >
        <HeaderLogo />
      </Grid>
      <Grid
        container
        item
        justifyContent='end'
        md={10}
        xs={6}
      >
        <Grid
          item
          justifyContent='right'
          lg={9}
          md={10}
          sx={styles.wrapper}
          xs={0}
        >
          <HeaderTabBar
            defaultPage={defaultPage}
            dictionary={dictionary}
            pages={pages}
          />
        </Grid>
        <Grid
          item
          lg={2}
          sx={styles.phoneWrapper}
          xs={0}
        >
          <HeaderPhone />
        </Grid>
        <Grid
          item
          lg={1}
          md={2}
          sx={styles.wrapper}
          xs={0}
        >
          <HeaderIconsMenu />
        </Grid>
        <Grid
          item
          justifyContent='end'
          sx={styles.mobileWrapper}
          xs={12}
        >
          <HeaderMobileMenu pages={pages} />
        </Grid>
      </Grid>
    </Grid>
  );
};

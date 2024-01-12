import React, { ReactNode } from 'react';

import { Grid } from '@/uiKit/Grid/Grid';

import { Heading } from '../Heading/Heading';

const Layout = (props: { children: ReactNode; heading: string }) => {
  const { children, heading } = props;

  return (
    <Grid
      container
      direction='column'
      spacing={5}
      sx={{
        paddingTop: '112px',
        paddingBottom: '96px',
      }}
    >
      <Heading heading={heading} />
      {children}
    </Grid>
  );
};

export default Layout;

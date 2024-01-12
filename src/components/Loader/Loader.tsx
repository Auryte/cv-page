import { Box } from '@/uiKit/Box/Box';

import { styles } from './Loader.styles';

export const Loader = () => (
  <Box sx={styles.wrapper}>
    <Box sx={styles.loader}></Box>
  </Box>
);

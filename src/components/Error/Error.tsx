import { Box } from '@/uiKit/Box/Box';
import { Typography } from '@/uiKit/Typography/Typography';
import { Button } from '@mui/material';
import { styles } from './Error.styles';
import { ErrorComponent } from './Error.types';

export const ErrorContent: ErrorComponent = (props) => {
  const { dictionary, error, reset } = props;
  return (
    <Box sx={styles.wrapper}>
      <Typography
        sx={styles.text}
        variant='h5'
      >
        {dictionary?.smthWrongMsg}
      </Typography>
      {error?.message && (
        <Typography variant='h6'>
          {dictionary?.error} "{error.message}"
        </Typography>
      )}
      <Button
        color='inherit'
        variant='outlined'
        size='small'
        onClick={reset}
        sx={styles.button}
      >
        {dictionary?.retry}
      </Button>
      <Button
        color='inherit'
        variant='outlined'
        size='small'
        href='/'
        onClick={reset}
        sx={styles.button}
      >
        {dictionary?.goHome}
      </Button>
    </Box>
  );
};

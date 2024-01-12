import { Loader } from '@/components/Loader/Loader';
import { Box } from '@/uiKit/Box/Box';

export default function HomePageLoading() {
  return (
    <Box
      sx={{
        marginTop: '100px',
        textAlign: 'center',
        marginX: 'auto',
        width: '30%',
        height: 'calc(100vh - 100px)',
      }}
    >
      <Loader />
    </Box>
  );
}

import { Dictionary } from '@/lib/i18n';
import { Box } from '@/uiKit/Box/Box';

export const CustomExpandIcon = (props: { dictionary: Dictionary['resume'] }) => {
  const { dictionary } = props;
  return (
    <Box
      sx={{
        '.Mui-expanded & > .collapsIconWrapper': {
          display: 'none',
        },
        '.expandIconWrapper': {
          display: 'none',
        },
        '& .Mui-expanded & > .expandIconWrapper': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'end',
        },
        'color': 'text.main',
        'fontWeight': 900,
        'paddingBottom': '8px',
      }}
    >
      <div className='expandIconWrapper'></div>
      <div className='collapsIconWrapper'>{dictionary.learnMore}</div>
    </Box>
  );
};

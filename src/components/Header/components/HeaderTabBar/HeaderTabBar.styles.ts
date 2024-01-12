export const styles = {
  headerTabBar: {
    marginRight: '1rem',
    padding: '0.875rem 0.625rem',
    fontWeight: '400',
    color: 'text.main',
    fontSize: '1rem',
  },
  tabsIndicatorProps: {
    backgroundColor: 'secondary.main',
    height: '40px',
    zIndex: '-2',
    marginBottom: '4px',
    justifyContent: 'right',
  },
  tabsContent: {
    '& .MuiTabs-flexContainer': {
      justifyContent: 'right',
      button: {
        width: '32px',
        maxWidth: '48px',
      },
      color: 'text.main',
    },
    '.Mui-selected': {
      color: 'text.dark',
    },
  },
};

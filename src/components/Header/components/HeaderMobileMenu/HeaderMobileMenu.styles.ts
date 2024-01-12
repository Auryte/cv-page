export const styles = {
  menu: {
    'display': { xs: 'block', md: 'none' },
    'marginTop': '14px',
    '& .MuiPaper-root': {
      minWidth: '100%',
      backgroundColor: 'primary.main', 
    },
    'ul': {
      padding: 0,
    },
  },
  menuItem: {
    'height': '64px',
    'width': '100%',
    'display': 'block',
    'textAlign': 'center',
    'paddingTop': '18px',
    '&:hover': {
      backgroundColor: 'primary.dark', 
    },
  },
  locationMenuItem: {
    'backgroundColor': 'secondary.main',
    '&:hover': {
      backgroundColor: 'secondary.main', 
    },
  },
};

export const styles = {
  title: {
    'fontSize': '40px',
    'fontWeight': '500',
    'color': 'text.dark',
    'position': 'relative',
    'display': 'flex',
    'justifyContent': 'flex-end',
    'alignItems': 'center',
    'marginLeft': '-80px',
    '&::after': {
      content: '" "',
      display: 'block',
      width: '100%',
      height: '120px',
      bgcolor: 'secondary.main',
      position: 'absolute',
      right:{md: '-80px', xs: '-40px'},
      zIndex: -1,
    },
  },
  wrapper: {
    width: {md:'40%', xs: '90%'}, 
    margin: 0
  }
};

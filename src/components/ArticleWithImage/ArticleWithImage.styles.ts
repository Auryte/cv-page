export const styles = {
  articleWrapper: {
    width: {
      md: '880px',
      xs: '100%',
    },
    backgroundColor: 'secondary.light',
    margin: 'auto',
    marginTop: {
      lg: '-540px',
      xs: '-64px',
    },
    position: 'relative',
  },
  article: {
    color: 'text.main',
    fontSize: {
      md: '20px',
      xs: '16px',
    },
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: {
      md: '48px',
      xs: '32px',
    },
    padding: '48px',
    width: '100%',
  },
  button: {
    marginTop: '64px',
    paddingX: {
      md: '64px',
      xs: '24px',
    },
    fontSize: {
      md: '24px',
      xs: '16px',
    },
    color: 'text.main',
    fontWeight: 400,
    textTransform: 'none',
  },
  colorBlock: {
    width: '120px',
    height: {
      md: '640px',
      sm: '80%',
      xs: '65%',
    },
    backgroundColor: 'secondary.main',
    position: 'absolute',
    left: {
      lg: '90%',
      md: '60%',
      sm: '40%',
      xs: 0,
    },
    transform: {
      md: 'rotate(0)',
      xs: 'rotate(90deg)',
    },
    bottom: {
      md: '-48px',
      xs: '480px',
    },
    zIndex: 3,
    opacity: 0.5,
  },
  image: {
    width: {
      lg: '560px',
      xs: '90%',
    },
    height: '100%',
    zIndex: 2,
  },
  imgWrapper: {
    display: 'flex',
    justifyContent: 'right',
  },
};

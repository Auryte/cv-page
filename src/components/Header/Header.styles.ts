export const styles = {
  mainWrapper: {
    paddingX: {
      xs: 2,
      md: 6,
    },
    paddingY: 1,
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: 10,
    boxShadow: `0 1px 5px grey`,
    backgroundColor: 'inherit',
  },
  wrapper: {
    display: {
      xs: 'none',
      md: 'flex',
    },
    backgroundColor: 'inherit',
  },
  phoneWrapper: {
    display: {
      xs: 'none',
      lg: 'flex',
    },
    backgroundColor: 'inherit',
  },
  mobileWrapper: {
    display: {
      xs: 'flex',
      md: 'none',
    },
    backgroundColor: 'inherit',
  },
};

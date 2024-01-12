const commonProps = {
  fontStyle: 'normal',
  fontWeight: 100,
  color: 'text.main',
  display: 'inline',
  paddingInline: '8px 8px',
  marginBottom: '8px',
  width: 'fit-content',
};

export const styles = {
  sectionWrapper: {
    marginX: 'auto',
    width: { md: '738px', xs: '100%' },
    marginY: '80px',
  },
  bgGrey: {
    ...commonProps,
    backgroundColor: 'primary.dark',
    color: 'common.dark',
  },
  bgBlack: {
    ...commonProps,
    backgroundColor: 'common.dark',
    color: 'common.light',
  },
  noBackround: {
    ...commonProps,
  },
};

export const styles = {
  'mainWrapper': {
    height: 'calc(100vh - 96px)',
    backgroundColor: 'inherit',
    color: 'text.main',
    width: '100%',
  },
  'mainHeading': {
    'fontSize': '120px',
    'fontWeight': '700',
    'lineHeight': '1.1',
    'paddingBottom': '40px',
    'animation': 'an 4s ease-out 1 both',
    '@media (max-width: 780px)': {
      fontSize: '80px',
    },
  },
  'headingTwo': {
    'paddingLeft': '24px',
    '&:after': {
      width: '120%',
      left: { md: '64px', xs: 0 },
    },
  },
  'headingThree': {
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 400,
    animation: 'an 2.5s ease-out 1 both',
  },
  '@keyframes an': {
    from: {
      opacity: 0,
      transform: 'translate(0px, 40px)',
    },
    to: {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
  },
  'imageWrapper': {
    height: { xs: '50vh', md: 'calc(100vh - 104px)' },
    backgroundColor: 'inherit',
  },
};

export const image = (theme: string) => ({
  'mixBlendMode': theme === 'dark' ? 'multiply' : 'hard-light',
  'filter': theme === 'dark' ? 'contrast(5)' : 'contrast(1)',
  'marginLeft': { xs: 0 },
  'animation': { md: 'mover 2s forwards' },
  'animationFillMode': 'forwards',
  '@keyframes mover': {
    '0%': {
      transform: 'translateX(0px)',
    },
    '100%': {
      transform: 'translateX(-150px)',
    },
  },
});

export const secondHeading = (theme: string) => ({
  'paddingLeft': '72px',
  'width': { md: '50%', xs: '100%' },
  'fontSize': '48px',
  'fontWeight': '500',
  'color': 'text.dark',
  'animation': 'an 3s ease-out 1 both',
  '&::after': {
    animation: 'after 3s ease-out 1 both',
    content: '" "',
    display: 'block',
    width: '100%',
    height: '150px',
    bgcolor: 'secondary.main',
    position: 'absolute',
    top: theme === 'dark' ? '520px' : '550px',
    left: '48px',
    zIndex: -1,
  },
  '@keyframes after': {
    from: {
      opacity: 0,
      transform: 'translate(-48px, -520px)',
    },
    to: {
      opacity: 1,
      transform: 'translate(-48px, -520px)',
    },
  },
  '@keyframes an': {
    from: {
      opacity: 0,
      transform: 'translate(0px, 48px)',
    },
    to: {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
  },
});

export const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    'borderRadius': '50%',
    'width': '2.5em',
    'height': '2.5em',
    'animation-fill-mode': 'both',
    'animation': 'bblFadInOut 1.8s infinite ease-in-out',
    'color': 'secondary.dark',
    'fontSize': '7px',
    'position': 'relative',
    'text-indent': '-9999em',
    'transform': 'translateZ(0)',
    'animation-delay': '-0.16s',
    '&::before, &:after': {
      'borderRadius': '50%',
      'width': '2.5em',
      'height': '2.5em',
      'animation-fill-mode': 'both',
      'animation': 'bblFadInOut 1.8s infinite ease-in-out',
    },
    '&:before, &:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
    },
    '&::before': {
      'left': '-3.5em',
      'animation-delay': '-0.32s',
    },
    '&:after': {
      left: '3.5em',
    },
    '@keyframes bblFadInOut': {
      '0%, 80%, 100%': { boxShadow: ' 0 2.5em 0 -1.3em' },
      '40%': { boxShadow: '0 2.5em 0 0' },
    },
  },
};

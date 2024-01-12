import { createTheme, Theme } from '@mui/material/styles';

import '@mui/material/styles/createPalette';
import { roboto } from '@/app/fonts';

const PRIMARY_COLOR = '#F4F4F4';
const PRIMARY_COLOR_DARK = '#E3E2E2';
const COMMON_COLOR_DARK = '#1a1919';
const SECONDARY_COLOR = '#F0FF00';
const SECONDARY_COLOR_LIGHT = '#E3E2E2';
const SECONDARY_COLOR_DARK = '#d3e002';

const theme: Theme = createTheme({
  palette: {
    background: {
      default: PRIMARY_COLOR,
    },
    mode: 'light',
    primary: {
      main: PRIMARY_COLOR,
      dark: PRIMARY_COLOR_DARK,
      light: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
      light: SECONDARY_COLOR_LIGHT,
      dark: SECONDARY_COLOR_DARK,
    },
    common: {
      main: '#C3C3C3',
      light: '#FFFFFF',
      dark: COMMON_COLOR_DARK,
    },
    error: {
      main: '#FF5252',
      light: '#FF8A80',
      dark: '#D32F2F',
    },
    info: {
      main: '#212121',
      light: '#82B1FF',
      dark: '#1976D2',
    },
    success: {
      main: '#00C853',
      light: '#00E676',
      dark: '#388E3C',
    },
    warning: {
      main: '#FFAB40',
      light: '#FFD180',
      dark: '#FB8C00',
    },
    text: {
      main: '#212121',
      light: '#546E7A',
      dark: '#212121',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;

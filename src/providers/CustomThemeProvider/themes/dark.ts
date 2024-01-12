import { createTheme, Theme } from '@mui/material/styles';
import '@mui/material/styles/createPalette';
import { roboto } from '@/app/fonts';

const PRIMARY_COLOR = '#323030';
const PRIMARY_COLOR_DARK = '#E3E2E2';
const PRIMARY_COLOR_LIGHT = '#504A4A';
const COMMON_COLOR_DARK = '#1a1919';
const SECONDARY_COLOR = '#F0FF00';
const SECONDARY_COLOR_LIGHT = '#818181';
const SECONDARY_COLOR_DARK = '#F0FF00';

const theme: Theme = createTheme({
  palette: {
    background: {
      default: PRIMARY_COLOR,
    },
    mode: 'dark',
    primary: {
      main: PRIMARY_COLOR,
      dark: '#757575',
      light: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
      light: SECONDARY_COLOR_LIGHT,
      dark: SECONDARY_COLOR_DARK,
    },
    common: {
      main: '#757575',
      light: '#FFFFFF',
      dark: COMMON_COLOR_DARK,
    },
    error: {
      main: '#FF5252',
      light: '#FF8A80',
      dark: '#D32F2F',
    },
    info: {
      main: SECONDARY_COLOR,
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
      main: '#E3E2E2',
      light: '##FFFFFF',
      dark: '#212121',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
export default theme;

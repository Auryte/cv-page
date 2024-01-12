declare module '@mui/material/styles' {
  export interface TypeText {
    main: string;
    light: string;
    dark: string;
  }

  type PaletteMode = 'light' | 'dark';
  export interface Theme {
    palette: {
      background: {default: string};
      mode: PaletteMode;
      primary: TypeText;
      secondary: TypeText;
      common: TypeText;
      error: TypeText;
      info: TypeText;
      success: TypeText;
      warning: TypeText;
      text: TypeText;
    };
    typography: {fontFamily: React.CSSProperties['fontFamily']};
  }

  export function createTheme(theme: Theme): Theme;
}

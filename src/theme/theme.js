import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#121858',
      second: '#1a237e',
      third: '#474f97',
    },
    secondary: {
      main: '#1c54b2',
      second: '#2979ff',
      third: '#5393ff',
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

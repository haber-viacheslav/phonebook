import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
            }),
        }),
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
        button: 'button',
      },
    },
  },
  palette: {
    mode: 'dark',
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

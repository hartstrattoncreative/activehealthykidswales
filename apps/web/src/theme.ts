import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: { main: '#0086cb' },
    background: {
      paper: '#00679e',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: [
      // Brand - Google font
      'Cantarell',
      // System fonts below
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2.3rem',
    },
  },
});

export default theme;

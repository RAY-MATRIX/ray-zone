import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 350,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    peach: {
      main: '#FFD5CD',
    },
    purple: {
      main: '#8675A9',
    },
    red: {
      main: '#EE6983',
    },
    pink: {
      main: '#EFBBCF',
    },
    lightPurple: {
      main: '#C3AED6',
    },
    dark: {
      main: '#816c96',
    },
    success: {
      main: '#f16a70',
    },
    white: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: 'Raleway, Poppins, sans-serif',
    fontWeight: '400',
    button: {
      fontFamily: `'Raleway', sans-serif`,
      //   fontFamily: 'Fjalla One',
      fontStyle: 'normal',
      cursor: 'pointer',
      textTransform: 'capitalize',
      backgroundColor: '#EE6983',
      color: '#fff',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        },
        * {
          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
            background-color: #fff;
          },
          :hover ::-webkit-scrollbar-track-piece {
            background-color: #fff;
            border-radius: 6px;
          },
          :hover::-webkit-scrollbar-thumb:vertical {
            background-color: #c0cedc;
            border-radius: 6px;
            outline: 2px solid #fff;
            outline-offset: -2px;
            border: 2px solid #fff;
          },
          :hover::-webkit-scrollbar-thumb:vertical:hover {
            background-color: #c0cecc;
          },
          
          scrollbar-color: #c0cedc #fff;
          scrollbar-width: thin;
        }
      `,
    },
  },
});

export default theme;

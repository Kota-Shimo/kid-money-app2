// pages/_app.js
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f57c00', // オレンジ
    },
    secondary: {
      main: '#4caf50', // 緑
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* MUIのリセットCSS */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

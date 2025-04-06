// pages/_app.js
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Layout from '../components/Layout';

// 好みで色やフォントをカスタマイズ
const theme = createTheme({
  palette: {
    primary: {
      main: '#f57c00', // オレンジ
    },
    secondary: {
      main: '#4caf50', // 緑
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

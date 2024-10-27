import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppRouterCacheProvider>
      <Component {...pageProps} />
    </AppRouterCacheProvider>
  );
}

export default MyApp;

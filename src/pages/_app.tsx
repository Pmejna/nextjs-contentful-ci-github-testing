import type { AppProps } from 'next/app';
import { Global, ThemeProvider, CacheProvider } from '@emotion/react';

import { theme } from 'theme';

import { global, normalize } from 'theme/global';

import { emotionCache } from 'lib/cache/emotion';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Global styles={normalize} />
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;

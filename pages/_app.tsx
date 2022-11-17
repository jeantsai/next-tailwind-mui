import '../styles/globals.css'
import type { AppProps } from 'next/app'
import createCache from "@emotion/cache";
import {CacheProvider} from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import {StyledEngineProvider} from "@mui/material/styles";

const cache = createCache({
  key: 'css',
  prepend: true,
})

export default function App({ Component, pageProps }: AppProps) {

  return (
      <CacheProvider value={cache}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledEngineProvider>
      </CacheProvider>
  )
}

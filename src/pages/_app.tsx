//import '@/styles/globals.css'
//import type { AppProps } from 'next/app'

//export default function App({ Component, pageProps }: AppProps) {
//  return <Component {...pageProps} />
//}
// pages/_app.tsx
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { ConversationProvider } from '../../src/components/ConversationContext'; // Import ConversationProvider

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* <ConversationProvider> /* Add ConversationProvider */
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    /*</ConversationProvider> */
  );
}

export default MyApp;


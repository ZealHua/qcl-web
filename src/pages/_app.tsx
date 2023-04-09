// _app.tsx
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';


function MyApp({ Component, pageProps }) {
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#fff',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: grey[900],
      },
    },
  });

  const [theme, setTheme] = useState(lightTheme); // 默认使用 lightTheme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* 将 setTheme 函数传递给需要的组件，以便用户选择新的主题 */}
      <Component {...pageProps} setTheme={setTheme} lightTheme={lightTheme} darkTheme={darkTheme} />
    </ThemeProvider>
  );
}

export default MyApp;



import { ThemeProvider } from 'next-themes';
import { darkTheme, globalCss } from '../../stitches.config';
import { DesignSystemProvider } from '../components/DesignSystemProvider';

const globalStyles = globalCss({
  html: {
    overflowX: 'hidden',
  },

  body: {
    margin: 0,
    backgroundColor: '$bgTheme',
  },

  'body, button': {
    fontFamily: '$untitled',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violet5',
  },
});

function App({ Component, pageProps }) {
  globalStyles();

  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </DesignSystemProvider>
  )
}

export default App

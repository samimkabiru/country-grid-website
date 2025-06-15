import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#e9f4fa',
      100: '#cfdae2',
      200: '#b2c2cd',
      300: '#93a9b8',
      400: '#7690a4',
      500: '#5c778a',
      600: '#475d6d',
      700: '#33434e',
      800: '#1d2830',
      900: '#050e15',
    },
  },
});

export default theme;

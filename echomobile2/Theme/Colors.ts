import { DefaultTheme, configureFonts, DarkTheme} from 'react-native-paper';

const fonts = configureFonts({
  web: {
    regular: {
      fontFamily: 'Ubuntu_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Ubuntu_500Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Ubuntu_300Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Ubuntu_300Light',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  }
})

export const LightModePaper = {
  ...DefaultTheme,
  fonts: fonts,
}

export const DarkModePaper = {
  ...DarkTheme,
  fonts: fonts,
}

export const LightMode = {
  ...DefaultTheme,
  dark: false,
  colors: {
    background: 'rgb(255, 255, 255)',
    background2: 'rgb(245, 248, 250)',
    background3: 'rgb(225, 232, 237)',

    primary: 'rgb(51, 147, 226)',
    secondary: '#4548fc',

    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgba(199, 199, 204, 0)',
    notification: 'rgb(143, 58, 255)',
  },
};

export const DarkMode = {
  ...DefaultTheme,
  dark: true,
  colors: {
    background: 'rgb(31, 33, 40)',
    background2: 'rgb(36, 38, 46)',
    background3: 'rgb(46, 49, 59)',

    primary: 'rgb(51, 147, 226)',
    secondary: '#4548fc',

    card: 'rgb(20, 23, 26)',
    text: 'rgb(245, 248, 250)',
    border: 'rgba(199, 199, 204, 0)',
    notification: 'rgb(143, 58, 255)',
  },
};
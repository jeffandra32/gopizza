
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { loadAsync } from 'expo-font'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme';
import { SignIn } from './src/screens';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'

export default function App() {
  useEffect(() => {
    const load = async () => {
      const fontsLoaded = {
        DMSans_400Regular,
        DMSerifDisplay_400Regular
      };

      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }

      await loadAsync(fontsLoaded);
      await SplashScreen.hideAsync();
    };
    load();

  }), [];

  return (
    <ThemeProvider theme={theme}>
      <SignIn></SignIn>
    </ThemeProvider>
  );
}

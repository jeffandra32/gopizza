
import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native'
import theme from '@theme/index';
import { StatusBar } from 'expo-status-bar'
import { SignIn } from './src/screens';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent backgroundColor='transparent' />
      <SignIn />
    </ThemeProvider>
  );
}

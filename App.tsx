import React from 'react';
import {StatusBar} from 'react-native';
import {Rajdhani_500Medium, Rajdhani_700Bold} from "@expo-google-fonts/rajdhani";
import {Inter_400Regular, Inter_500Medium} from "@expo-google-fonts/inter";
import AppLoading from 'expo-app-loading';
import {useFonts} from "expo-font";

/* import {SignIn} from './src/screens/SignIn'; */
import {Home} from './src/screens/Home';
import {Background} from "./src/components/Background";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Background>
  );
}

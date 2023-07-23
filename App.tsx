import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

import { Home } from './src/screens/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Home /> : <ActivityIndicator color="#1E6F9F" />}
    </View>
  );
}

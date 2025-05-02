import React from 'react';
import { Stack } from 'expo-router';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme} children={undefined}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(screens)/index" />
            <Stack.Screen name="(screens)/login" />
            <Stack.Screen name="(screens)/forgotpassword" />
            <Stack.Screen name="(screens)/resetpassword" />
            <Stack.Screen name="(screens)/verifyotp" />
            <Stack.Screen name="(screens)/profile" />
            <Stack.Screen name="(screens)/customer" />
            <Stack.Screen name="(screens)/dashboard" />
            <Stack.Screen name="(screens)/leads" />
            <Stack.Screen name="(screens)/report" />
          </Stack>
          <StatusBar style="light" hidden />
        </ThemeProvider>
        </SafeAreaProvider>
  );
}

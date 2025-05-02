import styles, { Container } from '@/components/custom';
import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
export const options = {  headerShown: false,
};
// Define colors as props
const gradientColors = ['rgba(78, 44, 190, 1)', 'rgba(163, 107, 226, 1)'] as const;

export default function Index() {
  const Router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      Router.replace('/login'); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, [Router]);
  return (
    <Container colors={gradientColors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <StatusBar  hidden = {true} /> 
      <View style={styles.splashScreen}>
        <Image
          source={require('../../assets/images/recuva1.png')}
          style={styles.splashLogo}
        />
      </View>

      <View style={styles.splashFooter}>
        <Text style={styles.splashFooter}>DebtRecuva @{new Date().getFullYear()}</Text>
      </View>
    </Container>
  );
}

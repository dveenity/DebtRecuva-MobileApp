import React, { useState } from 'react';
import { Alert, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import { Loginhandler } from '../services/apihandler';
import Notiflix from 'notiflix';
import * as SecureStore from 'expo-secure-store';
import axios, { AxiosError } from 'axios';


const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);




  // handle login 
  
  
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter email and password');
      return;
    }
  
    try {
      const response = await Loginhandler(email, password);
      console.log("Full response:", response.data);
    
      if (response.data.message === "success" && response.data.token) {
        await SecureStore.setItemAsync('userToken', response.data.token);
        Alert.alert('Login Successful', 'Redirecting...');
        setTimeout(() => {
          router.replace('/(screens)/dashboard');
        }, 2000);
      } else {
        Alert.alert('Login Failed', response.data.message || 'Invalid credentials');
      }
    
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as { message?: string };
    
      console.log("Login Error:", data?.message || err.message);
      Alert.alert('Login Error', data?.message || err.message || 'An unknown error occurred');
    }
  };


 

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 15 }} keyboardShouldPersistTaps="handled">
        <LoginBox>
          <Logo source={require('../../assets/images/recuva.png')} resizeMode="contain" />

          <Card>
            <CardBody>
              <Title>Welcome!</Title>
              <Subtitle>Login to access your DebtRecuva account</Subtitle>

              <Label>Email</Label>
              <Input
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
              />

              <Label>Password</Label>
              <PasswordWrapper>
                <Input
                  placeholder="Enter your password"
                  secureTextEntry={secure}
                  value={password}
                  onChangeText={setPassword}
                />
                <IconToggle onPress={() => setSecure(!secure)}>
                  <Ionicons name={secure ? 'eye-off-outline' : 'eye-outline'} size={24} color="#999" />
                </IconToggle>
              </PasswordWrapper>
              <TouchableOpacity onPress={() => router.push('/(screens)/forgotpassword')}>
              <ForgotText>
                Forget Password?
              </ForgotText>

              </TouchableOpacity>
              
              <PurpleButton start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgba(78, 44, 190, 1)', 'rgba(163, 107, 226, 1)']}>
                <LoginButton onPress={() => handleLogin()}>
                {/* <LoginButton onPress={() => router.push("/(screens)/dashboard")}> */}

                  <LoginButtonText>Login</LoginButtonText>

                </LoginButton>
                
              </PurpleButton>
            </CardBody>
          </Card>

        </LoginBox>
        <Footer>DebtRecuva @{new Date().getFullYear()}</Footer>
      </ScrollView>
    </Container>
    </SafeAreaView>
  );
};

export default Login;

// -------------------- Styled Components --------------------
const Container = styled.View`
  flex: 1;
  background-color: #e6ecf8;
`;

const LoginBox = styled.View`
  padding: 10px;
`;

const Logo = styled.Image`
  width: 180px;
  height: 60px;
  align-self: center;
  margin-bottom: 30px;
`;

const Card = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 24px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 5;
`;

const CardBody = styled.View``;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #222;
  margin-bottom: 5px;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #888;
  margin-bottom: 30px;
`;

const Label = styled.Text`
  font-size: 14px;
  color: #6E7191;
  margin-bottom: 6px;
`;

const Input = styled.TextInput`
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 12px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const PasswordWrapper = styled.View`
  position: relative;
`;

const IconToggle = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 12px;
`;

const ForgotText = styled.Text`
  color: #6E7191;
  text-align: right;
  margin-bottom: 20px;
`;

const PurpleButton = styled(LinearGradient)`
  border-radius: 10px;
`;

const LoginButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

const LoginButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Footer = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #657792;
  margin-top: 30px;
`;

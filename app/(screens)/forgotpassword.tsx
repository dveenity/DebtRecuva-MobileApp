import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';



const ForgotPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  

  const handleSendOtp = () => {
    if (!email) {
      Alert.alert('Missing Email', 'Please enter your email address.');
      return;
    }

    // TODO: Replace this with actual API call to send OTP
    Alert.alert('OTP Sent', `OTP has been sent to ${email}`);
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10 }}>
          <Logo source={require('../../assets/images/recuva.png')} resizeMode="contain" />
        <Box>

          <Description>
            Provide your registered email address, we will send you OTP to reset your password with.
          </Description>

          <StyledInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter email address"
            value={email}
            onChangeText={setEmail}
          />

         <PurpleButton start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgba(78, 44, 190, 1)', 'rgba(163, 107, 226, 1)']}>
          <SubmitButton onPress={handleSendOtp}>
            <ButtonText>Send</ButtonText>
          </SubmitButton>
          </PurpleButton>

          <LoginRedirect>
            Already have password?{' '}
            <LoginLink onPress={() => router.push("/login")}>
              Login
            </LoginLink>{' '}
            here.
          </LoginRedirect>

         
        </Box>
          <Footer>DebtRecuva @{new Date().getFullYear()}</Footer>
      </ScrollView>
    </Container>
  );
};

export default ForgotPassword;

// ------------------- Styled Components -------------------

const Container = styled.View`
  flex: 1;
  background-color: #e6ecf8;
`;

const Box = styled.View`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
  elevation: 5;
`;

const Logo = styled.Image`
  width: 160px;
  height: 60px;
  align-self: center;
  margin-bottom: 20px;
`;

const Description = styled.Text`
  text-align: center;
  color: #667791;
  font-size: 14px;
  margin-bottom: 24px;
`;

const StyledInput = styled.TextInput`
  background-color: #f1f1f1;
  border-radius:8px;
  padding: 16px;
  font-size: 16px;
  margin-bottom:24px;
`;

const PurpleButton = styled(LinearGradient)`
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.TouchableOpacity`
  padding: 14px;
  border-radius: 10px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const LoginRedirect = styled.Text`
  text-align: center;
  font-size: 13px;
  color: #444;
`;

const LoginLink = styled.Text`
  color: #6a4dfd;
  font-weight: bold;
`;

const Footer = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #aaa;
  margin-top: 30px;
`;


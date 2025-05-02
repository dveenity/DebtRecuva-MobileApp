import React, { useState } from 'react';
import { Alert, ScrollView, TextInput, TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';



const OTPVerification = () => {
const router = useRouter()

  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('user@example.com'); // This is just an example email, you should dynamically set it
  
  const handleOTPConfirm = () => {
    if (!otp) {
      Alert.alert('Error', 'Please enter the OTP.');
      return;
    }

    // TODO: Implement actual OTP verification logic here
    Alert.alert('Success', 'OTP verified successfully!');
  };

  const handleResendOTP = () => {
    // TODO: Implement actual resend OTP logic here
    Alert.alert('Resend', 'OTP has been resent!');
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10 }}>
          <Logo source={require('../../assets/images/recuva.png')} resizeMode="contain" />
        <Box>

          <Description>
            Enter OTP sent to this email <EmailText>{email}</EmailText> below.
          </Description>

          {/* OTP Input */}
          <InputWrapper>
            <StyledInput
              keyboardType="numeric"
              value={otp}
              onChangeText={setOtp}
              placeholder="Enter OTP"
            />
          </InputWrapper>

          {/* Confirm Button with Gradient */}
          <PurpleButton start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgba(78, 44, 190, 1)', 'rgba(163, 107, 226, 1)']}>
            <ConfirmButton onPress={handleOTPConfirm}>
              <ButtonText>Confirm</ButtonText>
            </ConfirmButton>
          </PurpleButton>

          {/* Resend OTP Link */}
          <ResendText>
            Didn't receive OTP?{' '}
            <ResendLink onPress={handleResendOTP}>Resend</ResendLink>
          </ResendText>
        </Box>

        <Footer>DebtRecuva @{new Date().getFullYear()}</Footer>
      </ScrollView>
    </Container>
  );
};

export default OTPVerification;

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
  width: 150px;
  height: 50px;
  align-self: center;
  margin-bottom: 50px;
`;

const Description = styled.Text`
  text-align: center;
  color: #555;
  font-size: 14px;
  margin-bottom: 24px;
`;

const EmailText = styled.Text`
  font-weight: bold;
  color: #333;
`;

const InputWrapper = styled.View`
  position: relative;
  margin-bottom: 16px;
`;

const StyledInput = styled.TextInput`
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 14px;
  font-size: 16px;
   margin-bottom: 20px;
`;

const PurpleButton = styled(LinearGradient)`
  border-radius: 14px;
  margin-bottom: 20px;
`;

const ConfirmButton = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 10px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const ResendText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

const ResendLink = styled.Text`
  color: #4e2cbe;
  font-weight: bold;
`;

const Footer = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #888;
  margin-top: 30px;
`;


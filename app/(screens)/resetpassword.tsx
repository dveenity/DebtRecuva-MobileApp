import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleReset = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Error', 'Both fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }

    // TODO: Implement actual password reset logic here
    Alert.alert('Success', 'Your password has been reset!');
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 10 }}>
          <Logo source={require('../../assets/images/recuva.png')} resizeMode="contain" />
        <Box>

          <Description>
            Provide your new password and confirm it here and you're all set to go.
          </Description>

          {/* New Password Input */}
          <InputWrapper>
            <StyledInput
              secureTextEntry={!showPassword}
              placeholder="New Password"
              value={password}
              onChangeText={setPassword}
            />
            <ToggleIcon onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#666" />
            </ToggleIcon>
          </InputWrapper>

          {/* Confirm Password Input */}
          <InputWrapper>
            <StyledInput
              secureTextEntry={!showConfirm}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <ToggleIcon onPress={() => setShowConfirm(!showConfirm)}>
              <Ionicons name={showConfirm ? 'eye-off' : 'eye'} size={24} color="#666" />
            </ToggleIcon>
          </InputWrapper>

          {/* Gradient Confirm Button */}
          <PurpleButton start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgba(78, 44, 190, 1)', 'rgba(163, 107, 226, 1)']}>
            <ConfirmButton onPress={handleReset}>
              <ButtonText>Confirm</ButtonText>
            </ConfirmButton>
          </PurpleButton>
        </Box>
        <Footer>DebtRecuva @{new Date().getFullYear()}</Footer>
      </ScrollView>
    </Container>
  );
};

export default ResetPassword;

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
  margin-bottom: 20px;
`;

const Description = styled.Text`
  text-align: center;
  color: #555;
  font-size: 14px;
  margin-bottom: 24px;
`;

const InputWrapper = styled.View`
  position: relative;
  margin-bottom: 20px;
  
`;

const StyledInput = styled.TextInput`
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 14px;
  padding-right: 40px;
  font-size: 16px;

`;

const ToggleIcon = styled.TouchableOpacity`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const PurpleButton = styled(LinearGradient)`
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ConfirmButton = styled.TouchableOpacity`
  padding: 14px;
  border-radius: 10px;
  align-items: center;
  
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const Footer = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #888;
  margin-top: 30px;
`;


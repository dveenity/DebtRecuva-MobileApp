import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// Gradient background wrapper
export const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;



type GradientButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  style?: object;
};

export const GradientButton = ({ onPress, children, style }: GradientButtonProps) => (
  <ButtonWrapper onPress={onPress} activeOpacity={0.8} style={style}>
    <StyledGradient
      colors={['rgba(78, 44, 190, 1)', 'rgba(163, 107, 226, 1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {children}
    </StyledGradient>
  </ButtonWrapper>
);


// Styled components
const ButtonWrapper = styled(TouchableOpacity)`
  border-radius: 10px;
  overflow: hidden;
`;

const StyledGradient = styled(LinearGradient)`
 
`;


// Gradient Button
export const PurpleButton = styled(LinearGradient).attrs({
  colors: ['rgba(78, 44, 190, 1)', 'rgba(163, 107, 226, 1)'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  padding: 12px 42px;
  border-radius: 10px;
  align-items: center;
`;

export const PurpleButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const PurpleOutlineButton = styled.TouchableOpacity`
  padding: 10px 20px;
  border: 2px solid #626782;
  border-radius: 10px;
  align-items: center;
`;

export const PurpleOutlineText = styled.Text`
  color: #626782;
`;

// Footer section
export const Footer = styled.View`
  padding: 20px;
  background-color: #333;
  align-items: center;
`;

// Gradient on hover (emulated with press effect)

export const FooterText = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
  margin-top: 30px;

`;

export const textLightPurple = styled.Text`
  color: #6e7191;
`;

export const textLightGrey = styled.Text`
  color: #757373;
`;

export const textDark = styled.Text`
  color: #212020;
`;

export const customLink = styled.Text`
  text-decoration-line: none;
`;

export const customerList = styled.View`
  height: 43%;
`;

export const leadList = styled.View`
  height: 75%;
`;

// LoginScreen styles
// Main container
export const LoginContainer = styled.View`
  flex: 1;
  background-color: #f4f5fa;
  padding: 24px;
  justify-content: center;
`;

export const LogoBox = styled.View`
  align-items: center;
  margin-bottom: 24px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 50px;
  resize-mode: contain;
`;

export const Card = styled.View`
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2 }; 
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 3;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 6px;
  color: #212020;
`;

export const Subtitle = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  color: #757373;
`;

export const Label = styled.Text`
  margin-top: 10px;
  color: #6e7191;
  font-weight: 500;
`;

export const InputField = styled.TextInput`
  background-color: #f0f0f0;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const PasswordContainer = styled.View`
  position: relative;
`;

export const EyeIcon = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 14px;
`;

export const ForgotPassword = styled.Text`
  text-align: right;
  color: #6e7191;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #4e2cbe;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
`;

// export const FooterText = styled.Text`
//   text-align: center;
//   margin-top: 30px;
//   color: #757373;
// `;

// Static styles for common use cases
const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  splashFooter: {
    color: '#fff',
    alignItems: 'center',
    paddingBottom:10,
    
  },
});

export default styles;

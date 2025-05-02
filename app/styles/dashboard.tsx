import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #e6ecf8;
  padding: 4px 0;
`;

export const Header = styled.View`
  padding: 20px 16px 10px 16px;
  
`;

export const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NameBox = styled.View`
  margin-left: 8px;
  
`;
export const StatCard = styled.View`
 
  background-color: #fff;
  border-radius: 7px;
  padding: 16px;
  width: 100%;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 10px;
  elevation: 2;
`;

export const LeadCard = styled.View`
  background-color: #fff;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 10px;
  padding: 5px;
  border-radius: 7px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px;
`;

export const FooterButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const AnimatedHeader = styled(Animated.View)<{ isScrolled: boolean }>`
  padding: 20px 16px 10px 16px;
  background-color: ${({ isScrolled }) => (isScrolled ? '#ffffff' : '#e6ecf8')};
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background-color 0.3s ease-in-out;
`;


export const LeadsCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
   border:2px solid #eee;
  border-radius:7px;
  margin-bottom:10px;
 
`;

export const TextBold = styled.Text`
  font-weight: bold;
  font-size:14px;
  margin-bottom: 4px;
`;

export const TextMuted = styled.Text`
  color: gray;
  font-size:14px;
  font-weight:300;
  margin-bottom:4px;
 
`;
export const LeadInfo = styled.View``;

export const LeadAmount = styled.View`
  align-items: flex-end;
`;
export const FlatView = styled.View``;
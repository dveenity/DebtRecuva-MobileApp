import React from 'react';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useRouter, usePathname } from 'expo-router';

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 15px 10px;
  border-top-width: 1px;
  border-color: #ddd;
  background-color:white;
  border-radius:25px 25px 0 0;
`;

const NavButton = styled.TouchableOpacity`
  align-items: center;
`;

const NavText = styled.Text`
  font-size: 13px;
  margin-top: 4px;
`;

export default function FooterNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Footer>
      <NavButton onPress={() => router.push('/dashboard')}>
        <Ionicons
          name="home-outline"
          size={20}
          color={isActive('/dashboard') ? '#5840ef' : '#667791'}
        />
        <NavText style={{ color: isActive('/dashboard') ? '#5840ef' : '#667791' }}>
          Home
        </NavText>
      </NavButton>

      <NavButton onPress={() => router.push('/(screens)/leads')}>
        <Feather
          name="clipboard"
          size={20}
          color={isActive('/leads') ? '#5840ef' : '#667791'}
        />
        <NavText style={{ color: isActive('/leads') ? '#5840ef' : '#667791' }}>
          Leads
        </NavText>
      </NavButton>

      <NavButton onPress={() => router.push('/(screens)/report')}>
        <MaterialIcons
          name="check-circle-outline"
          size={20}
          color={isActive('/report') ? '#5840ef' : '#667791'}
        />
        <NavText style={{ color: isActive('/report') ? '#5840ef' : '#667791' }}>
          Reports
        </NavText>
      </NavButton>

      <NavButton onPress={() => router.push('/(screens)/profile')}>
        <Ionicons
          name="person-outline"
          size={20}
          color={isActive('/profile') ? '#5840ef' : '#667791'}
        />
        <NavText style={{ color: isActive('/(screens)/profile') ? '#5840ef' : '#667791' }}>
          Profile
        </NavText>
      </NavButton>
    </Footer>
  );
}

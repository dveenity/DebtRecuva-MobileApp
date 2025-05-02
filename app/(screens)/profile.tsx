
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import FooterNav from '@/components/footerNav';


const Profile = () => {


  const router = useRouter();



  // Dummy data - replace with real API or context
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    mobile: '08012345678',
    email: 'john.doe@example.com',
    address: '123 Main St, Lagos',
    state: 'Lagos',
    lga: 'Ikeja',
    avatar: require('../../assets/images/user-dummy-img.jpg'),
  };

  const doLogout = () => {
    // Your logout logic here
    console.log('Logging out...');
  };

  return (
    <Container>
      <Header>
       
          <BackRow>
            {/* <Ionicons name="chevron-back" size={20} color="#333" /> */}
            <HeaderText>My Profile</HeaderText>
          </BackRow>
        
        <TouchableOpacity onPress={() => router.push('/(screens)/customer')}>
          <Feather name="settings" size={18} color="#333" />
        </TouchableOpacity>
      </Header>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Card>
          <AvatarWrapper>
            <Avatar source={user.avatar} />
          </AvatarWrapper>

            <CardDiv>
                <CardItem>
                    <Label>First Name</Label>
                    <Info>{user.firstName}</Info>
                </CardItem>

                <CardItem>
                    <Label>Last Name</Label>
                    <Info>{user.lastName}</Info>
                </CardItem>

                <CardItem>
                    <Label>Mobile Number</Label>
                    <Info>{user.mobile}</Info>
                </CardItem>

                <CardItem>
                    <Label>Email</Label>
                    <Info>{user.email}</Info>
                </CardItem>

                <CardItem>
                    <Label>Address</Label>
                    <Info>{user.address}</Info>
                </CardItem>

                <CardItem>
                    <Label>State</Label>
                    <Info>{user.state}</Info>
                </CardItem>

                <CardItem>
                    <Label>Local Govt</Label>
                    <Info>{user.lga}</Info>
                </CardItem>
            </CardDiv>

          <LogoutButton onPress={doLogout}>
            <LogoutText>LogOut</LogoutText>
          </LogoutButton>
        </Card>
      </ScrollView>

     <FooterNav>
      
     </FooterNav>

    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex: 1;
  background-color: #e6ecf8;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  elevation: 4;
`;

const BackRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-left: 5px;
`;

const Card = styled.View`
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  margin-top: 25%;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  position:relative;
  elevation: 5;
`;

const AvatarWrapper = styled.View`
  align-items: center;
  margin-bottom: 20px;
  position:absolute;
  top:-80px;
  left:0;
  right:0;
  margin-inline:auto;
  width:fit-content;
  
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 80px;
`;

const CardItem = styled.View`
  border-bottom-width: 1px;
  border-color: #eee;
  padding: 20px 0;
  justify-content:space-between;
  display:flex;
  flex-direction: row;
`;

const Label = styled.Text`
  font-size: 15px;
  color: black;
  font-weight:600;
`;

const Info = styled.Text`
  font-size: 14px;
  color: gray;
 
  text-transform: capitalize;
`;

const LogoutButton = styled.TouchableOpacity`
  background-color:rgb(255, 252, 252);
  border: 1px solid #dc3545;
  border-radius: 10px;
  padding: 12px;
  margin-top: 20px;
  align-items: center;
`;

const LogoutText = styled.Text`
  color: #ff4d4d;
  font-weight: bold;
  font-size: 16px;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 15px 10px;
  border-top-width: 1px;
  border-color: #ddd;
  border-radius:20px 20px 0 0;
  background-color: white;
`;

const NavButton = styled.TouchableOpacity`
  align-items: center;
`;

const NavText = styled.Text`
  font-size: 12px;
  color: #667791;
  margin-top: 4px;
`;
 const CardDiv = styled.View`
 padding-top:40px;
 `;





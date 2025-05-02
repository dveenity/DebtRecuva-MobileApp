import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Modal, Pressable } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import FooterNav from "@/components/footerNav";

const contactList = [
  {
    name: "Barnabas Abbas Suleiman",
    phone: "7064785993",
    datetime: "Feb 22, 2025, 10:27:43 AM",
    category: "Collections",
    status: "Connected",
  },
  {
    name: "Barnabas Abbas Suleiman",
    phone: "7064785993",
    datetime: "Feb 21, 2025, 02:23:23 PM",
    category: "Collections",
    status: "Failed",
  },
  
];

const ContactScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any>(null);

  const handleCardPress = (contact: any) => {
    setSelectedContact(contact);
    setModalVisible(true);
  };

  return (
    <Container>
        
        <HeaderText>Contact</HeaderText>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <ContentWrapper>
        {contactList.map((contact, index) => (
          <ContactCard key={index} onPress={() => handleCardPress(contact)}>
            <Row>
              <Left>
                <Name>{contact.name}</Name>
                <Phone>{contact.phone}</Phone>
                <DateText>{contact.datetime}</DateText>
              </Left>
              <Right>
                <Category>{contact.category}</Category>
                <StatusBadge status={contact.status}>
                  <StatusText>{contact.status}</StatusText>
                </StatusBadge>
              </Right>
            </Row>
          </ContactCard>
        ))}
        </ContentWrapper>
      </ScrollView>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Contact Info</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} />
              </Pressable>
            </ModalHeader>
            {selectedContact && (
              <View>
                <Text>Name: {selectedContact.name}</Text>
                <Text>Phone: {selectedContact.phone}</Text>
                <Text>Date: {selectedContact.datetime}</Text>
                <Text>Status: {selectedContact.status}</Text>
              </View>
            )}
          </ModalContainer>
        </ModalOverlay>
      </Modal>

      {/* Footer */}
     <FooterNav></FooterNav>
    </Container>
  );
};

export default ContactScreen;
const Container = styled.View`
  flex: 1;
  background-color: #e6ecf8;
  padding:0;
`;

const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  background-color: #fff;
  padding:16px;
  text-align: center;
`;

const ContentWrapper = styled.View`
 padding:14px;
`


const ContactCard = styled.TouchableOpacity`
  
  background-color: white;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  margin-bottom: 12px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Left = styled.View`
  flex: 1;
  padding-right: 8px;
`;

const Right = styled.View`
  align-items: flex-end;
  max-width: 35%;
  flex-shrink: 0;
`;

const Name = styled.Text`
  font-weight: bold;
  flex-wrap: wrap;
`;

const DateText = styled.Text`
  color: #6c757d;
  flex-wrap: wrap;
`;

const Phone = styled.Text`
  color: #444;
`;



const Category = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const StatusBadge = styled.View<{ status: string }>`
  padding: 4px 10px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.status === "Connected" ? "#4CAF50" : "#f44336"};
`;

const StatusText = styled.Text`
  color: white;
  font-size: 12px;
`;

const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 80%;
  padding: 20px;
  border-radius: 16px;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

// Footer styles
const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top-width: 1px;
  border-color: #e0e0e0;
`;

const FooterButton = styled.TouchableOpacity`
  align-items: center;
`;

const FooterButtonActive = styled(FooterButton)`
  color: #6a0dad;
`;

const FooterLabel = styled.Text`
  font-size: 12px;
  margin-top: 2px;
  color: #333;
`;

const FooterLabelActive = styled(FooterLabel)`
  color: #6a0dad;
  font-weight: bold;
`;

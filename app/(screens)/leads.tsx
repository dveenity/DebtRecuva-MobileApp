import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import FooterNav from '@/components/footerNav';

const LeadsScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [page, setPage] = useState(1);
  const totalPages = 5; // for demo purposes

  const toggleModal = () => setModalVisible(!isModalVisible);

  const filters = [
    { id: 'option1', label: 'Days Late: Highest', value: 'dayslate-desc' },
    { id: 'option2', label: 'Days Late: Lowest', value: 'dayslate-asc' },
    { id: 'option3', label: 'Highest Loan Amount', value: 'totaloutstandingamount-desc' },
    { id: 'option4', label: 'Lowest Loan Amount', value: 'totaloutstandingamount-asc' }
  ];

  const mockData = Array.from({ length: 10 }, (_, i) => ({
    id: `${i + 1}`,
    name: 'Bello Ibrahim',
    phone: '08050665543',
    daysLate: '223',
    amount: 'NGN 8000',
    clientType: 'Client'
  }));

  const renderLeadItem = (item: any) => (
    <LeadCard key={item.id}>
      <LeadInfo>
        <TextBold>{item.name}</TextBold>
        <TextMuted>{item.phone}</TextMuted>
        <TextMuted>Days Late</TextMuted>
      </LeadInfo>
      <LeadAmount>
        <TextBold>{item.amount}</TextBold>
        <TextMuted>{item.clientType}</TextMuted>
        <TextMuted>{item.daysLate}</TextMuted>
      </LeadAmount>
    </LeadCard>
  );

  return (
    <Container>
      <CardHeader>
        <TextTitle>Filtering By Days Late (High to Low)</TextTitle>
      </CardHeader>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Card>
          <ModalTitle>
            <TextTitle>Leads</TextTitle>
            <TouchableOpacity onPress={toggleModal}>
              <MaterialIcons name="tune" size={25} color="#000" />
            </TouchableOpacity>
          </ModalTitle>

          {/* Scrollable content displaying 5 leads at a time */}
          <View style={{ maxHeight: 400 }}>
            <ScrollView nestedScrollEnabled>
              {mockData.map((item) => renderLeadItem(item))}
            </ScrollView>
          </View>

          <PageFooter>
            <Text>
              Page <TextBold>{page}</TextBold> of <TextBold>{totalPages}</TextBold> entries
            </Text>

            <PaginationControls>
              <PaginationButton
                onPress={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={page === 1}
              >
                <PaginationText disabled={page === 1}>Previous</PaginationText>
              </PaginationButton>

              <PaginationButton transparent>
                <PaginationText transparent># {page}</PaginationText>
              </PaginationButton>

              <PaginationButton
                onPress={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={page === totalPages}
              >
                <PaginationText disabled={page === totalPages}>Next</PaginationText>
              </PaginationButton>
            </PaginationControls>
          </PageFooter>
        </Card>
      </ScrollView>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <ModalContainer>
          <ModalHeader>
            <TextTitle>Filter List By</TextTitle>
            <TouchableOpacity onPress={toggleModal}>
              <Ionicons name="close" size={24} />
            </TouchableOpacity>
          </ModalHeader>

          {filters.map((filter) => (
            <FilterOption key={filter.id} onPress={() => setSelectedFilter(filter.value)}>
              <FilterText>{filter.label}</FilterText>
              <RadioOuter selected={selectedFilter === filter.value}>
                {selectedFilter === filter.value && <RadioInner />}
              </RadioOuter>
            </FilterOption>
          ))}

          <ApplyButton onPress={toggleModal}>
            <ApplyText>Apply Filters</ApplyText>
          </ApplyButton>
        </ModalContainer>
      </Modal>

      <FooterNav />
    </Container>
  );
};

export default LeadsScreen;

// Styled Components (no changes to these)
const Container = styled.View`
  flex: 1;
  background-color: #e6ecf8;
`;

const Card = styled.View`
  background-color: white;
  padding: 16px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 13px;
  margin-top: 20px;
  margin-left: 12px;
  margin-right: 12px;
`;

const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const TextBold = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
`;

const TextMuted = styled.Text`
  color: gray;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const LeadCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  border: 2px solid #eee;
  border-radius: 7px;
  margin-bottom: 10px;
  
`;

const LeadInfo = styled.View``;

const LeadAmount = styled.View`
  align-items: flex-end;
`;

const PageFooter = styled.View`
  align-items: center;
  margin-top: 8px;
`;

const PaginationControls = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

const PaginationButton = styled.TouchableOpacity<{ transparent?: boolean }>`
  padding: 6px 12px;
  border-radius: 6px;
  background-color: ${({ transparent }) => (transparent ? 'transparent' : '#5840ef')};
  margin: 0 4px;
`;

const PaginationText = styled.Text<{ disabled?: boolean; transparent?: boolean }>`
  color: ${({ disabled, transparent }) =>
    transparent ? '#5840ef' : disabled ? '#ccc' : '#fff'};
`;

const ModalContainer = styled.View`
  background-color: white;
  padding: 16px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const FilterOption = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px rgb(197, 205, 218);
  border-radius: 8px;
  margin-bottom: 8px;
`;

const FilterText = styled.Text`
  font-size: 16px;
`;

const RadioOuter = styled.View<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid grey;
  justify-content: center;
  align-items: center;
`;

const RadioInner = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: grey;
`;

const ApplyButton = styled.TouchableOpacity`
  background-color: #5840ef;
  padding: 12px;
  border-radius: 10px;
  align-items: center;
  margin-top: 12px;
`;

const ApplyText = styled.Text`
  color: white;
  font-weight: bold;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 12px 0;
  background-color: white;
`;

const NavButton = styled.TouchableOpacity`
  align-items: center;
`;

const NavText = styled.Text`
  font-size: 11px;
  margin-top: 2px;
`;

const ModalTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

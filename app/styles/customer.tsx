import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import React, { useState } from 'react';
import { Modal, ScrollView, TextInput, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Picker } from '@react-native-picker/picker';


interface UpdateStatusModalProps {
  visible: boolean;
  onClose: () => void;
  statuses: string[];
  initialStatus: string;
  onUpdate: (formData: any) => void; 
}

const UpdateStatusModal: React.FC<UpdateStatusModalProps> = ({visible, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    callConnected: '',
    rightParty: '',
    ptp: '',
    noOfAttempts: '',
    noOfConnected: '',
    reason: '',
    noOfSms: '',
    callStatus: '',
    comment: '',
    ptpAmount: '',
    ptpDate: '',
    communicationMode: '',
  });

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <ModalWrapper>
        <ModalBox>
          <CloseIcon onPress={onClose}>
            <Ionicons name="close" size={24} color="#000" />
          </CloseIcon>

          <ModalTitle>Update Loan Status</ModalTitle>
    
          <ScrollView  contentContainerStyle={{ paddingBottom: 100 }} 
        showsVerticalScrollIndicator={false}>
            <InputGroup>
              <Label>Call Connected</Label>
              <StyledPicker
                selectedValue={formData.callConnected}
                onValueChange={(itemValue, _index) => handleChange('callConnected', itemValue as string)}>
                <Picker.Item label="Select Response" value="" />
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </StyledPicker>
            </InputGroup>

            <InputGroup>
              <Label>Right Party</Label>
              <StyledPicker
                selectedValue={formData.rightParty}
                onValueChange={(itemValue, _index) => handleChange('rightParty', itemValue as string)}>
                <Picker.Item label="Select Response" value="" />
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </StyledPicker>
            </InputGroup>

            <InputGroup>
              <Label>PTP</Label>
              <StyledPicker
                selectedValue={formData.ptp}
                onValueChange={(itemValue, _index) => handleChange('ptp', itemValue as string)}>
                <Picker.Item label="Select Response" value="" />
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </StyledPicker>
            </InputGroup>

            <InputGroup>
              <Label>Number of Attempts</Label>
              <StyledTextInput
                keyboardType="numeric"
                value={formData.noOfAttempts}
                onChangeText={(val) => handleChange('noOfAttempts', val)}
                placeholder="Enter attempt number"
              />
            </InputGroup>

            <InputGroup>
              <Label>Number of Connected</Label>
              <StyledTextInput
                keyboardType="numeric"
                value={formData.noOfConnected}
                onChangeText={(val) => handleChange('noOfConnected', val)}
                placeholder="Enter connected number"
              />
            </InputGroup>

            <InputGroup>
              <Label>Reason for Delinquency</Label>
              <StyledPicker
                selectedValue={formData.reason}
                onValueChange={(itemValue, _index) => handleChange('reason', itemValue as string)}>
                <Picker.Item label="Select Response" value="" />
                <Picker.Item label="Bank Issues" value="bankissue" />
                <Picker.Item label="Deceased" value="deceased" />
                <Picker.Item label="Delayed Salary" value="delayedsalary" />
                <Picker.Item label="Fraud" value="fraud" />
                <Picker.Item label="Health Issues" value="healthissue" />
                <Picker.Item label="Job Loss" value="jobloss" />
                <Picker.Item label="Login Issues" value="loginissue" />
                <Picker.Item label="Lost Phone" value="lostphone" />
                <Picker.Item label="Not Reflecting" value="notreflecting" />
                <Picker.Item label="Out of Country" value="outofcountry" />
                <Picker.Item label="Out of State" value="outofstate" />
              </StyledPicker>
            </InputGroup>

            <InputGroup>
              <Label>Number of SMS Sent</Label>
              <StyledTextInput
                keyboardType="numeric"
                value={formData.noOfSms}
                onChangeText={(val) => handleChange('noOfSms', val)}
                placeholder="Enter SMS number"
              />
            </InputGroup>

            <InputGroup>
              <Label>Call Status</Label>
              <StyledPicker
                selectedValue={formData.callStatus}
                onValueChange={(itemValue, _index) => handleChange('callStatus', itemValue as string)}>
                <Picker.Item label="Select Response" value="" />
                <Picker.Item label="PTP" value="ptp" />
                <Picker.Item label="Ringing" value="ringing" />
                <Picker.Item label="Dropped Call" value="droppedcall" />
                <Picker.Item label="Payment Postponed" value="paymentpostponed" />
                <Picker.Item label="Fully Paid" value="fullypaid" />
                <Picker.Item label="Fraud" value="fraud" />
              </StyledPicker>
            </InputGroup>

            <InputGroup>
              <Label>Comment</Label>
              <StyledTextArea
                multiline
                numberOfLines={5}
                value={formData.comment}
                onChangeText={(text) => handleChange('comment', text as string)}
                placeholder="Enter comment"
              />
            </InputGroup>

            <InputGroup>
              <Label>PTP Amount</Label>
              <StyledTextInput
                keyboardType="numeric"
                value={formData.ptpAmount}
                onChangeText={(val) => handleChange('ptpAmount', val)}
                placeholder="Enter amount"
              />
            </InputGroup>

            <InputGroup>
              <Label>PTP Date</Label>
              <StyledTextInput
                value={formData.ptpDate}
                onChangeText={(val) => handleChange('ptpDate', val)}
                placeholder="Enter date (YYYY-MM-DD)"
              />
            </InputGroup>

            <InputGroup>
              <Label>Mode of Communication</Label>
              <StyledPicker
                selectedValue={formData.communicationMode}
                onValueChange={(itemValue, _index) => handleChange('communicationMode', itemValue as string)}>
                <Picker.Item label="Select Response" value="" />
                <Picker.Item label="Call - Phone" value="callphone" />
                <Picker.Item label="CRM Dialer" value="crmdialer" />
                <Picker.Item label="Email" value="email" />
                <Picker.Item label="WhatsApp" value="whatsapp" />
              </StyledPicker>
            </InputGroup>
        </ScrollView>
         <PurpleBtn
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#4e2cbe', '#a36be2']}
              style={{ borderRadius: 8 }}>
            <SubmitButton onPress={() => onUpdate(formData)}>
              <SubmitText>Submit</SubmitText>
            </SubmitButton>
            </PurpleBtn>
          
        </ModalBox>
      </ModalWrapper>
    </Modal>
  );
};


export default UpdateStatusModal;

const InputGroup = styled.View`
  margin-bottom: 12px;
`;
const PurpleBtn = styled(LinearGradient)`
 
`;


const CloseIcon = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;
const StyledPicker = styled(Picker)`
  background-color: #f2f2f2;
  border-radius: 4px;
  font-size:15px;
  padding:7px 10px;
`;

const StyledTextInput = styled.TextInput`
  background-color: #f2f2f2;
  padding: 10px;
  font-size:15px;
  border:1px solid grey;
  border-radius: 4px;
`;
const StyledTextArea = styled.TextInput`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;
  font-size:15px;
  text-align-vertical: top;
`;

const SubmitButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  margin-top: 10px;
`;

const SubmitText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e6ecf8;
`;

export const Header = styled.View`
  padding: 16px 20px;
  background-color:#fff ;
`;

export const HeaderText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom-width: 1px;
  border-color: #e0e0e0;
  
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight:bold;
  margin-bottom:10px;
  
`;

export const Value = styled.Text`
  font-size: 14px;
  color:rgb(82, 98, 121);
  font-weight:bold;
`;

export const Footer = styled.View`
   flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 15px 10px;
  border-top-width: 1px;
  border-color: #ddd;
  border-radius:20px 20px 0 0;
  background-color: white;
`;

export const FooterButton = styled.TouchableOpacity`
   padding: 10px 15px;
  align-items: center;
  justify-content: center;
  
`;

export const FooterButtonText = styled.Text`
  color:#fff;
  font-weight: bold;
  font-size:14px;
`;

export const FooterButtonoutline = styled.TouchableOpacity`
  padding: 10px 15px;
  border-radius: 8px;
  border:1px solid  #626782;
`;

export const FooterButtonoutlineText = styled.Text`
  color: #626782;
  font-weight: bold;
  font-size:14px;
`;
export const PaymentButton = styled.TouchableOpacity`
    margin-top:20px;
    width:85%;
    padding: 10px 15px;
    border-radius: 6px;
    align-items:center;
    margin-left:7%;
     border:1px solid  #626782;
`
export const PaymentButtonText = styled.Text`
  color: #626782;
  font-weight: bold;
  font-size:14px;
`;

export const ModalWrapper = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  elevation: 5;
  max-height:90%;
  width:90%;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  
`;

export const ModalInput = styled.TextInput`
  border: 1px solid #626782;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const ProceedButton = styled.TouchableOpacity`
  background-color: #6C757D;
  padding:12px;
  margin-top:10px;
  border-radius: 4px;
  align-items: center;
`;

export const ProceedText = styled.Text`
  color:#fff;
  font-weight: bold;
`;
export const Card = styled.View`
  background-color: #ffffff;
  
  padding-bottom:18px;
  margin: 10px 10px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  shadow-offset: 0px 2px;
  elevation: 3;
`;

export const ModalCloseIcon = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

export const FormField = styled.View`
  margin-bottom: 15px;
`;

export const FormLabel = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  color: rgb(82, 98, 121);
`;

export const FormSelect = styled.TouchableOpacity`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  background-color: #f8f9fa;
`;

export const CommentBox = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  min-height: 80px;
  text-align-vertical: top;
  background-color: #fff;
`;

export const RadioOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioCircle = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-width: 2px;
  border-color: #6a1b9a;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const RadioInnerCircle = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #6a1b9a;
`;



export const DownloadButtonText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;




// Subtext
export const ModalText = styled.Text`
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
`;

// Radio Container
export const RadioOptionContainer = styled.TouchableOpacity<{ selected?: boolean }>`
  padding: 14px 16px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? '#e9f7ee' : '#fff')};
  border: 1px solid ${({ selected }) => (selected ? '#8fd1ae' : '#ccc')};
  margin-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Radio Label
export const RadioLabel = styled.Text`
  font-size: 14px;
`;

// Download Button
export const DownloadButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 14px;
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
`;

// Gradient Inside Button
export const GradientBackground = styled(LinearGradient).attrs({
  colors: ['#4e2cbe', '#a36be2'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  padding: 14px;
  border-radius: 10px;
  align-items: center;
`;

// Button Text
export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;



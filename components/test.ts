import styled from 'styled-components/native';



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
  border-radius: 8px;
  background-color: #6a1b9a;
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
  padding: 20px;
  elevation: 5;
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
  background-color: #6a1b9a;
  padding: 12px;
  border-radius: 6px;
  align-items: center;
`;

export const ProceedText = styled.Text`
  color: white;
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

export const RadioLabel = styled.Text`
  font-size: 12px;
  color: #333;
`;

export const DownloadButton = styled.TouchableOpacity`
  padding: 10px 15px;
  border-radius: 6px;
  background-color: #6a1b9a;
  align-items: center;
  margin-top: 10px;
`;

export const DownloadButtonText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;


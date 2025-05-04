import { ButtonText } from "@/components/custom";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import UpdateStatusModal, {
    Card,
    Container,
    DownloadButton,
    Footer,
    FooterButton,
    FooterButtonoutline,
    FooterButtonoutlineText,
    FooterButtonText,
    GradientBackground,
    Header,
    HeaderText,
    InfoRow,
    Label,
    ModalBox,
    ModalInput,
    ModalText,
    ModalTitle,
    ModalWrapper,
    PaymentButton,
    PaymentButtonText,
    ProceedButton,
    ProceedText,
    RadioLabel,
    RadioOptionContainer,
    Value,
} from "../styles/customer";

interface FormSelectProps {
    options: string[];
}

export const FormSelect: React.FC<FormSelectProps> = ({ options }) => {
    return (
        <View>
            {options.map((option, index) => (
                <TouchableOpacity key={index} style={{ paddingVertical: 6 }}>
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

interface RadioOptionProps {
    label: string;
}
const RadioOption = ({
    label,
    selected,
    onPress,
}: {
    label: string;
    selected: boolean;
    onPress: () => void;
}) => (
    <RadioOptionContainer selected={selected} onPress={onPress}>
        <RadioLabel>{label}</RadioLabel>
        <Ionicons
            name={selected ? "checkmark-circle" : "ellipse-outline"}
            size={22}
            color={selected ? "#4CAF50" : "#ccc"}
        />
    </RadioOptionContainer>
);

// export const RadioOption: React.FC<RadioOptionProps> = ({ label }) => {
//   return (
//     <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
//       <View style={{ height: 20, width: 20, borderRadius: 10, borderWidth: 1, marginRight: 10 }} />
//       <Text>{label}</Text>
//     </TouchableOpacity>
//   );
// };

export const ModalCloseIcon = ({ onPress }: { onPress: () => void }) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
            padding: 5,
        }}>
        <Ionicons name="close" size={24} color="#000" />
    </TouchableOpacity>
);

const LoanInfoScreen = () => {
    const [paymentModalVisible, setPaymentModalVisible] = useState(false);
    const [updateStatusModalVisible, setUpdateStatusModalVisible] =
        useState(false);
    const [downloadDocModalVisible, setDownloadDocModalVisible] =
        useState(false);

    const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

    return (
        <Container>
            <Header>
                <HeaderText>{`← Loan Information`}</HeaderText>
            </Header>

            <ScrollView contentContainerStyle={{ padding: 0 }}>
                <Card>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingHorizontal: 10,
                            marginTop: 10,
                            marginBottom: 10,
                            gap: 12,
                        }}>
                        {/* Map Button with Border */}
                        <TouchableOpacity
                            onPress={() => console.log("Map pressed")}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    borderColor: "#7E3AF2",
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    paddingHorizontal: 8,
                                    paddingVertical: 4,
                                }}>
                                <Ionicons
                                    name="location-outline"
                                    size={18}
                                    color="#7E3AF2"
                                />
                                <Text
                                    style={{
                                        color: "#7E3AF2",
                                        fontWeight: "600",
                                        marginLeft: 4,
                                    }}>
                                    Map
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* Phone Icon */}
                        <TouchableOpacity
                            onPress={() => console.log("Phone pressed")}>
                            <Ionicons
                                name="call-outline"
                                size={22}
                                color="#000"
                            />
                        </TouchableOpacity>

                        {/* Chat Icon */}
                        <TouchableOpacity
                            onPress={() => console.log("Chat pressed")}>
                            <Ionicons
                                name="chatbubble-ellipses-outline"
                                size={22}
                                color="#000"
                            />
                        </TouchableOpacity>
                    </View>

                    <InfoRow>
                        <Label>Client</Label>
                        <Value>John Doe</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Loan Status</Label>
                        <Value>Active</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Name of Borrower</Label>
                        <Value>Jane Smith</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Primary Number</Label>
                        <Value>08012345678</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Other Number</Label>
                        <Value>08123456789</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Days Late</Label>
                        <Value>5 Days</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Disbursement Date</Label>
                        <Value>2024-03-15</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Amount Disbursed</Label>
                        <Value>₦ 250,000</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Amount Repaid</Label>
                        <Value>₦ 100,000</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Amount To Repay Today</Label>
                        <Value>₦ 10,000</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Total Outstanding</Label>
                        <Value>₦ 150,000</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Penalty Fee</Label>
                        <Value>₦ 5,000</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Settlement Offer</Label>
                        <Value>₦ 120,000</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Offer Date</Label>
                        <Value>2025-12-12</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Balance</Label>
                        <Value>₦ 20,000</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Bank</Label>
                        <Value>GTBank</Value>
                    </InfoRow>
                    <InfoRow>
                        <Label>Account Number</Label>
                        <Value>0123456789</Value>
                    </InfoRow>

                    <PaymentButton onPress={() => setPaymentModalVisible(true)}>
                        <PaymentButtonText>Make Payment</PaymentButtonText>
                    </PaymentButton>
                </Card>
            </ScrollView>

            {/* Payment Modal */}
            <Modal
                visible={paymentModalVisible}
                animationType="slide"
                transparent>
                <ModalWrapper>
                    <ModalBox>
                        <ModalCloseIcon
                            onPress={() => setPaymentModalVisible(false)}
                        />

                        <ModalTitle>Make Payment</ModalTitle>
                        <Text style={{ marginBottom: 10, color: "#212529" }}>
                            Provide the amount the customer wants to pay
                        </Text>
                        <Label style={{ marginBottom: 10 }}>
                            Total Outstanding Amount
                        </Label>
                        <ModalInput placeholder="2300" editable={false} />
                        <Label style={{ marginBottom: 10 }}>
                            Amount To Pay
                        </Label>
                        <ModalInput placeholder="50" keyboardType="numeric" />

                        <ProceedButton
                            onPress={() => setPaymentModalVisible(false)}>
                            <ProceedText>Proceed</ProceedText>
                        </ProceedButton>
                    </ModalBox>
                </ModalWrapper>
            </Modal>

            {/* Update Status Modal */}
            <Modal
                visible={updateStatusModalVisible}
                animationType="slide"
                transparent>
                <ModalWrapper>
                    <ModalBox style={{ maxHeight: "90%" }}>
                        <ModalCloseIcon
                            onPress={() => setUpdateStatusModalVisible(false)}
                        />

                        <ModalTitle>Select Document</ModalTitle>
                        {/* ...other fields remain untouched... */}
                        <ProceedButton
                            onPress={() => setUpdateStatusModalVisible(false)}>
                            <ProceedText>Submit</ProceedText>
                        </ProceedButton>
                    </ModalBox>
                </ModalWrapper>
            </Modal>

            {/* Download Docs Modal */}

            <Modal
                visible={downloadDocModalVisible}
                animationType="slide"
                transparent>
                <ModalWrapper>
                    <ModalBox>
                        <ModalCloseIcon
                            onPress={() => setDownloadDocModalVisible(false)}
                        />
                        <ModalTitle>Select Document</ModalTitle>
                        <ModalText>
                            Select Customer Document you want to download
                        </ModalText>

                        <RadioOption
                            label="Repayment Agreement"
                            selected={selectedDoc === "Repayment Agreement"}
                            onPress={() =>
                                setSelectedDoc("Repayment Agreement")
                            }
                        />
                        <RadioOption
                            label="Letter of Demand"
                            selected={selectedDoc === "Letter of Demand"}
                            onPress={() => setSelectedDoc("Letter of Demand")}
                        />
                        <RadioOption
                            label="Document 145"
                            selected={selectedDoc === "Document 145"}
                            onPress={() => setSelectedDoc("Document 145")}
                        />

                        <DownloadButton
                            onPress={() => {
                                setDownloadDocModalVisible(false);
                                // your download logic here
                            }}>
                            <GradientBackground
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={["#4e2cbe", "#a36be2"]}>
                                <ButtonText>Download Now</ButtonText>
                            </GradientBackground>
                        </DownloadButton>
                    </ModalBox>
                </ModalWrapper>
            </Modal>

            <UpdateStatusModal
                visible={updateStatusModalVisible}
                onClose={() => setUpdateStatusModalVisible(false)}
                onUpdate={(formData: any) => {
                    console.log("Form Data:", formData); // full object with all fields
                    setUpdateStatusModalVisible(false);

                    // You can now send formData to your API here
                }}
                statuses={[
                    "Active",
                    "Pending",
                    "Paid",
                    "Defaulted",
                    "Referred",
                ]}
                initialStatus="Active"
            />

            <Footer>
                <FooterButtonoutline
                    onPress={() => setDownloadDocModalVisible(true)}>
                    <FooterButtonoutlineText>
                        Download Doc
                    </FooterButtonoutlineText>
                </FooterButtonoutline>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#4e2cbe", "#a36be2"]}
                    style={{ borderRadius: 8 }}>
                    <FooterButton
                        onPress={() => setUpdateStatusModalVisible(true)}>
                        <FooterButtonText>Update Status</FooterButtonText>
                    </FooterButton>
                </LinearGradient>
            </Footer>
        </Container>
    );
};

export default LoanInfoScreen;

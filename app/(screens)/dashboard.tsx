import React, { useRef } from 'react';
import { Animated, View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather} from '@expo/vector-icons';
import {
  Container, LeadCard, CardHeader,
  StatCard,
  LeadInfo,
  TextBold,
  TextMuted,
  LeadAmount,
  LeadsCard,
} from '../styles/dashboard';
import FooterNav from '@/components/footerNav';
import { useRouter } from 'expo-router';




export default function Dashboard() {
  const router = useRouter();
  
  // const currentRoute = router.name;

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: ['#e6ecf8', '#ffffff'],
    extrapolate: 'clamp',
  });

  const headerShadowOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 0.1],
    extrapolate: 'clamp',
  });

  const headerElevation = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 4],
    extrapolate: 'clamp',
  });


  const mockData = Array.from({length: 10}, (_, i) => ({
    
      id: `${i + 1}`,
      name: 'Bello Ibrahim',
      phone: '08050665543',
      daysLate: '223',
      amount: 'NGN 8000',
      clientType: 'Client'
    
  }));

  const renderLeadItem = ({ item }: any) => (
    <LeadsCard>
      <LeadInfo>
        <TextBold>{item.name}</TextBold>
        <TextMuted>{item.phone}</TextMuted>
        <TextMuted>Days Late</TextMuted>
      </LeadInfo>
      <LeadAmount>
        <TextMuted>{item.amount}</TextMuted>
        <TextMuted>{item.clientType}</TextMuted>
        <TextMuted>{item.daysLate}</TextMuted>
      </LeadAmount>
    </LeadsCard>
  );
  

  return (
    <Container>
      {/* Animated Header */}
      <Animated.View
        style={{
          padding: 20,
          paddingHorizontal: 16,
          backgroundColor: headerBackgroundColor,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: headerShadowOpacity,
          shadowRadius: 4,
          elevation: headerElevation,
          zIndex: 10,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity>
            
              <Text style={{ fontSize: 18 }}>Hello,</Text>
              <Text style={{ fontSize: 16, textTransform: 'capitalize', color: '#667791', marginTop:5 }}>
              Agent Name
            </Text>
          
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="bell" size={17} color="#657792"/>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Stats */}
        <View style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginBottom: 16,
          marginTop: 16,
          flexWrap: 'wrap'
        }}>
          <StatCard>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="clipboard" size={15} color="#6faa00" />
              <Text style={{ marginLeft: 3, fontSize: 16 }}>Assigned Leads</Text>
            </View>
            <Text style={{ marginTop: 10, marginLeft: 18, color: '#667791', fontSize: 16 }}>0</Text>
          </StatCard>

          <StatCard>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="check-circle" size={15} color="#0d6efd" />
              <Text style={{ marginLeft: 3, fontSize: 16 }}>Total Reports</Text>
            </View>
            <Text style={{ marginTop: 10, marginLeft: 18, color: '#667791', fontSize: 16 }}>0</Text>
          </StatCard>
        </View>

        

<LeadCard>
  <View style={{ marginBottom: 32 }}>
    <CardHeader>
      <Text style={{ fontWeight: '600', fontSize: 16 }}>New Leads</Text>
      <TouchableOpacity>
        <Text style={{ fontSize: 16 }}>View All</Text>
      </TouchableOpacity>
    </CardHeader>

    <View style={{ padding: 8 }}>
      <View style={{ height: 400 }}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          {mockData.map((item) => (
            <View key={item.id} style={{ marginBottom: 8 }}>
              {renderLeadItem({ item })}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>

  </View>
</LeadCard>




      </Animated.ScrollView>

      {/* Footer */}
     <FooterNav></FooterNav>
    </Container>
  );
}


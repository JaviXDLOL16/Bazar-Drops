import { View, Text, Button, ScrollView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from 'src/ui/screens/Principal/Principal';
import Policies from 'src/ui/screens/Policies/Policies';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Information from 'src/ui/screens/Information/Information';
import BuyerRequest from 'src/ui/screens/BuyerRequest/BuyerRequest';
import DeliveryList from 'src/ui/screens/DeliveryList/DeliveryList';
import NewSalesPeriod from 'src/ui/screens/NewSalesPeriod/NewSalesPeriod';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RegisterClothes from 'src/ui/screens/RegisterClothes/RegisterClothes';
import NewDelivery from 'src/ui/screens/NewDelivery/NewDelivery';
import Authentication from 'src/ui/screens/Authentication/Authentication';
import SalesPeriodList from 'src/ui/screens/SalesPeriodList/SalesPeriodList';
import DeliveryDetails from 'src/ui/screens/DeliveryDetails/DeliveryDetails';
import SelectCloth from 'src/ui/screens/SelectCloth/SelectCloth';
import SalesPeriod from 'src/ui/screens/SalesPeriod/SalesPeriod';
import ClothDetails from 'src/ui/screens/ClothDetails/ClothDetails';
import SellerDetails from 'src/ui/screens/SellerDetails/SellerDetails';
import { DeliveryFilterStates } from 'src/ui/screens/DeliveryList/components/FilterForDeliveryStatus';
import { Colors } from 'src/ui/models/Colors/Colors';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from 'src/ui/contexts/AuthContext';



export type stackParamList = {
  Home: undefined;
  Policies: undefined;
  Principal: undefined;
  Information: undefined;
  DeliveryList: { status?: DeliveryFilterStates } | undefined;
  DeliveryDetails: undefined;
  NewDelivery: undefined;
  Authentication: undefined;
  SelectCloth: undefined;
  RegisterClothes: undefined;
  BuyerRequest: undefined;
  SalesPeriodList: undefined;
  SalesPeriod: { clothId: number } | undefined;
  NewSalesPeriod: undefined;
  ClothDetails: { clothId: number } | undefined;
  SellerDetails: undefined;
};


const Stack = createNativeStackNavigator<stackParamList>();

export default function App() {

  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export const Layout = () => {

  const { authState } = useAuth();

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={
              {
                headerStyle: { backgroundColor: Colors.Dark },
                headerTitleStyle: { color: Colors.White, fontSize: 24, fontWeight: '900' },
                headerBackTitleVisible: false,
                headerBackImageSource: require('src/ui/assets/images/back.png'),
                headerTintColor: Colors.White,
              }
            }
          >
            {authState?.authenticated ? (
              <>
                <Stack.Screen
                  name="Principal"
                  component={Principal}
                  options={{
                    headerShown: false
                  }} />
                <Stack.Screen
                  name="Information"
                  component={Information}
                  options={{
                    title: 'Informacion'
                  }} />
                <Stack.Screen
                  name="DeliveryList"
                  component={DeliveryList}
                  options={{
                    title: 'Lista de entregas'
                  }} />
                <Stack.Screen
                  name="DeliveryDetails"
                  component={DeliveryDetails}
                  options={{
                    title: 'Detalles de entregas'
                  }} />
                <Stack.Screen
                  name="NewDelivery"
                  component={NewDelivery}
                  options={{
                    title: 'Nueva entrega'
                  }} />
                <Stack.Screen
                  name="SelectCloth"
                  component={SelectCloth}
                  options={{
                    title: 'Seleccionar prenda'
                  }} />
                <Stack.Screen
                  name='RegisterClothes'
                  component={RegisterClothes}
                  options={{
                    title: 'Registrar prenda'
                  }} />
                <Stack.Screen
                  name='BuyerRequest'
                  component={BuyerRequest}
                  options={{
                    title: 'Solicitudes de compra'
                  }} />
                <Stack.Screen
                  name='SalesPeriodList'
                  component={SalesPeriodList}
                  options={{
                    title: 'Periodos de ventas'
                  }} />
                <Stack.Screen
                  name='SalesPeriod'
                  component={SalesPeriod}
                  options={{
                    title: 'Periodo de ventas'
                  }} />
                <Stack.Screen
                  name="NewSalesPeriod"
                  component={NewSalesPeriod}
                  options={{
                    title: 'Nuevo periodo de ventas'
                  }} />
                <Stack.Screen
                  name="ClothDetails"
                  component={ClothDetails}
                  options={{
                    title: 'Detalles de la prenda'
                  }} />
                <Stack.Screen
                  name="SellerDetails"
                  component={SellerDetails}
                  options={{
                    title: 'Detalles del vendedor'
                  }} />
              </>
            ) : (
              <>
                <Stack.Screen
                  name='Authentication'
                  component={Authentication}
                  options={{
                    title: 'Bazar and Drops'
                  }} />
                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen
                  name="Policies"
                  component={Policies}
                  options={{
                    title: 'Politicas'
                  }} />
              </>

            )}

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

type Props = NativeStackScreenProps<stackParamList, 'Home'>

function Home({ navigation }: Props) {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 50 }}>
        <Text>Global</Text>
        <Button
          title="Authentication"
          onPress={() => navigation.navigate('Authentication')}
        />
        <Button
          title="Policies"
          onPress={() => navigation.navigate('Policies')}
        />
        <Text>Vendedor</Text>
        <Button
          title="Principal"
          onPress={() => navigation.navigate('Principal')}
        />
        <Button
          title="Tu information"
          onPress={() => navigation.navigate('Information')}
        />
        <Button
          title="Lista de entregas"
          onPress={() => navigation.navigate('DeliveryList')}
        />
        <Button
          title="Detalles de entrega"
          onPress={() => navigation.navigate('DeliveryDetails')}
        />
        <Button
          title="Nueva entrega"
          onPress={() => navigation.navigate('NewDelivery')}
        />
        <Button
          title="Seleccionar prenda"
          onPress={() => navigation.navigate('SelectCloth')}
        />
        <Button
          title="Registrar prenda"
          onPress={() => navigation.navigate('RegisterClothes')}
        />
        <Button
          title="Solicitudes de compra"
          onPress={() => navigation.navigate('BuyerRequest')}
        />
        <Button
          title="Lista de periodos de venta"
          onPress={() => navigation.navigate('SalesPeriodList')}
        />
        <Button
          title="Periodo de ventas"
          onPress={() => navigation.navigate('SalesPeriod')}
        />
        <Button
          title='Crear periodo de ventas'
          onPress={() => navigation.navigate('NewSalesPeriod')}
        />
        <Text>Comprador</Text>
        <Button
          title="Principal"
          onPress={() => navigation.navigate('Principal')}
        />
        <Button
          title="Detalles de la prenda"
          onPress={() => navigation.navigate('ClothDetails')}
        />
        <Button
          title="Solicitudes de compra"
          onPress={() => navigation.navigate('BuyerRequest')}
        />
        <Button
          title="Tu información"
          onPress={() => navigation.navigate('Information')}
        />
        <Button
          title="Lista de entregas"
          onPress={() => navigation.navigate('DeliveryList')}
        />
        <Button
          title="Detalles de entrega"
          onPress={() => navigation.navigate('DeliveryDetails')}
        />
        <Button
          title="Detalles del vendedor"
          onPress={() => navigation.navigate('SellerDetails')}
        />
      </View>
    </ScrollView>
  );
}



import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardProvider } from "react-native-keyboard-controller";
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'src/screens/Login/Login';
import Register from 'src/screens/Register/Register';
import { Colors } from 'src/models/Colors/Colors';
import Principal from 'src/screens/Principal/Principal';
import Policies from 'src/screens/Policies/Policies';
import SalesPeriods from 'src/screens/SalesPeriods/SalesPeriods';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Information from 'src/screens/Information/Information';
import BuyerRequest from 'src/screens/BuyerRequest/BuyerRequest';
import DeliveryList from 'src/screens/DeliveryList/DeliveryList';
import NewSalesPeriod from 'src/screens/NewSalesPeriod/NewSalesPeriod';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RegisterClothes from 'src/screens/RegisterClothes/RegisterClothes';
import NewDelivery from 'src/screens/NewDelivery/NewDelivery';


type Props = NativeStackScreenProps<stackParamList, 'Home'>


function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />

      <Button
        title="Principal"
        onPress={() => navigation.navigate('Principal')}
      />

      <Button
        title="Entregas pendientes"
        onPress={() => navigation.navigate('DeliveryList')}
      />
      <Button
        title="Policies"
        onPress={() => navigation.navigate('Policies')}
      />
      <Button
        title="Periodos de venta"
        onPress={() => navigation.navigate('SalesPeriods')}
      />

      <Button
        title="Information"
        onPress={() => navigation.navigate('Information')}
      />
      <Button
        title='Nuevo periodo de ventas'
        onPress={() => navigation.navigate('NewSalesPeriod')}
      />
      <Button
        title="Solicitudes de compra"
        onPress={() => navigation.navigate('BuyerRequest')}
      />
      <Button
        title="Nueva compra"
        onPress={() => navigation.navigate('RegisterClothes')}
      />
      <Button
        title="Nueva entrega"
        onPress={() => navigation.navigate('NewDelivery')}
      />
    </View>
  );
}

export type stackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Principal: undefined;
  DeliveryList: undefined;
  Policies: undefined;
  SalesPeriods: undefined;
  Information: undefined;
  NewSalesPeriod: undefined;
  BuyerRequest: undefined;
  RegisterClothes: undefined;
  NewDelivery: undefined;
};

const Stack = createNativeStackNavigator<stackParamList>();

function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={
              {
                headerStyle: { backgroundColor: Colors.Dark },
                headerTitleStyle: { color: Colors.White, fontSize: 24, fontWeight: '900' },
                headerBackTitleVisible: false,
                headerBackImageSource: require('src/assets/images/back.png'),
                headerTintColor: Colors.White,
              }
            }
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Login"
              component={Login} options={{
                title: 'Bazar and Drops'
              }} />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: 'Bazar and Drops'
              }} />
            <Stack.Screen
              name="Principal"
              component={Principal}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name="DeliveryList"
              component={DeliveryList}
              options={{
                title: 'Entregas Pendientes'
              }} />
            <Stack.Screen
              name="Policies"
              component={Policies}
              options={{
                title: 'Politicas'
              }} />
            <Stack.Screen
              name="SalesPeriods"
              component={SalesPeriods}
              options={{
                title: 'Periodos de venta'
              }} />
            <Stack.Screen
              name="Information"
              component={Information}
              options={{
                title: 'Informacion'
              }} />
            <Stack.Screen
              name="NewSalesPeriod"
              component={NewSalesPeriod}
              options={{
                title: 'Nuevo periodo de ventas'
              }} />
            <Stack.Screen
              name='BuyerRequest'
              component={BuyerRequest}
              options={{
                title: 'Solicitudes de compra'
              }} />
            <Stack.Screen
              name='RegisterClothes'
              component={RegisterClothes}
              options={{
                title: 'Nueva prenda'
              }} />
            <Stack.Screen
              name='NewDelivery'
              component={NewDelivery}
              options={{
                title: 'Nueva entrega'
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
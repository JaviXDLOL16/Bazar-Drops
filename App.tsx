import * as React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'src/screens/Login/Login';
import Register from 'src/screens/Register/Register';
import { Colors } from 'src/models/Colors/Colors';
import Principal from 'src/screens/Principal/Principal';
import Policies from 'src/screens/Policies/Policies';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Information from 'src/screens/Information/Information';
import BuyerRequest from 'src/screens/BuyerRequest/BuyerRequest';
import DeliveryList from 'src/screens/DeliveryList/DeliveryList';
import NewSalesPeriod from 'src/screens/NewSalesPeriod/NewSalesPeriod';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RegisterClothes from 'src/screens/RegisterClothes/RegisterClothes';
import NewDelivery from 'src/screens/NewDelivery/NewDelivery';
import Authentication from 'src/screens/Authentication/Authentication';
import SalesPeriodList from 'src/screens/SalesPeriodList/SalesPeriodList';
import DeliveryDetails from 'src/screens/DeliveryDetails/DeliveryDetails';
import SelectCloth from 'src/screens/SelectCloth/SelectCloth';
import AllRegisteredClothes from 'src/screens/AllRegisteredClothes/AllRegisteredClothes';
import SalesPeriod from 'src/screens/SalesPeriod/SalesPeriod';
import ClothDetails from 'src/screens/ClothDetails/ClothDetails';
import SellerDetails from 'src/screens/SellerDetails/SellerDetails';
import { DeliveryFilterStates } from 'src/screens/DeliveryList/components/FilterForDeliveryStatus';


type Props = NativeStackScreenProps<stackParamList, 'Home'>


function Home({ navigation }: Props) {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 50 }}>
        <Text>Global</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
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
          title="Todas las prendas registradas"
          onPress={() => navigation.navigate('AllRegisteredClothes')}
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

export type stackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Policies: undefined;
  Principal: undefined;
  Information: undefined;
  DeliveryList: { status?: DeliveryFilterStates };
  DeliveryDetails: undefined;
  NewDelivery: undefined;
  Authentication: undefined;
  SelectCloth: undefined;
  RegisterClothes: undefined;
  BuyerRequest: undefined;
  SalesPeriodList: undefined;
  AllRegisteredClothes: undefined;
  SalesPeriod: undefined;
  NewSalesPeriod: undefined;
  ClothDetails: { clothId: number };
  SellerDetails: undefined;
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
                title: 'Bazar and Drops',

              }} />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: 'Bazar and Drops',
              }} />
            <Stack.Screen
              name='Authentication'
              component={Authentication}
              options={{
                title: 'Bazar and Drops'
              }} />
            <Stack.Screen
              name="Policies"
              component={Policies}
              options={{
                title: 'Politicas'
              }} />
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
              name='AllRegisteredClothes'
              component={AllRegisteredClothes}
              options={{
                title: 'Todos los registros'
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

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
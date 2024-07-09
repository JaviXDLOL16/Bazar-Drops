import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'src/screens/Login/Login';
import Register from 'src/screens/Register/Register';
import { Colors } from 'src/models/Colors/Colors';
import Principal from 'src/screens/Principal/Principal';
import PendingDeliveries from 'src/screens/PendingDeliveries/PendingDeliveries';
import Policies from 'src/screens/Policies/Policies';
import SalesPeriods from 'src/screens/SalesPeriods/SalesPeriods';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


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
        onPress={() => navigation.navigate('PendingDeliveries')}
      />
      <Button
        title="Policies"
        onPress={() => navigation.navigate('Policies')}
      />
      <Button
        title="Periodos de venta"
        onPress={() => navigation.navigate('SalesPeriods')}
      />





    </View>
  );
}

export type stackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Principal: undefined;
  PendingDeliveries: undefined;
  Policies: undefined;
  SalesPeriods: undefined;
};

const Stack = createNativeStackNavigator<stackParamList>();

function App() {
  return (
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
            name="PendingDeliveries"
            component={PendingDeliveries}
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

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
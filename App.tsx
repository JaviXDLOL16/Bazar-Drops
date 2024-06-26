import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'src/screens/Login/Login';
import Register from 'src/screens/Register/Register';
import { Colors } from 'src/models/Colors/Colors';
import Container from 'src/components/layout/Container';
import Principal from 'src/screens/Principal/Principal';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function Home({ navigation }) {
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

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          {
            headerStyle: { backgroundColor: Colors.Dark },
            headerTitleStyle: { color: Colors.White, fontSize: 24, fontWeight: '900' },
            headerBackTitleVisible: false,
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
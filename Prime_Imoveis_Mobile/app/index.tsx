import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useFonts, Poppins_400Regular, Poppins_800ExtraBold, Poppins_700Bold, Poppins_100Thin } from '@expo-google-fonts/poppins';

// Criação da configuração da navegação
const Stack = createStackNavigator();

// Configuração de linking
const linking = {
  prefixes: ['PrimeImoveis://', 'https://PrimeImoveis.com'],
  config: {
    screens: {
      Login: 'login',
      Cadastro: 'cadastro',
      Home: 'home',
    },
  },
};

export default function Index() {
  const [fonteLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_100Thin,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if (!fonteLoaded) {
    return null;
  }

  return (
    <NavigationContainer linking={linking} independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name='Cadastro' 
          component={Cadastro}
          options={{ title: 'Cadastro', headerShown: false }}
        />
        <Stack.Screen 
          name='Login' 
          component={Login} 
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{ title: 'Home', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

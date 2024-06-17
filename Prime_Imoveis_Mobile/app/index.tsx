import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useFonts, Poppins_400Regular, Poppins_800ExtraBold, Poppins_700Bold, Poppins_100Thin } from '@expo-google-fonts/poppins';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '@/Data/firebaseConfig';
import TelaCarregamento from './TelaCarregamento'; // Caminho para o seu componente de carregamento

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  // Carregamento das fontes
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_100Thin,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setInitializing(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!initializing && fontsLoaded) {
      setTimeout(() => {
        setLoadingComplete(true);
      }, 3000); // Tempo simulado de carregamento
    }
  }, [initializing, fontsLoaded]);

  if (!isLoadingComplete) {
    return <TelaCarregamento loadingText="Carregando aplicativo"/>;
  }

  return (
    <NavigationContainer linking={linking} independent={true}>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
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

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useFonts, Poppins_400Regular, Poppins_800ExtraBold, Poppins_700Bold, Poppins_100Thin } from '@expo-google-fonts/poppins';


// Criação da configuração da navegação
const Stack = createStackNavigator();

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
    // // Criando a div do Navigation
    
    <NavigationContainer independent={true}>
       {/* Navigator a partir da configuração */}
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
  )
}



// import { Text, View } from "react-native";
// import CadastroPage from "./pages/Cadastro/Cadastro";

// export default function Index() {
//   return (
//     <View>
//       <CadastroPage/>
//     </View>
//   );
// }

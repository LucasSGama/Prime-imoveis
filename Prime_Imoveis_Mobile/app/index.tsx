import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";

// Criação da configuração da navegação
const Stack = createStackNavigator();

export default function Index() {
  return (
    // // Criando a div do Navigation
    <NavigationContainer independent={true}>
       {/* Navigator a partir da configuração */}
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen 
          name='Cadastro' 
          component={Cadastro}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen 
          name='Login' 
          component={Login} 
          options={{ title: 'Overview' }}
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

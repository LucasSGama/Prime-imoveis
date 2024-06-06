
import React from 'react';
import Index from './index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function RootLayout() {
  return (
    
    <Index/>
  );
}


// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//     </Stack>
//   );
// }

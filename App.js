import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './src/screens/FirstScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';
import LogInScreen from './src/screens/LogInScreen';
import RegisterScreen from "./src/screens/RegisterScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#3b31eb",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          options={{
            header: () => null
          }}
          name='FirstScreen' component={FirstScreen} />

        <Stack.Screen
          options={{
            header: () => null
          }}
          name='GetStartedScreen' component={GetStartedScreen} />

        <Stack.Screen
          options={{
            header: () => null
          }}
          name='LogInScreen' component={LogInScreen} />

        <Stack.Screen
          options={{
            header: () => null
          }}
          name='RegisterScreen' component={RegisterScreen} />

      </Stack.Navigator>
    </NavigationContainer>


  );
}
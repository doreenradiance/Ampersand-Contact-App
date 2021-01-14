import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './src/screens/FirstScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // title: "GetStarted",
          // headerStyle:{
          //   backgroundColor:"#3b31eb"
          // },
          headerTintColor: "#3b31eb",
          headerTitleAlign: "center",
          // headerRight: () => (<Text style={{ color: "#3b31eb", marginRight: 20 }}>Icons</Text>
          // )
        }}
      >
        <Stack.Screen
          options={{
            header:()=>null
          }}
          name='GetStarted' component={GetStartedScreen} />
        <Stack.Screen name='GetStartedScreen' component={GetStartedScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>


  );
}



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FirstScreen />
//       {/* <GetStartedScreen/> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

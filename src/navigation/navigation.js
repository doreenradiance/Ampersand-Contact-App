import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import FirstScreen from '../screens/FirstScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import LogInScreen from '../screens/LogInScreen';
import RegisterScreen from "../screens/RegisterScreen";
import ScanScreen from "../screens/ScanScreen";
import ScanningScreen from "../screens/ScanningScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileDetailScreen from "../screens/ProfileDetailScreen";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authAction";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function AppContainer({ auth, logout }) {

  return (
    <NavigationContainer>
      {
        auth.login ?
          <Stack.Navigator
          // screenOptions={{
          //   headerTintColor: "#3b31eb",
          //   headerTitleAlign: "center",
          //   headerBackTitle: ""
          // }}
          >

            <Stack.Screen
              options={{
                headerRight: () => (
                  <TouchableOpacity style={{ marginRight: 20 }}
                    onPress={logout}>
                    <Text>Logout</Text>
                  </TouchableOpacity>
                ),
                title: "My Profile",
                headerStyle: {
                  backgroundColor: "#de4f45"
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
              }}
              name='ProfileDetailScreen' component={ProfileDetailScreen} />
          </Stack.Navigator>
          :

          <Stack.Navigator
            screenOptions={{
              headerTintColor: "#3b31eb",
              headerTitleAlign: "center",
              headerBackTitle: ""
            }}
          >
            <Stack.Screen
              options={{
                header: () => null
              }}
              name='FirstScreen' component={FirstScreen} />

            <Stack.Screen
              options={{
                // header: () => null
                title: "",

                headerStyle: {
                  backgroundColor: "white"
                },
                headerTintColor: "black",
                headerTitleAlign: "center",
              }}
              name='GetStartedScreen'
              component={GetStartedScreen}
            />

            <Stack.Screen
              options={{
                title: "SIGN IN",
                headerStyle: {
                  backgroundColor: "#de4f45"
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
              }}
              name='LogInScreen' component={LogInScreen} />

            <Stack.Screen
              options={{
                // header: () => null
                title: "REGISTER",
                headerStyle: {
                  backgroundColor: "#de4f45"
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
              }}
              name='RegisterScreen' component={RegisterScreen} />

            <Stack.Screen
              options={({ route, navigation }) => ({
                title: "CODETRAIN",
                headerStyle: {
                  backgroundColor: "#de4f45"
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerRight: () => (<TouchableOpacity onPress={() => {
                  navigation.navigate("ProfileDetailScreen")
                }} style={{ color: "#3b31eb", marginRight: 20 }}>
                  <AntDesign name="user" size={24} color="white" /></TouchableOpacity>)

              })}
              name='ScanScreen' component={ScanScreen} />

            <Stack.Screen
              options={{
                header: () => null
              }}
              name='ScanningScreen' component={ScanningScreen} />

            <Stack.Screen
              options={{
                // header: () => null
                title: "Member Profile",
                headerStyle: {
                  backgroundColor: "#de4f45"
                },
                headerTintColor: "white",
                headerTitleAlign: "center",
              }}
              name='DetailsScreen' component={DetailsScreen} />


          </Stack.Navigator>
      }
    </NavigationContainer >
  );
}

const mapStateToProp = (state) => {
  return { auth: state }
}

export default connect(mapStateToProp, { logout })(AppContainer);
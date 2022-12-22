import 'react-native-gesture-handler';

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native'
import { StackNavigator } from './src/navigator/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { ChatScreen } from './src/screens/ChatScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle:{
          fontSize: 16,
          fontWeight:'700',
          textTransform:"capitalize",
          letterSpacing:1.5,
        },
        tabBarActiveTintColor:'#FF8755',
        tabBarInactiveTintColor:'gray',
        tabBarIndicatorStyle:{
          backgroundColor:'#FF8755',
          height:5,
        }
      }}>
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Cuenta" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;

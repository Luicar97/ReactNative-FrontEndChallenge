import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from './src/navigator/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    
    <NavigationContainer>
      {
        <StackNavigator />
      }
    </NavigationContainer>
  )
}

export default App;

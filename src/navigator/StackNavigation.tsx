import { createStackNavigator } from '@react-navigation/stack';
import { ChatScreen } from '../screens/ChatScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='RegisterScreen'>
      <Stack.Screen options={{ headerShown:false }} name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen options={{ headerShown:false }} name="ChatScreen" component={ChatScreen} />
      <Stack.Screen options={{ headerShown:false }} name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
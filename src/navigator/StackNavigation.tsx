import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen } from '../screens/RegisterScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='RegisterScreen'>
      <Stack.Screen options={{ headerShown:false }} name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
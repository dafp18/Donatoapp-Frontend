import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: 'Login'}}  
        />
      </Stack.Navigator>
  );
}
export default LoginStack;
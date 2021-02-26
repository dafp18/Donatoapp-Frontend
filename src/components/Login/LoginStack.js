import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from '../Home/HomeScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen name="Bienvenidos" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
  );
}
export default LoginStack;
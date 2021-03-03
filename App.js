import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import LoginScreen from './src/components/Login/LoginScreen';
import HomeDonanteStack from './src/components/Home/Donante/HomeDonanteStack';

//<LoginScreen/>
const App = () => {
  return (
    < NavigationContainer >
      <HomeDonanteStack/>
    </ NavigationContainer >
    
  );
};

export default App;

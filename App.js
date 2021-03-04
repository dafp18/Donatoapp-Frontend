import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import LoginStack from './src/components/Login/LoginStack';
import RouteStack from './src/components/Routes/RouteStack';

//<LoginScreen/>
const App = () => {
  return (
    < NavigationContainer >
        <RouteStack/>
    </ NavigationContainer >
    
  );
};

export default App;

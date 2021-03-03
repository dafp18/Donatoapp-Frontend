import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDonanteScreen from './HomeDonanteScreen';
import SelectCategory from '../../Donations/SelectedCategoryScreen'

const Stack = createStackNavigator();

const HomeDonanteStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeDonante"
          component={HomeDonanteScreen}
          options={{ title: 'Bienvenido' }}
        />
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{ title: 'Selecionar categoria' }}
        />
      </Stack.Navigator>
    
  );
};

export default HomeDonanteStack;
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Login/LoginScreen';

import HomeDonanteScreen from '../Home/Donante/HomeDonanteScreen';
import SelectCategory from '../Donations/SelectedCategoryScreen';
import DataDonation from '../Donations/DataDonationScreen';
import SelectImageDonation from '../Donations/SelectImageDonationScreen';
import selectLocation from '../Donations/selectLocationDonationScreen';

import HomeFundacion from '../Home/Fundacion/HomeFundacionScreen';
import ListaDonaciones from '../Home/Fundacion/ListDonacionesScreen';
import DetalleDonacion from '../Home/Fundacion/DatalleDonacionScreen';

const Stack = createStackNavigator();

const RouteStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="HomeDonante"
          component={HomeDonanteScreen}
          options={{ title: 'Bienvenido', headerShown:false }}
        />
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{ title: 'Selecionar categoria' }}
        />
        <Stack.Screen
          name="DataDonation"
          component={DataDonation}
          options={{ title: 'Detalles de la donación' }}
        />
        <Stack.Screen
          name="SelectImageDonation"
          component={SelectImageDonation}
          options={{ title: 'Seleccionar fotos' }}
        />
        <Stack.Screen
          name="selectLocation"
          component={selectLocation}
          options={{ title: 'Elegir ubicación' }}
        />

        <Stack.Screen
          name="HomeFundacion"
          component={HomeFundacion}
          options={{ title: 'Bienvenido', headerShown:false }}
        />
        <Stack.Screen
          name="ListDonaciones"
          component={ListaDonaciones}
          options={{ title: 'Donaciones' }}
        />
        <Stack.Screen
          name="DetailDonacion"
          component={DetalleDonacion}
          options={{ title: 'Detalle de la donación' }}
        />

      </Stack.Navigator>
    
  );
};

export default RouteStack;
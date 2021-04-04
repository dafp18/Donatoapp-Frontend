import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../Screens/Splash';

import LoginScreen from '../Screens/LoginScreen';
import SelectRol from '../Screens/RolRegisterScreen';
import RegisterScreen from '../Screens/RegisterScreen';

import HomeDonanteScreen from '../Home/Donante/HomeDonanteScreen';
import SelectCategory from '../Donations/SelectedCategoryScreen';
import DataDonation from '../Donations/DataDonationScreen';
import SelectImageDonation from '../Donations/SelectImageDonationScreen';
import selectLocation from '../Donations/selectLocationDonationScreen';

import HomeFundacion from '../Home/Fundacion/HomeFundacionScreen';
import ListaDonaciones from '../Home/Fundacion/ListDonacionesScreen';
import DetalleDonacion from '../Home/Fundacion/DatalleDonacionScreen';

import HistorialDonaciones from '../History/HistoryDonationsScreen';
import FundationsList from '../Fundations/FundationsScreen';
import TipsToDonate from '../TipsToDonate/TipsToDonateScreen';

const Stack = createStackNavigator();

const RouteStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="SelectRol"
          component={SelectRol}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="HomeDonante"
          component={HomeDonanteScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{ headerShown:false}}
        />
        <Stack.Screen
          name="DataDonation"
          component={DataDonation}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="SelectImageDonation"
          component={SelectImageDonation}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="selectLocation"
          component={selectLocation}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="DonationsHistory"
          component={HistorialDonaciones}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="FundationsList"
          component={FundationsList}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="TipsToDonate"
          component={TipsToDonate}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="HomeFundacion"
          component={HomeFundacion}
          options={{ headerShown:false }}
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
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../Screens/Splash';

import LoginScreen from '../Screens/LoginScreen';
import SelectRol from '../Screens/RolRegisterScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ForgotPasswordScreen  from '../Screens/ForgotPasswordScreen';

import HomeScreen from '../Home/HomeScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import SelectCategory from '../Donations/NewDonate/SelectedCategoryScreen';
import DataDonation from '../Donations/NewDonate/DataDonationScreen';
import SelectImageDonation from '../Donations/NewDonate/SelectImageDonationScreen';
import selectLocation from '../Donations/NewDonate/selectLocationDonationScreen';
import HistorialDonaciones from '../Donations/History/HistoryDonationsScreen';
import TipsToDonate from '../Donations/TipsToDonate/TipsToDonateScreen';
import EditDonationScreen from '../Donations/EditDonation/EditDonationScreen';

import ListaDonaciones from '../Fundations/ListDonacionesScreen';
import DetalleDonacion from '../Fundations/DatalleDonacionScreen';
import DonacionesEnTramiteScreen from '../Fundations/DonacionesEnTramiteScreen';
import DonacionesAceptadasScreen from '../Fundations/DonacionesAceptadasScreen';


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
          name="ForgotPassword"
          component={ForgotPasswordScreen}
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
          name="Home"
          component={HomeScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
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
          name="TipsToDonate"
          component={TipsToDonate}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="EditDonation"
          component={EditDonationScreen}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="ListDonaciones"
          component={ListaDonaciones}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name="DetailDonacion"
          component={DetalleDonacion}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="DonacionesEnTramiteScreen"
          component={DonacionesEnTramiteScreen}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="DonacionesAceptadasScreen"
          component={DonacionesAceptadasScreen}
          options={{ headerShown:false }}
        />

      </Stack.Navigator>
    
  );
};

export default RouteStack;
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator,TransitionPreset, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.js';
import OTPScreen from '../screens/OTPScreen.js';
import SplashScreen from '../screens/SplashScreen.js';
import LoginScreen from '../screens/Login.js';
import Notes from '../screens/NotesScreen.js';
import CreateNotes from '../screens/NotesCreateScreen.js';
import ListClient from '../screens/ListClientScreen.js';
import ReminderScreen from '../screens/ReminderScreen.js';
import AddReminderScreen from '../screens/AddReminderScreen.js';
import ReminderDescScreen from '../screens/ReminderDescScreen.js'
import AddClientScreenOne from '../screens/addClient/AddClientScreenOne.js';
import AddClientScreenTwo from '../screens/addClient/AddClientScreenTwo.js';
import AddClientScreenThree from '../screens/addClient/AddClientScreenThree.js';
import DocumentScreen from '../screens/DocumentScreen.js';
import GreetingScreen from '../screens/GreetingScreen.js';
import CalculatorScreen from '../screens/CalculatorScreen.js';
import GrowthScreen from '../screens/GrowthScreen.js';
import ClientDescScreen from '../screens/ClientDescScreen.js';
import LoginMobileScreen from '../screens/LoginMobileScreen.js';
import SignUpScreen from '../screens/SignUpScreen.js';
import setPasswordScreen from '../screens/SetPasswordScreen.js';
import SetLanguageScreen from '../screens/SetLanguageScreen.js';
import SetupBioScreen from '../screens/SetupBioScreen.js';
import ContBioScreen from '../screens/ContBioScreen.js';
import ContPasscodeScreen from '../screens/ContPasscodeScreen.js';
const Stack = createStackNavigator();

const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS
}

const StackNavigation = () =>{
  return (
      <Stack.Navigator 
      screenOptions={
        {
          headerShown:false,
          ...TransitionScreenOptions
        }
        }>
          
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SetupBio" component={SetupBioScreen}/>
        <Stack.Screen name="ContBio" component={ContBioScreen}/>
        <Stack.Screen name="ContPasscode" component={ContPasscodeScreen}/>
        <Stack.Screen name="SetLanguage" component={SetLanguageScreen}/>
        <Stack.Screen name="OTP" component={OTPScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="SetPassword" component={setPasswordScreen}/>
        <Stack.Screen name="LoginMobile" component={LoginMobileScreen}/>
        <Stack.Screen name="Notes" component={Notes}/>
        <Stack.Screen name="CreateNotes" component={CreateNotes}/>
        <Stack.Screen name="ListClient" component={ListClient} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen}/>
        <Stack.Screen name="AddReminder" component={AddReminderScreen}/>
        <Stack.Screen name="ReminderDesc" component={ReminderDescScreen}/>
        <Stack.Screen name="AddClientOne" component={AddClientScreenOne}/>
        <Stack.Screen name="AddClientTwo" component={AddClientScreenTwo}/>
        <Stack.Screen name="AddClientThree" component={AddClientScreenThree}/>
        <Stack.Screen name="Document" component={DocumentScreen}/>
        <Stack.Screen name="Greeting" component={GreetingScreen}/>
        <Stack.Screen name="Calculator" component={CalculatorScreen}/>
        <Stack.Screen name="Growth" component={GrowthScreen}/>
        <Stack.Screen name="ClientDesc" component={ClientDescScreen}/>


      </Stack.Navigator>
  );
}

export default StackNavigation;

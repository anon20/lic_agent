// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator,TransitionPreset, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.js';
import SplashScreen from '../screens/SplashScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import Notes from '../screens/NotesScreen.js';
import CreateNotes from '../screens/NotesCreateScreen.js';
import ListClient from '../screens/ListClientScreen.js';
import ReminderScreen from '../screens/ReminderScreen.js';
import AddReminderScreen from '../screens/AddReminderScreen.js';
import ReminderDescScreen from '../screens/ReminderDescScreen.js'
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
          
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Notes" component={Notes}/>
        <Stack.Screen name="CreateNotes" component={CreateNotes}/>
        <Stack.Screen name="ListClient" component={ListClient} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen}/>
        <Stack.Screen name="AddReminder" component={AddReminderScreen}/>
        <Stack.Screen name="ReminderDesc" component={ReminderDescScreen}/>

      </Stack.Navigator>
  );
}

export default StackNavigation;
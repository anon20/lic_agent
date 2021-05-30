
import React,{useContext,useState,useEffect} from 'react';
import {
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation.js'
import {LangContext} from '../contextApi/Language.js'
const nav = () => {

  const {setLangFirstTime} = React.useContext(LangContext)

  React.useEffect(()=>{
    setLang()
  },[])

  const setLang = () => {
    setLangFirstTime()
  }
  return (
    <>
      <NavigationContainer>
       <StackNavigation/>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default nav;

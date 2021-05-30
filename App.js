
import React,{useContext,useState,useEffect} from 'react';
import {
  StyleSheet,
} from 'react-native';
import NavApp from './src/navigation/index'
import {LangContext,LangProvider} from './src/contextApi/Language.js'
const App = () => {

  
  return (
    <>
      <LangProvider>
        <NavApp/>
      </LangProvider>  
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;

import React from 'react'
import { View,TextInput, Text,StyleSheet,Dimensions,Image,TouchableOpacity,ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../assets/Colors/Colors';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const  NotesTabs =(props)=>{
    return (
        
        
            <TouchableOpacity onPress={props.onClick} style={[styles.tabContainer,{backgroundColor:props.tabBgColor}]}>
               <Text style={{textAlign:'center',padding:10,fontSize:16}}>here this is sample code</Text>
            </TouchableOpacity>
        
    )
}

const styles  = StyleSheet.create({
  
    tabContainer : {
        height:SCREEN_HEIGHT/5,
        width:SCREEN_WIDTH/2.5,
        alignSelf:'center',
        marginTop:20,
        borderRadius:10,
        elevation:15
    },
  
})

export default NotesTabs


import React,{useState,useEffect} from 'react'
import {View,StyleSheet,Dimensions, Text,TouchableOpacity,TextInput,ScrollView,FlatList,SafeAreaView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';

import DateTimePicker from '@react-native-community/datetimepicker';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'First Item',
      policy:56,
      policyNum:56486556
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-',
      name: 'First Item',
      policy:56,
      policyNum:56486556
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-ad',
        name: 'First Item',
        policy:56,
        policyNum:56486556
    }, 
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3adqw53abb28ba',
        name: 'First Item',
        policy:56,
        policyNum:56486556
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad5dd3abb28ba',
        name: 'First Item',
        policy:56,
        policyNum:56486556
      },   
  ];

  
function GrowthScreen({navigation}) {

  const [fatherName,setFatherName] = useState('')
  const [motherName,setMotherName] = useState('')
  const [partnerName,setPartnerName] = useState('')


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    console.log(selectedDate)
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{height:SCREEN_HEIGHT/10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <MaterialIcon style={{paddingLeft:20}} name="chevron-left" color="#707070" size={25}/>

                </TouchableOpacity>
                <Text style={{fontSize:28,fontWeight:'bold',color:'#003C9A',paddingLeft:20}}>My Growth</Text>
            </View>
          
            
          
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
 

})

export default GrowthScreen

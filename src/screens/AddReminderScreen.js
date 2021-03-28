import React,{useState,useEffect} from 'react'
import {View,StyleSheet,Dimensions, Text,TouchableOpacity,TextInput} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

function AddReminderScreen({navigation}) {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [purpose,setPurpose] = useState('') 
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
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
        <View style={styles.container}>
              <View style={{height:SCREEN_HEIGHT/10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <MaterialIcon style={{paddingLeft:20}} name="chevron-left" color="#707070" size={25}/>

                </TouchableOpacity>
                <Text style={{fontSize:28,fontWeight:'bold',color:'#003C9A',paddingLeft:20}}>Reminders</Text>
            </View>

            <View style={{display:"flex",flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,width:SCREEN_WIDTH/1.2,alignSelf:'center',borderColor:'transparent',
        borderBottomColor: '#707070',}}>
            <MaterialIcon style={{flex:0.1}} name="user" color="#003C9A" size={24}/>
            <TextInput style = {[styles.input,{flex:0.9}]}
               underlineColorAndroid = "transparent"
               placeholder = "Full Name"
               placeholderTextColor = "#003C9A"
               autoCapitalize = "none"
               value={name}
               onChangeText = {(e)=>setName(e)}/>
                
            </View>
            <View style={{display:"flex",flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,width:SCREEN_WIDTH/1.2,alignSelf:'center',borderColor:'transparent',
            borderBottomColor: '#707070',marginTop:10}}>
            <MaterialIcon style={{flex:0.1}} name="phone" color="#003C9A" size={24}/>
            <TextInput style = {[styles.input,{flex:0.9}]}
               underlineColorAndroid = "transparent"
               placeholder = "Phone no. "
               placeholderTextColor = "#003C9A"
               autoCapitalize = "none"
               value={phone}
               onChangeText = {(e)=>setPhone(e)}/>
                
            </View>
            <View  style={{display:"flex",flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,width:SCREEN_WIDTH/1.2,alignSelf:'center',borderColor:'transparent',
            borderBottomColor: '#707070',marginTop:10}}>
            <MaterialIcon onPress={showDatepicker} style={{flex:0.1}} name="calendar" color="#003C9A" size={24}/>
            <TextInput style = {[styles.input,{flex:0.9}]}
               underlineColorAndroid = "transparent"
               placeholder = "Policy Maturity Date "
               placeholderTextColor = "#003C9A"
               autoCapitalize = "none"
               value={date}
               />
                
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}
            <View style={{display:"flex",flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:1,width:SCREEN_WIDTH/1.2,alignSelf:'center',borderColor:'transparent',
            borderBottomColor: '#707070',marginTop:10}}>
            <MaterialIcon style={{flex:0.1}} name="map-marker" color="#003C9A" size={24}/>
            <TextInput style = {[styles.input,{flex:0.9}]}
               underlineColorAndroid = "transparent"
               placeholder = "Purpose"
               placeholderTextColor = "#003C9A"
               autoCapitalize = "none"
               value={purpose}
               onChangeText = {(e)=>setPurpose(e)}/>
                
            </View>

            <TouchableOpacity underlayColor='blue' style={styles.addNewBtnContainer} onPress={()=>navigation.navigate('AddReminder')}>
            <View style={styles.addNewClientBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#003C9A',paddingLeft:10}}>Add Reminder</Text>
            </View>
            </TouchableOpacity>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    input: {
        margin: 5,
        height: 40,
        fontSize:18,
        color:'#003C9A',
        borderColor:'transparent',
     },
     addNewClientBtn:{
        height:SCREEN_HEIGHT/14,
        elevation:5,
        width:SCREEN_WIDTH/1.5,
        alignSelf:'center',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row'
        ,alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        borderWidth:0.5,
        borderColor:'#003C9A',
        borderRadius:10},
})
export default AddReminderScreen

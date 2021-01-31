import React,{useState} from 'react'
import {View,StyleSheet,Dimensions, Text,TouchableOpacity,TouchableHighlight,TextInput} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
function NotesCreateScreen({navigation}) {
    const [title,setTitle] = useState('');
    const [text,setText] = useState('');
    return (
        <View style={styles.notes_container}>
            <View style={{height:SCREEN_HEIGHT/10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <MaterialIcon style={{paddingLeft:20}} name="chevron-left" color="#707070" size={25}/>

                </TouchableOpacity>
                <Text style={{fontSize:28,fontWeight:'bold',color:'#003C9A',paddingLeft:20}}>Notes</Text>
            </View>
            <View style={{width:SCREEN_WIDTH-40,justifyContent:'center',
                height:SCREEN_HEIGHT/10,backgroundColor:"white",alignSelf:'center',borderRadius:10,elevation:5}}>
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                numberOfLines={1}
                maxLength={40}
                placeholder = "Enter Title"
                placeholderTextColor = "black"
                autoCapitalize = "none"
                onChangeText = {(e)=>setTitle(e)}/>
            </View>
           
            <View style={{width:SCREEN_WIDTH-40,justifyContent:'center',
                height:SCREEN_HEIGHT/2,backgroundColor:"white",alignSelf:'center',borderRadius:10,elevation:5,marginTop:24}}>
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                multiline={true}
                placeholder = "Enter Text"
                numberOfLines={10}
                maxLength={300}
                placeholderTextColor = "black"
                autoCapitalize = "none"
                onChangeText = {(e)=>setText(e)}/>
            </View>

            <TouchableHighlight underlayColor='blue' style={{width:SCREEN_WIDTH/2,borderRadius:10,alignSelf:'center',height:SCREEN_HEIGHT/10,backgroundColor:'white',position:'absolute',bottom:45}} onPress={()=>navigation.navigate('CreateNotes')}>
            <View style={styles.addNewNoteBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#003C9A',paddingLeft:10}}>Take a Note</Text>
            </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    notes_container : {
        flex:1,
    },
    input: {
        color:'black',
        margin:5,
        fontSize:22,
        borderColor: 'transparent',
        textAlign:'center',
        width:SCREEN_WIDTH-50,
     },

     addNewNoteBtn:{
        height:SCREEN_HEIGHT/10,shadowColor:'red',elevation:5,
        width:SCREEN_WIDTH/2,alignSelf:'center',backgroundColor:'white',
        display:'flex',flexDirection:'row'
        ,alignItems:'center',justifyContent:'center',borderRadius:10},
})

export default NotesCreateScreen

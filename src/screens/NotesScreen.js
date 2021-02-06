import React from 'react'
import {View,StyleSheet,Dimensions, Text,TouchableOpacity,TouchableHighlight,ScrollView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import NotesTabs from '../components/NotesTabs.js'
import { COLORS } from '../assets/Colors/Colors';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
function NotesScreen({navigation}) {
    return (
        <View style={styles.notes_container}>
            <View style={{height:SCREEN_HEIGHT/10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <MaterialIcon style={{paddingLeft:20}} name="chevron-left" color="#707070" size={25}/>

                </TouchableOpacity>
                <Text style={{fontSize:28,fontWeight:'bold',color:'#003C9A',paddingLeft:20}}>Notes</Text>
            </View>
            <TouchableHighlight underlayColor='blue' style={{width:SCREEN_WIDTH/2,borderRadius:10,alignSelf:'center',height:SCREEN_HEIGHT/14,marginTop:24,backgroundColor:'white'}} onPress={()=>navigation.navigate('CreateNotes')}>
            <View style={styles.addNewNoteBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#003C9A',paddingLeft:10}}>Take a Note</Text>
            </View>
            </TouchableHighlight>

            <ScrollView style={{marginTop:10}}>
              <View style={styles.tabsContainer}>

                <NotesTabs 
                    tabBgColor={COLORS.HOME_LIGHT_RED}
                    
                    />
                <NotesTabs
                    tabBgColor={COLORS.HOME_PURPLE}
                />    
                 <NotesTabs 
                   
                    tabBgColor={COLORS.HOME_LIGHT_BLUE}
                    
                    />
                  <NotesTabs 
                    tabBgColor={COLORS.HOME_LIGHT_ORANGE}
                    
                    />   
                
                <NotesTabs 
                    tabBgColor={COLORS.HOME_LIGHT_GREEN}
        
                    />   
                 <NotesTabs 
                    tabBgColor={COLORS.HOME_DARK_BLUE}
                    
                    />   
                
                
               </View> 
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create ({
    notes_container : {
        flex:1,
    },
    addNewNoteBtn:{
    height:SCREEN_HEIGHT/14,shadowColor:'red',elevation:5,
    width:SCREEN_WIDTH/2,alignSelf:'center',backgroundColor:'white',
    display:'flex',flexDirection:'row'
    ,alignItems:'center',justifyContent:'center',borderRadius:10},
        
    tabsContainer : {
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        alignSelf:'center',
        width:SCREEN_WIDTH-40,
        marginTop:10,
        justifyContent:'space-around',
    },

    
})

export default NotesScreen

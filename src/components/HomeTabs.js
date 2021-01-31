import React from 'react'
import { View,TextInput, Text,StyleSheet,Dimensions,Image,TouchableOpacity,ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../assets/Colors/Colors';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const  HomeTabs =(props)=>{
    return (
        
        
            <TouchableOpacity onPress={props.onClick} style={[styles.tabContainer,{backgroundColor:props.tabBgColor}]}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={styles.tab_title}>{props.tabTitle}</Text>
                    <View style={styles.tabicon_view}>
                        
                        <MaterialIcon style={{alignSelf:'center'}} color="black" name={props.tabIcon} size={22}/>
                                
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                   {props.secondLine?<Text style={styles.centertab}><Text style={{fontSize:22}}>{props.secondTabCenterTextF} </Text>{props.secondTabCenterTextS}</Text>:null}
                    <Text style={styles.centertab}><Text style={{fontSize:22}}>{props.tabCenterTextF} </Text>{props.tabCenterTextS}</Text>
                  
                </View>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={styles.bottomtab}>{props.tabBottomText}</Text>
                </View>
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
    tab_title:{
        justifyContent:'center',
        paddingLeft:20,
        fontSize:18,
        color:COLORS.WHITE,
        fontWeight:'bold',
        alignSelf:'center'
    },
    centertab :  {
    justifyContent:'center',
    fontSize:14,
    color:COLORS.WHITE,
    fontWeight:'bold',
    alignSelf:'center'
    },
    tabicon_view : {
        height:SCREEN_HEIGHT/18,width:SCREEN_HEIGHT/18,
        borderRadius:50,
        marginRight:2,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:'white',
        opacity:0.5
    },
    bottomtab :{
    justifyContent:'center',
    fontSize:14,
    color:COLORS.WHITE,
    fontWeight:'bold',
    alignSelf:'flex-end',
    padding:10
   }
})

export default HomeTabs


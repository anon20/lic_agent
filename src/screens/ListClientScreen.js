import React from 'react'
import {View,StyleSheet,Dimensions, Text,TouchableOpacity,TouchableHighlight,ScrollView,FlatList,SafeAreaView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import NotesTabs from '../components/NotesTabs.js'
import { COLORS } from '../assets/Colors/Colors';
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

 
function ListClientScreen({navigation}) {

    const renderItem =({item}) => (
        <TouchableHighlight underlayColor="lightblue" 
        onPress={()=>{navigation.navigate('ClientDesc')}}
        style={{height:SCREEN_HEIGHT/7,width:SCREEN_WIDTH-40,borderRadius:10,
          elevation:5,marginTop:5,marginBottom:5,
        backgroundColor:'white',alignSelf:'center'}}>
            <View style={{flex:1}}>
            <View style={{display:'flex',
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',paddingHorizontal:20}}>
                  <Text style={{fontSize:22,alignSelf:'center',fontWeight:'700',color:'#091527'}}>{item.name}</Text>
                  <Text style={{fontSize:22,alignSelf:'center',color:'#00189A',fontWeight:'700'}}>{item.policy}</Text>              
            </View>
  
            <View style={{flex:1,paddingHorizontal:20,display:'flex',flexDirection:'row'}}>
                  <Text  style={{fontSize:22,color:'#233753',fontWeight:'700',alignSelf:'center'}}>Policy No : </Text>
                  <Text style={{fontSize:16,color:'#233753',fontWeight:'500',
                  alignSelf:'center',paddingTop:5}}>{item.policyNum}</Text>              
            </View>
            </View>
        </TouchableHighlight>
    )
    

    return (
        <SafeAreaView style={styles.notes_container}>
            <View style={{height:SCREEN_HEIGHT/10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <MaterialIcon style={{paddingLeft:20}} name="chevron-left" color="#707070" size={25}/>

                </TouchableOpacity>
                <Text style={{fontSize:28,fontWeight:'bold',color:'#003C9A',paddingLeft:20}}>Clients</Text>
            </View>
            <TouchableHighlight underlayColor='blue' style={styles.addNewBtnContainer} onPress={()=>navigation.navigate('AddClientOne')}>
            <View style={styles.addNewClientBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#003C9A',paddingLeft:10}}>Add Client</Text>
            </View>
            </TouchableHighlight>
            
            <View style={{flex:1,marginTop:24,width:SCREEN_WIDTH-20,alignSelf:'center',paddingBottom:20}}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                />
            </View>

           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    notes_container : {
        flex:1,
    },
    addNewBtnContainer:{
        width:SCREEN_WIDTH/2,
        borderRadius:10,
        alignSelf:'flex-end',
        height:SCREEN_HEIGHT/14,
        marginTop:24,
        backgroundColor:'white',
        marginRight:20
    },
    addNewClientBtn:{
        height:SCREEN_HEIGHT/14,
        shadowColor:'red',
        elevation:5,
        width:SCREEN_WIDTH/2,
        alignSelf:'center',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row'
        ,alignItems:'center',
        justifyContent:'center',
        borderRadius:10},
        
})

export default ListClientScreen

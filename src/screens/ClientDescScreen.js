import React from 'react'
import {View,StyleSheet,Dimensions, Text,TouchableOpacity,TouchableHighlight,ScrollView,FlatList,SafeAreaView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import NotesTabs from '../components/NotesTabs.js'
import { COLORS } from '../assets/Colors/Colors';
import { useState } from 'react/cjs/react.development';

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
  const DATA2 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Missed Item',
      policy:56,
      policyNum:56486556
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-',
      name: 'SEcond Missed',
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

  
function ClientDescScreen({navigation}) {

    const [list,setList] = useState(DATA)
    const [selectedTab,setSelectedTab] = useState('tabOne')
    
    React.useEffect(() => {

    }, [])


    
  
   const renderUpcoming=()=> {
       return (
          <View style={{flex:1}}>
            
           </View>
       )
   }
   const renderMissed=()=> {
      return (
         <View style={{flex:1}}>
           
          </View>
      )
  }
  const renderAcknowledged=()=> {
      return (
         <View style={{flex:1}}>
            
          </View>
      )
  }
   
    const selectTab = (tabName) => {
        switch (tabName) {
            case 'tabOne' : {
                setSelectedTab('tabOne')
                break;
            }
            case 'tabTwo' : {
                setSelectedTab('tabTwo')

                break;
            }
            case 'tabThree' : {
                setSelectedTab('tabThree')

                break;
            }
        }
    }
    return (
        <SafeAreaView style={styles.notes_container}>
            <View style={{height:SCREEN_HEIGHT/10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <MaterialIcon style={{paddingLeft:20}} name="chevron-left" color="#707070" size={25}/>

                </TouchableOpacity>
                <Text style={{fontSize:28,fontWeight:'bold',color:'#003C9A',paddingLeft:20}}>Clients</Text>
            </View>
           
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',height:SCREEN_HEIGHT/10,alignItems:'center',marginTop:20,backgroundColor:'white',width:SCREEN_WIDTH-20,borderRadius:10,alignSelf:'center',elevation:5,shadowColor:'yellow',borderColor:'yellow',borderWidth:1}}>
                    <TouchableHighlight underlayColor='lightgreen' style={{padding:10}} onPress={()=>selectTab('tabOne')}>
                            <Text style={[selectedTab=='tabOne'?{color:'#003C9A'}:{color:'#000000'},{fontSize:18,fontWeight:'700',textAlign:'center'}]}>Personal {"\n"} Information</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='lightgreen'  style={{padding:10}} onPress={()=>selectTab('tabTwo')}>
                            <Text style={[selectedTab=='tabTwo'?{color:'#003C9A'}:{color:'#000000'},{fontSize:18,fontWeight:'700',textAlign:'center'}]}>Policy {"\n"} Information</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='lightgreen'  style={{padding:10}} onPress={()=>selectTab('tabThree')}>
                            <Text style={[selectedTab=='tabThree'?{color:'#003C9A'}:{color:'#000000'},{fontSize:18,fontWeight:'700',textAlign:'center'}]}>Family {"\n"} Information</Text>
                    </TouchableHighlight>
            </View>
            

            <View style={{flex:1,marginTop:24,width:SCREEN_WIDTH-20,alignSelf:'center',paddingBottom:20}}>
              
                 <ScrollView style={{flex:1,backgroundColor:'red'}}>
                    
                </ScrollView>
            </View>

           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    notes_container : {
        flex:1,
    },
    addNewBtnContainer:{
        width:SCREEN_WIDTH/1.5,
        borderRadius:10,
        alignSelf:'center',
        height:SCREEN_HEIGHT/14,
        marginTop:24,
        backgroundColor:'white',
    },
    addNewClientBtn:{
        height:SCREEN_HEIGHT/14,
        shadowColor:'red',
        elevation:5,
        width:SCREEN_WIDTH/1.5,
        alignSelf:'center',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row'
        ,alignItems:'center',
        justifyContent:'center',
        borderRadius:10},
        
})

export default ClientDescScreen

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
     personalInfo :{
        'Name':'yash Bhayre',
      'Phone Number':'79878789',
      'Address':'qweasd asdqwea asdasd',
      'Date of Birth': '22th January 2020',
      'Height':'172cm',
      'Weight':'72kg',
        'Occupation':'Employee'
     },
     policyInfo :{
        'Name':'yash Bhayre',
        'Phone Number':'79878789',
        'Address':'qweasd asdqwea asdasd',
        'Date of Birth': '22th January 2020',
        'Height':'172cm',
        'Weight':'72kg',
          'Occupation':'Employee'
     }   
    }
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
            <TouchableHighlight underlayColor='blue' style={styles.addNewBtnContainer} onPress={()=>navigation.navigate('AddClientOne')}>
            <View style={styles.addNewClientBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#003C9A',paddingLeft:10}}>Add Client</Text>
            </View>
            </TouchableHighlight>
           
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
              
                 <ScrollView style={{flex:1,width:'80%',alignSelf:'center'}}>

                    {DATA.map(item => {
                        let objKeys = Object.keys(item.per);

                        console.log(objKeys)
                        objKeys.forEach(key => {
                            // console.log(key,item.personalInfo[key])
                            return (
                                <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                                    {/* <Text style={{fontSize:16,paddingLeft:5}}>{key}</Text> */}
                                    {/* <Text style={{fontSize:16,paddingRight:5}}>{item.personalInfo[key]}</Text> */}
                                </View>
                            )
                          
                        })
                    })}

                    {/* <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                        <Text style={{fontSize:16,paddingLeft:5}}>Name</Text>
                        <Text style={{fontSize:16,paddingRight:5}}>Yash Bhayre</Text>
                    </View> */}
                    <View style={{height:1,backgroundColor:'black',marginTop:5}}>
                     </View>
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
        width:SCREEN_WIDTH/2.5,
        borderRadius:10,
        alignSelf:'flex-end',
        height:SCREEN_HEIGHT/14,
        marginTop:24,
        backgroundColor:'red',
        marginRight:15
    },

    addNewClientBtn:{
        height:SCREEN_HEIGHT/14,
        shadowColor:'red',
        elevation:5,
        width:SCREEN_WIDTH/2.5,
        alignSelf:'flex-end',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row'
        ,alignItems:'center',
        justifyContent:'center',
        borderRadius:10},
        
       
})

export default ClientDescScreen

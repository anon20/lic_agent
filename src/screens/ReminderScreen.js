import React from 'react'
import {View,StyleSheet,Dimensions, Text,TouchableOpacity,ScrollView,FlatList,SafeAreaView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import NotesTabs from 'components/NotesTabs.js'
import { COLORS } from 'assets/Colors/Colors';
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

  
function ReminderScreen({navigation}) {

    const [list,setList] = useState(DATA)
    const [selectedTab,setSelectedTab] = useState('tabOne')
    
    React.useEffect(() => {

    }, [])


    const renderItem =({item}) => (
        <TouchableOpacity underlayColor="lightblue" 
        onPress={()=>navigation.navigate('ReminderDesc')}
        style={{height:SCREEN_HEIGHT/9,width:SCREEN_WIDTH-40,borderRadius:10,
          elevation:5,marginTop:5,marginBottom:5,
        backgroundColor:'white',alignSelf:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:0.15,justifyContent:'center'}}>
               <MaterialIcon style={{justifyContent:'center',alignSelf:'center'}} name="bell" color="#707070" size={32}/>
              </View>
              <View style={{flex:0.55,justifyContent:'center'}}>
                  <Text style={[styles.policy_holder_name]}>{item.name}</Text>
                  <View style={{flexDirection:'row'}}>
                  <Text  style={[styles.policy_style]}>Policy No : </Text>
                  <Text style={{fontSize:16,color:'#233753',fontWeight:'500',
                  alignSelf:'center',paddingTop:5}}>{item.policyNum}</Text>  
                  </View>
              </View>
              <View style={{flex:0.3,justifyContent:'center'}}>
                  <Text  style={[styles.meeting_text_heading]}>Meeting on :</Text>
                  <Text  style={[selectedTab=='tabOne'?{color:'#829300'}:selectedTab=='tabTwo'?{color:'#930000'}:selectedTab=='tabThree'?{color:'#0C5818'}:{},{fontSize:14,fontWeight:'700'}]}>22-03-2020</Text>

              </View>
            </View>
        </TouchableOpacity>
    )
  
   const renderUpcoming=()=> {
       return (
          <View style={{flex:1}}>
             <FlatList
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={item=>item.id}
                  />
           </View>
       )
   }
   const renderMissed=()=> {
      return (
         <View style={{flex:1}}>
           <FlatList
                      data={DATA2}
                      renderItem={renderItem}
                      keyExtractor={item=>item.id}
                  />
          </View>
      )
  }
  const renderAcknowledged=()=> {
      return (
         <View style={{flex:1}}>
            <FlatList
                      data={DATA}
                      renderItem={renderItem}
                      keyExtractor={item=>item.id}
                  />
          </View>
      )
  }
   
    const selectTab = (tabName) => {
        switch (tabName) {
            case 'tabOne' : {
                setList(DATA)
                setSelectedTab('tabOne')
                break;
            }
            case 'tabTwo' : {
                setList(DATA2)
                setSelectedTab('tabTwo')

                break;
            }
            case 'tabThree' : {
                setList(DATA)
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
                <Text style={{fontSize:28,fontWeight:'bold',color:'#003C9A',paddingLeft:20}}>Reminders</Text>
            </View>
            <TouchableOpacity underlayColor='blue' style={styles.addNewBtnContainer} onPress={()=>navigation.navigate('AddReminder')}>
            <View style={styles.addNewClientBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#003C9A',paddingLeft:10}}>Add New Reminder</Text>
            </View>
            </TouchableOpacity>

            <View style={[styles.toggleViewContainer]}>
                    <TouchableOpacity underlayColor='lightgreen' style={{padding:10}} onPress={()=>selectTab('tabOne')}>
                            <Text style={[selectedTab=='tabOne'?{color:'#003C9A'}:{color:'#000000'},{fontSize:18,fontWeight:'700'}]}>12 Upcoming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor='lightgreen'  style={{padding:10}} onPress={()=>selectTab('tabTwo')}>
                            <Text style={[selectedTab=='tabTwo'?{color:'#003C9A'}:{color:'#000000'},{fontSize:18,fontWeight:'700'}]}>2 Missed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor='lightgreen'  style={{padding:10}} onPress={()=>selectTab('tabThree')}>
                            <Text style={[selectedTab=='tabThree'?{color:'#003C9A'}:{color:'#000000'},{fontSize:18,fontWeight:'700'}]}>14 Acknowleged</Text>
                    </TouchableOpacity>
            </View>
            

            <View style={{flex:1,marginTop:24,width:SCREEN_WIDTH-20,alignSelf:'center',paddingBottom:20}}>
              
                 <View style={{flex:1}}>
                <FlatList
                        data={list}
                        renderItem={renderItem}
                        keyExtractor={item=>item.id}
                    />
                </View>
            </View>

           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    notes_container : {
        flex:1,
    },
    policy_holder_name:{
	fontSize:18,
	color:'#091527',
	fontWeight:'700',
	fontFamily:'PTSans-Regular'
    },
    meeting_text_heading:{
	fontSize:16,
	color:'#091527',
	fontWeight:'700',
	fontFamily:'PTSans-Bold'
    },
    policy_style:{

	fontSize:18,
	color:'#233753',
	fontWeight:'700',
	alignSelf:'center',
	fontFamily:'PTSans-Bold'
    },
    toggleViewContainer:{
	display:'flex',
	flexDirection:'row',
	justifyContent:'space-evenly',
	height:SCREEN_HEIGHT/10,
	alignItems:'center',
	marginTop:20,
	backgroundColor:'white',
	width:SCREEN_WIDTH-20,
	borderRadius:10,
	alignSelf:'center',
	elevation:5,
    	shadowOffset: {
    	    width: 3,
    	    height: 3,
    	},
    	shadowColor: "black",
    	shadowRadius: 2.22,
    	overflow:'visible',
    	shadowOpacity:0.5 
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

export default ReminderScreen

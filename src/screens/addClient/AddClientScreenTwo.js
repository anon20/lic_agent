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

  
function AddClientScreenTwo({navigation}) {

  const [policyNum,setPolicyNum] = useState('')
  const [policySrtDate,setPolicySrtDate] = useState('')
  const [policyMaturityDate,setPolicyMaturitytDate] = useState('')
  const [policyPeriod,setPolicyPeriod] = useState('')
  const [sumAssured,setSumAssured] = useState('')
  const [premiumMode,setPremiumMode] = useState('')
  const [premiumAmount,setPremiumAmount] = useState('')
  const [tableNum,setTableNum] = useState('')
  const [term,setTerm] = useState('')
  const [nomineeName,setNomineeName] = useState('')
  const [nomineeRelation,setNomieeRelation] = useState('')


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
                <Text style={{fontSize:28,fontWeight:'bold',color:'#003C9A',paddingLeft:20}}>Add Client</Text>
            </View>
          
            {/* <View style={styles.milestoneContainer}>
                    <View style={styles.milestoneSection}>
                        <View style={styles.circleContainer}>
                            <View style={styles.circleSection} >

                            </View>
                            <View style={{marginTop:5}}>
                                <Text style={styles.milestonename}>Personal {"\n"} Information</Text>
                            </View>

                        </View>
                        <View style={styles.line}>

                        </View>
                    </View>
                    <View style={styles.milestoneSection}>
                            <View style={styles.circleContainer}>
                                    <View style={styles.circleSection} >

                                    </View>
                                    <View style={{marginTop:5}}>
                                        <Text style={styles.milestonename}>Policy {"\n"} Information</Text>
                                    </View>

                                </View>
                                <View style={styles.line}>

                                </View>

                    </View>

                    <View style={styles.milestoneSection2}>
                        <View style={styles.circleSection} >

                        </View>
                        <View style={{marginTop:5}}> 
                            <Text style={styles.milestonename}>Family {"\n"} Information</Text>
                        </View>

                    </View>
                   
                   
                    

            </View> */}


            <View style={[styles.milestoneContainer,{width:400,height:75}]}>
                   
                    <View style={{height:75,width:75,borderRadius:50,borderWidth:2,borderColor:'#299003'}}>

                    </View>
                    <View style={{height:2,width:50,backgroundColor:'#0CB119',borderRadius:50,alignSelf:'center'}}>

                    </View>
                    <View style={{height:75,width:75,borderRadius:50,borderWidth:2,borderColor:'#60B1BF'}}>

                    </View>
                    <View style={{height:2,width:50,borderRadius:50,alignSelf:'center',backgroundColor:"#707070"}}>

                    </View>
                    <View style={{height:75,width:75,borderWidth:2,borderColor:'#707070',borderRadius:50}}>

                    </View>



            </View>
            <View style={{width:400,height:50,alignSelf:'center',flexDirection:'row',justifyContent:'space-evenly'}}>
                           <View style={{marginTop:5,right:5}}>
                                <Text style={[styles.milestonename,{color:"#009A12"}]}>Personal {"\n"} Information</Text>
                            </View>
                            <View style={{marginTop:5}}>
                                <Text style={styles.milestonename}>Policy {"\n"} Information</Text>
                            </View>
                            <View style={{marginTop:5,left:10}}>
                                <Text style={styles.milestonename}>Family {"\n"} Information</Text>
                            </View>
            </View>

            <View style={{flex:0.98,width:SCREEN_WIDTH-40,alignSelf:"center",marginTop:10}}>
                <ScrollView style={{flex:0.85,width:SCREEN_WIDTH-40,alignSelf:"center",marginTop:10,zIndex:20}}>
                      <View style={styles.textInputs}>
                     
                      <TextInput style = {[styles.input]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Policy Number"
                        placeholderTextColor = "#003C9A"
                        autoCapitalize = "none"
                        value={policyNum}
                        onChangeText = {(e)=>setPolicyNum(e)}/>
                          
                      </View>
                      <View style={styles.textInputs}>
                     
                      <TextInput style = {[styles.input]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Policy Start Date"
                        placeholderTextColor = "#003C9A"
                        autoCapitalize = "none"
                        keyboardType="numeric"
                        value={policySrtDate}
                        onChangeText = {(e)=>setPolicySrtDate(e)}/>
                          
                      </View>
                      <View style={styles.textInputs}>
                     
                      <TextInput style = {[styles.input]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Policy Maturity Date"
                        placeholderTextColor = "#003C9A"
                        autoCapitalize = "none"
                        value={policyMaturityDate}
                        onChangeText = {(e)=>setPolicyMaturitytDate(e)}/>
                          
                      </View>
                      <View style={styles.textInputs}>
                     
                     <TextInput style = {[styles.input]}
                       underlineColorAndroid = "transparent"
                       placeholder = "Policy Period"
                       placeholderTextColor = "#003C9A"
                       autoCapitalize = "none"
                       value={policyPeriod}
                       onChangeText = {(e)=>setPolicyPeriod(e)}/>
                         
                     </View>
                     <View style={styles.textInputs}>
                     
                     <TextInput style = {[styles.input]}
                       underlineColorAndroid = "transparent"
                       placeholder = "Sum Assured"
                       placeholderTextColor = "#003C9A"
                       autoCapitalize = "none"
                       value={sumAssured}
                       onChangeText = {(e)=>setSumAssured(e)}/>
                         
                     </View>
                     <View style={styles.textInputs}>
                     
                     <TextInput style = {[styles.input]}
                       underlineColorAndroid = "transparent"
                       placeholder = "Premium Mode"
                       placeholderTextColor = "#003C9A"
                       autoCapitalize = "none"
                       value={premiumMode}
                       onChangeText = {(e)=>setPremiumMode(e)}/>
                         
                     </View>
                     <View style={styles.textInputs}>
                     
                     <TextInput style = {[styles.input]}
                       underlineColorAndroid = "transparent"
                       placeholder = "Premium Amount"
                       placeholderTextColor = "#003C9A"
                       autoCapitalize = "none"
                       value={premiumAmount}
                       onChangeText = {(e)=>setPremiumAmount(e)}/>
                         
                     </View>
                     <View style={[styles.textInputs,{marginBottom:10}]}>
                     
                     <TextInput style = {[styles.input]}
                       underlineColorAndroid = "transparent"
                       placeholder = "Table Number"
                       placeholderTextColor = "#003C9A"
                       autoCapitalize = "none"
                       value={tableNum}
                       onChangeText = {(e)=>setTableNum(e)}/>
                         
                     </View>
                     <View style={[styles.textInputs,{marginBottom:10}]}>
                     
                     <TextInput style = {[styles.input]}
                       underlineColorAndroid = "transparent"
                       placeholder = "Term/PPT"
                       placeholderTextColor = "#003C9A"
                       autoCapitalize = "none"
                       value={term}
                       onChangeText = {(e)=>setTerm(e)}/>
                         
                     </View>
                     <View style={[styles.textInputs,{marginBottom:10}]}>
                     
                     <TextInput style = {[styles.input]}
                       underlineColorAndroid = "transparent"
                       placeholder = "Nominee Name"
                       placeholderTextColor = "#003C9A"
                       autoCapitalize = "none"
                       value={nomineeName}
                       onChangeText = {(e)=>setNomineeName(e)}/>
                         
                     </View>
                     <View style={[styles.textInputs,{marginBottom:10}]}>
                     
                     <TextInput style = {[styles.input]}
                       underlineColorAndroid = "transparent"
                       placeholder = "Nominee Relation"
                       placeholderTextColor = "#003C9A"
                       autoCapitalize = "none"
                       value={nomineeRelation}
                       onChangeText = {(e)=>setNomieeRelation(e)}/>
                         
                     </View>
                     

                     
                     
                      
                </ScrollView>
                <View style={{flex:0.15,width:SCREEN_WIDTH-40,alignSelf:"center",justifyContent:'space-between',display:'flex',flexDirection:'row'}}>
                  <TouchableOpacity  onPress={()=>navigation.navigate('AddClientOne')} style={{width:75,padding:10,justifyContent:'center'}}>
                        <Text style={{fontSize:22,fontWeight:'700',textAlign:'center',color:"#003C9A"}}>Prev</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('AddClientThree')} style={{width:75,padding:10,justifyContent:"center"}}>
                        <Text style={{fontSize:22,fontWeight:'700',textAlign:'center',color:"#003C9A"}}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
          
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
  milestoneContainer : {
    height:SCREEN_HEIGHT/5.5,width:SCREEN_WIDTH-40,display:'flex',alignSelf:'center',flexDirection:'row',justifyContent:'center'
  },
  milestoneSection:{
    height:'100%',width:(SCREEN_WIDTH)/3,display:'flex',alignSelf:'center',flexDirection:'row'
  },
  milestoneSection2 :
  {height:'100%',width:(SCREEN_WIDTH)/3-40,display:'flex',alignSelf:'center'},
  circleContainer :{height:'100%',width:(SCREEN_WIDTH)/3-40,display:'flex',alignSelf:'center'},
  circleSection :{height:(SCREEN_WIDTH)/3-40,width:(SCREEN_WIDTH)/3-40,borderRadius:((SCREEN_WIDTH)/3-40)/2,borderWidth:1,borderStyle:'solid'},
  line :{height:2,backgroundColor:'black',width:40,marginTop:((SCREEN_WIDTH)/3-40)/2},
  milestonename:{textAlign:'center',fontSize:16,fontWeight:'700',color:'#003C9A'},
  input: {
    margin: 5,
    height: 40,
    fontSize:18,
    color:'#003C9A',
    borderColor:'transparent',
 },

 textInputs : {borderWidth:1,width:SCREEN_WIDTH/1.2,alignSelf:'center',borderColor:'transparent',
 borderBottomColor: '#707070',paddingLeft:10}

})

export default AddClientScreenTwo

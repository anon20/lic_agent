import React from 'react'
import {View,StyleSheet,Dimensions, Text,TouchableOpacity,TouchableHighlight,ScrollView,FlatList, SafeAreaView} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
function ReminderDescScreen() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{height:SCREEN_HEIGHT/10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <MaterialIcon style={{paddingLeft:20}} name="chevron-left" color="#707070" size={25}/>

                </TouchableOpacity>
                <Text style={{fontSize:28,fontWeight:'bold',color:'#003C9A',paddingLeft:20}}>Reminders</Text>
            </View>
            <View style={{height:SCREEN_HEIGHT/1.2,width:SCREEN_WIDTH-40,alignSelf:'center',elevation:5,backgroundColor:'white',borderRadius:10,alignItems:'center'}}>
                <MaterialIcon style={{marginTop:30}} name="bell"  color="#9A9400" size={64}/>
                <Text style={{fontSize:26,alignSelf:'center',fontWeight:'700',color:'#091527',marginTop:20}}>item.name</Text>
                <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
                    <Text  style={{fontSize:24,color:'#233753',fontWeight:'700',alignSelf:'center'}}>Policy No : </Text>
                    <Text style={{fontSize:22,color:'#233753',fontWeight:'500',
                    alignSelf:'center',paddingTop:5}}>245425</Text>              
                </View>
                <Text style={{fontSize:24,alignSelf:'center',fontWeight:'700',color:'#00189A',marginTop:20}}>Premium Due Date</Text>
                <Text style={{fontSize:24,alignSelf:'center',fontWeight:'700',color:'#934900',marginTop:10}}>Today</Text>
                <Text style={{fontSize:24,alignSelf:'center',fontWeight:'700',color:'#00189A',marginTop:20}}>Premium Amount Due</Text>
                <Text style={{fontSize:24,alignSelf:'center',fontWeight:'700',color:'#233753',marginTop:10}}>₹ 10,000</Text>

                <TouchableOpacity underlayColor='blue' style={styles.addNewBtnContainer} onPress={()=>navigation.navigate('AddReminder')}>
            <View style={styles.addNewClientBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#056E05',paddingLeft:10}}>Collected</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity underlayColor='blue' style={styles.addNewBtnContainer} onPress={()=>navigation.navigate('AddReminder')}>
            <View style={styles.addNewClientBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#6E6605',paddingLeft:10}}>Remind Later</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity underlayColor='blue' style={styles.addNewBtnContainer} onPress={()=>navigation.navigate('AddReminder')}>
            <View style={styles.addNewClientBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#6E0519',paddingLeft:10}}>Mark For Grace</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity underlayColor='blue' style={styles.addNewBtnContainer} onPress={()=>navigation.navigate('AddReminder')}>
            <View style={styles.addNewClientBtn}>
                     <MaterialIcon name="plus-circle" color="#707070" size={30}/>
                     <Text style={{fontSize:24,fontWeight:'bold',color:'#DB0101',paddingLeft:10}}>Cancel Policy</Text>
            </View>
            </TouchableOpacity>
            </View>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
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
        marginTop:15,
        borderWidth:0.5,
        borderColor:'#003C9A',
        borderRadius:10},
})
export default ReminderDescScreen

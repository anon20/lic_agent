import React,{useState} from 'react';
import { View,TextInput, Text,StyleSheet,Dimensions,Image,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTabs from '../components/HomeTabs';
import ProgressCircle from 'react-native-progress-circle'
import {COLORS} from '../assets/Colors/Colors';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const HomeScreen = ({navigation}) => {

  
    const handleNavigation = () => {
        navigation.navigate('Notes')
    }

    return (
        <View style={{ flex: 1,
          backgroundColor:'white'}}>
            <View style={styles.username_container}>
                <Text style={{fontSize:22,fontWeight:'700',alignSelf:'center',paddingLeft:20,color:'#003C9A'}}>
                    Naveen Goyal
                </Text>
                <Text  style={{fontSize:18,fontWeight:'700',alignSelf:'center',paddingRight:20}}>
                    1746
                </Text>
            </View>

            <View style={styles.usertarget_container}>
                <View style={{flex:0.6}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{fontSize:24,fontWeight:'bold',paddingLeft:20}}>My Goal</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:16,paddingLeft:20}}>Achieved : Rs 500000</Text>
                        <Text style={{fontSize:16,paddingLeft:20}}>Pending : Rs 500000</Text>
                    </View>
                </View>
                <View  style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
                     <ProgressCircle
                        percent={80}
                        radius={SCREEN_HEIGHT/16}
                        borderWidth={7}
                        color={COLORS.PROGRESS_BAR_GREEN}
                        shadowColor={COLORS.PROGRESS_BAR_SHADOW}
                        bgColor="#fff"
                    >
                        <Text><Text style={{fontSize:24}}>80</Text> %</Text>
                        <Text style={{ fontSize: 10 }}>progress</Text>
                    </ProgressCircle>
                </View>
            </View>

            <ScrollView style={{marginTop:10}}>
              <View style={styles.tabsContainer}>

                <HomeTabs 
                    tabTitle="Clients"
                    tabIcon="user"
                    tabCenterTextF="200" 
                    tabCenterTextS="people"
                    tabBgColor={COLORS.HOME_LIGHT_RED}
                    tabBottomText="view"
                    
                    />
                <HomeTabs 
                    tabTitle="Reminders"
                    tabIcon="bell"
                    secondLine="true"
                    tabCenterTextF="10" 
                    tabCenterTextS="upcoming"
                    secondTabCenterTextF="2" 
                    secondTabCenterTextS="on grace period"
                    tabBgColor={COLORS.HOME_PURPLE}
                    tabBottomText="catch up"
                
                />    
                 <HomeTabs 
                    tabTitle="Greetings"
                    tabIcon="gift"
                    tabCenterTextF="2" 
                    tabCenterTextS="upcoming"
                    tabBgColor={COLORS.HOME_LIGHT_BLUE}
                    tabBottomText="anniversaries"
                    
                    />
                  <HomeTabs 
                    tabTitle="Documents"
                    tabIcon="list"
                    tabCenterTextF="10" 
                    tabCenterTextS="documents"
                    tabBgColor={COLORS.HOME_LIGHT_ORANGE}
                    tabBottomText="download"
                    
                    />   
                
                <HomeTabs 
                    tabTitle="LIC Agent"
                    tabIcon="male"
                    tabCenterTextF="15" 
                    tabCenterTextS="documents"
                    tabBgColor={COLORS.HOME_LIGHT_GREEN}
                    tabBottomText="information"
                    
                    />   
                 <HomeTabs 
                    tabTitle="Notes"
                    tabIcon="edit"
                    onClick={handleNavigation}
                    tabCenterTextF="6" 
                    tabCenterTextS="notes"
                    tabBgColor={COLORS.HOME_DARK_BLUE}
                    tabBottomText="take notes"
                    
                    />   
                 <HomeTabs 
                    tabTitle="Growth"
                    tabIcon="signal"
                    tabCenterTextF="5 %" 
                    tabCenterTextS="this month"
                    tabBgColor={COLORS.HOME_DARK_ORANGE}
                    tabBottomText="my growth"
                    
                    />   
                 <HomeTabs 
                    tabTitle="Calculator"
                    tabIcon="calculator"
                    tabCenterTextF="210" 
                    tabCenterTextS="premium"
                    tabBgColor={COLORS.HOME_DARK_RED}
                    tabBottomText="calculate"
                    
                    />   
                
               </View> 
            </ScrollView>
        </View>
      );
}



const styles = StyleSheet.create({
 
 username_container : {
    height:SCREEN_HEIGHT/9,
    width:SCREEN_WIDTH-60,
    alignSelf:'center',
    backgroundColor:COLORS.BLUE_GRAY,
    marginTop:20,
    borderRadius:1000,
    elevation:15,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    textAlign:'center'
    

 },

 usertarget_container : {
    height:SCREEN_HEIGHT/6,
    width:SCREEN_WIDTH-60,
    display:'flex',
    flexDirection:"row",
    alignSelf:'center',
    backgroundColor:COLORS.WHITE,
    marginTop:20,
    borderRadius:20,
    elevation:15
 },
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



export default HomeScreen;
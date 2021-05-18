import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SubTitle, MainTitle} from 'components/AuthTitles.js';
import SubmitBtn from 'components/SubmitBtn.js';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import emailIcon from 'assets/images/email.png';
import * as Animatable from 'react-native-animatable';
import {RotationGestureHandler} from 'react-native-gesture-handler';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const SetLanguageScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [selectedLang,setSelectedLang] = React.useState(0)
  const loginHandler = () => {
    navigation.navigate('Home');
  };

  const LanguageTabs = [
    {'language':'english','desc':'You are reading this in english'},
    {'language':'Hindi','desc':'You are reading this in english'},
    {'language':'Punjabi','desc':'You are reading this in english'},
    {'language':'Telugu','desc':'You are reading this in english'},
    {'language':'Malyalam','desc':'You are reading this in english'},
    {'language':'Tamil','desc':'You are reading this in english'},
    
    {'language':'Malyalam','desc':'You are reading this in english'},
    {'language':'Tamil','desc':'You are reading this in english'},
  
  ]
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.lowerSection}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View>
	    <MainTitle titleText={"Choose Your Language"} />
	    <SubTitle titleText={"Select the Language in which you want to use the App"} />
          </View>
        </View>
        <ScrollView
          style={{flex:1,alignSelf:'center',paddingTop:20}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap',paddingBottom:50}}>

              {LanguageTabs.map((item,key)=>{
                return (
                  <TouchableOpacity key={key} style={styles.languages} onPress={()=>setSelectedLang(key)}>
                  <View style={{height:'100%',width:'90%',alignSelf:'center'}}>
                      <View style={{marginTop:5,height:25}}>
                      {selectedLang==key?  <Image style={{height:25,width:25,alignSelf:'flex-end'}} source={require('assets/images/check-mark.png')} /> : <></>}
                      </View>
                      <View style={{marginTop:5}}>
                        <Text style={{fontSize:22,fontWeight:'700'}}>{item.language}</Text>
                        <Text style={{fontSize:16,fontWeight:'500',marginTop:5,opacity:0.5}}>{item.desc}</Text>
                      </View>
                  </View>
              </TouchableOpacity>
                )
              })}
            </View>
        </ScrollView>
      </View>
	    <View style={{flex:0.1,width:'90%', marginTop:10, alignSelf:'center'}}>
		<SubmitBtn submitText={"Continue"} callbackFunc={() => {navigation.navigate('SetupBio')}} theme={"#EFB14E"}/>
	</View>
      <View style={styles.termsContainer}>
        <Text style={{textAlign:"center",fontSize:18,width:'90%',alignSelf:'center',marginTop:10}}>
          By Continuing you agree to our <Text style={{fontWeight:'700',color:'#EFB14E'}}>Terms of Use</Text>  and 
          <Text style={{fontWeight:'700',color:'#EFB14E'}}> Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  termsContainer: {
    height: 120,
    width: SCREEN_WIDTH,
    flex:0.1,
    marginTop:15
  },
  lowerSection: {
    display: 'flex',
    flex: 0.8,
    marginTop: 50,
  },
  languages : {
    height:170,
    width:170,
    backgroundColor:'white',
    shadowOffset: {
        width: 1,
        height: 3,
    },
    shadowColor: "#EFB14E",
    overflow:'visible',
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation:3,
    borderRadius:10,
    shadowRadius:5,
    marginTop:10
  },
  intro: {
    fontSize: 28,
    fontWeight: '700',
    color: 'black',
    // fontFamily:'AndikaNewBasic-Bold'
  },
  email: {
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 10,
  },

  textbox: {
    height: 50,
    marginTop: 15,
    borderRadius: 100,
    backgroundColor: 'white',
    elevation: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderColor: 'transparent',
  },

  loginBtn: {
    height: 50,
    backgroundColor: '#EFB14E',
    elevation: 10,
    borderRadius: 100,
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  loginBtnText: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '700',
    borderWidth: 0.5,
    borderColor: 'transparent',
    color: 'white',
  },

  password: {
    fontSize: 18,
    paddingLeft: 10,

    fontWeight: '700',
    borderColor: 'gray',
  },
});

export default SetLanguageScreen;

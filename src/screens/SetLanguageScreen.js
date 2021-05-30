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
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import emailIcon from '../assets/images/email.png';
import * as Animatable from 'react-native-animatable';
import {RotationGestureHandler} from 'react-native-gesture-handler';
import {LangContext} from '../contextApi/Language.js'
import Language from '../assets/language/texts.json'
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const SetLanguageScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [selectedLang,setSelectedLang] = React.useState(0)
  const {changeLang,setLang,lang} = React.useContext(LangContext)
  const loginHandler = () => {
    navigation.navigate('Home');
  };

 const selectLanguage = (lang,key) => {
    setSelectedLang(key)
    changeLang(lang)
 }
  const LanguageTabs = [
    {'language':'english','desc':'You are reading this in english','symbol':'en'},
    {'language':'Hindi','desc':'You are reading this in english','symbol':'hi'},
    {'language':'Punjabi','desc':'You are reading this in english','symbol':'pnb'},
    {'language':'Telugu','desc':'You are reading this in english','symbol':'tel'},
    {'language':'Malyalam','desc':'You are reading this in english','symbol':'mal'},
    {'language':'Tamil','desc':'You are reading this in english','symbol':'tam'},
    
    {'language':'Malyalam','desc':'You are reading this in english','symbol':'mal'},
    {'language':'Tamil','desc':'You are reading this in english','symbol':'tam'},
  
  ]
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.lowerSection}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View>
            <Text style={{fontSize: 32, fontWeight: '500'}}>
              Choose Your Language
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: 'black',
                opacity: 0.5,
                marginTop: 5,
              }}>
              Select the Language in which you want to use the application
            </Text>
          </View>
        </View>
        <ScrollView
          style={{flex:1,width:'80%',alignSelf:'center',paddingTop:20}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap',paddingBottom:50}}>

              {LanguageTabs.map((item,key)=>{
                return (
                  <TouchableOpacity key={key} style={styles.languages} onPress={()=>selectLanguage(item.symbol,key)}>
                  <View style={{height:'100%',width:'90%',alignSelf:'center'}}>
                      <View style={{marginTop:5,height:25}}>
                      {selectedLang==key?  <Image style={{height:25,width:25,alignSelf:'flex-end'}} source={require('../assets/images/check-mark.png')} /> : <></>}
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
      <View style={styles.termsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SetupBio');
          }}
          style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>{Language.continue[lang]}</Text>
        </TouchableOpacity>

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
    marginTop:15
  },
  lowerSection: {
    display: 'flex',
    flex: 1,
    marginTop: 50,
  },
  languages : {
    height:150,
    width:150,
    backgroundColor:'white',
    elevation:5,
    borderRadius:10,
    borderWidth:1.5,
    borderColor: '#EFB14E',
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

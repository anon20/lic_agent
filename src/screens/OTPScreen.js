import React,{useState} from 'react';
import { View,TextInput, Text,StyleSheet,Dimensions,Image,TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import emailIcon from 'assets/images/email.png';
import * as Animatable from 'react-native-animatable';
import { RotationGestureHandler } from 'react-native-gesture-handler';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import PasswordImg from 'assets/images/password.png';


const OTPScreen = ({navigation}) => {

  const [otp, setOtp] = React.useState('');
  const [password, setPassword] = React.useState('');

    
  const loginHandler = () => {
    navigation.navigate('Home')
  }

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:"white"}}>
         <Animatable.View 
            animation="fadeInDown"
             style={styles.upperSection}>
          
          </Animatable.View>

          <View 
            style={styles.lowerSection}>
            <View style={{width:'90%',alignSelf:'center'}}>
              <View>
                <Text style={{fontSize:32,fontWeight:'500'}}>OTP</Text>
                <Text style={{fontSize:16,fontWeight:'500',color:'black',opacity:0.5,marginTop:5}}>
                Enter One Time Passcode received on your phone
                </Text>
              </View>
		<InputView img={PasswordImg} textType={"Enter OTP"}/>	
              
            </View>
              <TouchableOpacity
                onPress={()=>navigation.navigate('SignUp')}
                style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>Continue</Text>
              </TouchableOpacity>

              </View>
              <Animatable.View 
              animation="fadeInUp" 
              style={styles.upperSectionRight}>
          
             </Animatable.View>
        </SafeAreaView>
      );
}



const styles = StyleSheet.create({
  upperSection:{
    height:100,
    width:100,
    borderBottomEndRadius:100,
    justifyContent:'center',
    backgroundColor:'#EFB14E',
    elevation:5,
    
  },
  upperSectionRight:{
    height:100,
    width:100,
    borderTopStartRadius:100,
    justifyContent:'center',
    backgroundColor:'#EFB14E',
    alignSelf:'flex-end',
    elevation:5
  },
  lowerSection :{
    height:SCREEN_HEIGHT-220,
    display:'flex',
    justifyContent:'center'
  },
  intro :{
    fontSize:28,
    fontWeight:'700',
    color:'black',
    // fontFamily:'AndikaNewBasic-Bold'
  },
  email: {
    fontSize:18,
    fontWeight:'700',
    paddingLeft:10
   },

  textbox: { height: 50,
    marginTop:15,
    borderRadius:100,
   backgroundColor:'white',
    elevation:5,
   borderColor: 'gray', 
   borderWidth: 0.5,
  borderColor:'transparent' },

  loginBtn: {
    height: 50,
    backgroundColor:'#EFB14E',
    elevation: 10,
    marginTop: 20,
    borderRadius: 100,
    justifyContent: 'center',
    width:'90%',
    alignSelf:'center'
  },
  loginBtnText: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '700',
    borderWidth: 0.5,
    borderColor: 'transparent',
    color: 'white',
  },

  password :{ 
    fontSize:18,
    paddingLeft:10,
    
    fontWeight:'700',
    borderColor: 'gray', 
   },

})



export default OTPScreen;

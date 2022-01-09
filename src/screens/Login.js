import React, {useState, useEffect} from 'react';
import {Dimensions, Alert, ToastAndroid, Platform, Image,TextInput, View, Text, SafeAreaView,TouchableOpacity, StyleSheet} from 'react-native';
import Email from 'assets/images/email.png';
import Phone from 'assets/images/phone-call.png';
import Pass from 'assets/images/password.png'
import InputView from 'components/InputView.js';
import SubmitBtn from 'components/SubmitBtn.js';
import GoogleLogo from 'assets/images/google.png';
import SideViews from 'components/SideViews.js';
import auth from '@react-native-firebase/auth';
import {loginUser} from 'APIs/login';

const settings = auth().settings;
console.log(settings.appVerificationDisabledForTesting);


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default props => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [otp, setOtp] = React.useState('');
  const [password, setPassword] = React.useState('');
  const authenticateOTP = async() => {
	try{
	    await confirmation.confirm(otp, phoneNumber);
	    auth().currentUser.getIdToken()
	    .then(resp => {
	    	loginUser(resp, phoneNumber)
	    	.then(resp => {
	    		console.log(resp)
	    	})
	    })
	}
	catch(err){
	    console.log(err);
	}
  }	 	
  const authenticatePhone = async() => {
      try{
          const conf = await auth().signInWithPhoneNumber(phoneNumber)
          setConfirmation(conf);
          /* props.navigation.navigate('OTP', {confirmOTP:confirmation.confirm, phoneNumber:phoneNumber}); */
      }
      catch(e)
      {
          if(Platform.OS === "android")
      	ToastAndroid.show("Invalid Phone Number!", ToastAndroid.SHORT);
          else
      	Alert.alert("Inavlid Phone Number!");
      }
  }
    return (
	    <SafeAreaView style={[styles.parentView]}>
	    <SideViews />
	    <View style={[styles.logoView]}>
	    {/* Logo will be attached here */}
	    </View>
	    <View style={[styles.loginArea]}>
	    <View style={[styles.singleFlex, {flex: 0.13}]}>
	    <Text style={[styles.titleText, styles.customFont]}>{!confirmation?'Login':'OTP Verification'}</Text>
	    </View>
	    <View style={[styles.singleFlex]}>
	    <Text style={[styles.subTitleText, styles.customFont]}>{!confirmation?'Sign In to Continue':'Enter One Time Passcode received on your phone'}</Text>
	    </View>
	    <View style={[{flex:0.20}]}>
	    	{confirmation ?
	    	   <InputView setInput={setOtp} value={otp} img={Pass} textType={"OTP"} keyboardType={"number-pad"}/>:
	    	   <InputView setInput={setPhoneNumber} img={Phone} textType={"Phone"} value={phoneNumber} keyboardType={"number-pad"}/>	
		}
	    </View>
	    <View style={[{flex:0.15}]}>
	    {confirmation ?
	    	<SubmitBtn callbackFunc={authenticateOTP} submitText={"Verify"} theme={"#EFB14E"} /> :
		<SubmitBtn callbackFunc={authenticatePhone} submitText={"Continue"} theme={"#EFB14E"} />
	    }
	    </View>
    </View>
    </SafeAreaView>
    )
    }

const styles = StyleSheet.create({
parentView:{
flex:1
},
singleFlex:{
flex:0.1
},
logoView:{
flex:0.35
},	
loginArea:{
flex:0.65,
width:'90%',
marginLeft:'5%',
},
customFont:{
fontFamily:'PTSans-Regular',
},
titleText:{
fontSize:40,
},
emailInputView:{
backgroundColor:'white',
		shadowOffset: {
width: 0,
       height: 2,
		},
shadowColor: "#000",
	     overflow:'visible',
	     shadowOpacity: 0.2,
	     shadowRadius: 2.22,
	     elevation:3,
	     borderRadius:100,
	     flexDirection:'row',
	     zIndex:20
	       },
subTitleText:{
fontSize:18,
	 color:'grey'
	     }
});

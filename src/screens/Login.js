import React, {useState, useEffect} from 'react';
import {Dimensions, Image,TextInput, View, Text, SafeAreaView,TouchableOpacity, StyleSheet} from 'react-native';
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
	const [confirmationCode, setConfirmationCode] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [smsSent, setSmsSent] = useState(false);
	const [verificationCode, setVerificationCode] = useState('');
	const authenticatePhone = async() => {
		if(!smsSent)
		{
			const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
			setSmsSent(confirmation);
			setPhoneNumber('');
		}
		else
		{
			console.log(`verifying phone`);
			try{
				await smsSent.confirm(verificationCode);
				alert(`User Authenticated`);
				console.log(auth().currentUser.uid);
				loginUser(auth().currentUser.uid, '345345')
					.then(resp => {
					alert(resp)
							})
			}
			catch(err){
				console.log(err);
			}
		}	 	
	}
	const verifyPhone = async () => {
		console.log(`verifying phone`);
		try{
			await smsSent.confirm(confirmationCode);
			alert(`User Authenticated`);
		}
		catch(err){
			console.log(`error`);
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
					<Text style={[styles.titleText, styles.customFont]}>{smsSent?'Verification':'Login'}</Text>
				</View>
				<View style={[styles.singleFlex]}>
					<Text style={[styles.subTitleText, styles.customFont]}>{smsSent?'Enter One Time Password Sent On Your Phone via SMS':'Sign in to Continue'}</Text>
				</View>
				<View style={[{flex:0.20}]}>
					{smsSent?<InputView setInput={setVerificationCode} value={verificationCode} img={Pass} textType={"OTP"} keyboardType={"number-pad"}/>	:
					<InputView setInput={setPhoneNumber} img={Phone} textType={"Phone"} value={phoneNumber} keyboardType={"number-pad"}/>	}
				</View>
				<View style={[{flex:0.15}]}>
					{smsSent ?<SubmitBtn callbackFunc={() => authenticatePhone(verifyPhone)} submitText={"Verify"} theme={"#EFB14E"} /> : <SubmitBtn callbackFunc={() => authenticatePhone(phoneNumber)} submitText={"Continue"} theme={"#EFB14E"} />}
				</View>
				{/*}<View style={[{flex:0.2, alignItems:'center'}]}>
					<Text style={[styles.titleText, styles.customFont]}>or</Text>
				</View>
				<View style={[styles.singleFlex, {alignItems:'center'}]}>
					<TouchableOpacity >
						<Image 
							source={GoogleLogo}
							style={{width:70, height:70}}
						/>
					</TouchableOpacity>
				</View>*/}
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

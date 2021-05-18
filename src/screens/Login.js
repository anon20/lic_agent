import React from 'react';
import {Dimensions, Image,TextInput, View, Text, SafeAreaView,TouchableOpacity, StyleSheet} from 'react-native';
import Email from 'assets/images/email.png';
import InputView from 'components/InputView.js';
import SubmitBtn from 'components/SubmitBtn.js';
import GoogleLogo from 'assets/images/google.png';
import SideViews from 'components/SideViews.js';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default props => {
	return (
		<SafeAreaView style={[styles.parentView]}>
			<SideViews />
			<View style={[styles.logoView]}>
				{/* Logo will be attached here */}
			</View>
			<View style={[styles.loginArea]}>
				<View style={[styles.singleFlex]}>
					<Text style={[styles.titleText, styles.customFont]}>Login</Text>
				</View>
				<View style={[styles.singleFlex]}>
					<Text style={[styles.subTitleText, styles.customFont]}>Sign in to Continue</Text>
				</View>
				<View style={[{flex:0.20}]}>
					<InputView img={Email} textType={"Email"}/>	
				</View>
				<View style={[{flex:0.15}]}>
					<SubmitBtn submitText={"Continue"} theme={"#EFB14E"} />
				</View>
				<View style={[{flex:0.2, alignItems:'center'}]}>
					<Text style={[styles.titleText, styles.customFont]}>or</Text>
				</View>
				<View style={[styles.singleFlex, {alignItems:'center'}]}>
					<TouchableOpacity>
						<Image 
							source={GoogleLogo}
							style={{width:70, height:70}}
						/>
					</TouchableOpacity>
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

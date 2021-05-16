import React from 'react';
import {Dimensions, Image,TextInput, View, Text, SafeAreaView,TouchableOpacity, StyleSheet} from 'react-native';
import Email from '../assets/images/email.png';
import InputView from '../components/InputView.js';
import SubmitBtn from '../components/SubmitBtn.js';
import GoogleLogo from '../assets/images/google.png';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import * as Animatable from 'react-native-animatable';

export const SideViews2 = props => {
	return (
		
		<>
			<View animation="fadeInUp" style={{position:'absolute', backgroundColor:'#F0956B', borderRadius:40, height:150, marginTop:-90, zIndex:-1, marginLeft:width-110, width:190, transform:[{rotate:'-45deg'}]}}>
			</View>
			<View animation="fadeInUp" style={{position:'absolute', backgroundColor:'#F0956B', borderRadius:40, height:150, marginTop:height-50, zIndex:-1, marginLeft:-70, width:190, transform:[{rotate:'-45deg'}]}}>
			</View>
		</>
	)
}

export default props => {
	return (
		
		<>
			<View animation="fadeInUp" style={{position:'absolute', backgroundColor:'#EFB14E', borderRadius:40, height:150, marginTop:-60, zIndex:-1, marginLeft:-90, width:190, transform:[{rotate:'45deg'}]}}>
			</View>
			<View animation="fadeInUp" style={{position:'absolute', backgroundColor:'#EFB14E', borderRadius:40, height:150, marginTop:height-80, zIndex:-1, marginLeft:width-90, width:190, transform:[{rotate:'50deg'}]}}>
			</View>
		</>
	)
}


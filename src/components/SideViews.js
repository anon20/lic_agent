import React from 'react';
import {Dimensions, Image,TextInput, View, Text, SafeAreaView,TouchableOpacity, StyleSheet} from 'react-native';
import Email from '../assets/images/email.png';
import InputView from '../components/InputView.js';
import SubmitBtn from '../components/SubmitBtn.js';
import GoogleLogo from '../assets/images/google.png';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default props => {
	return (
		
		<>
			<View style={{position:'absolute', backgroundColor:'#EFB14E', borderRadius:40, height:150, marginTop:-60, zIndex:-1, marginLeft:-90, width:190, transform:[{rotate:'50deg'}]}}>
			</View>
			<View style={{position:'absolute', backgroundColor:'#EFB14E', borderRadius:40, height:150, marginTop:height-80, zIndex:-1, marginLeft:width-90, width:190, transform:[{rotate:'50deg'}]}}>
			</View>
		</>
	)
}


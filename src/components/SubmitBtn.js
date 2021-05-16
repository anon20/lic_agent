import React from 'react';
import {Image,TextInput, TouchableOpacity, View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Email from '../assets/images/email.png';
import InputView from '../components/InputView.js';

export default props => {
	return (
		<View style={{flex:1, alignItems:'center'}}>
			<TouchableOpacity style={[styles.btnStyle]}>
				<Text style={[styles.btnTextStyle]}>{props.submitText}</Text>
			</TouchableOpacity>
			
		</View>
	);
};

const styles = StyleSheet.create({
	btnStyle:{
		backgroundColor:'#EFB14E',
		borderRadius:100,
		alignItems:'center',
		width:'40%',
	},
	btnTextStyle:{
		padding:15,
		color:'white',
		fontFamily:'PTSans-Regular',
		fontSize:20
	}
});

import React from 'react';
import {Image,TextInput, TouchableOpacity, View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Email from 'assets/images/email.png';
import InputView from 'components/InputView.js';

export default props => {
	return (
		<View style={{flex:1, alignItems:'center'}}>
			<TouchableOpacity onPress={props.callbackFunc} style={[styles.btnStyle, {backgroundColor:props.theme}]}>
				<Text style={[styles.btnTextStyle]}>{props.submitText}</Text>
			</TouchableOpacity>
			
		</View>
	);
};

const styles = StyleSheet.create({
	btnStyle:{
		
		borderRadius:100,
		alignItems:'center',
		width:'100%',
	},
	btnTextStyle:{
		padding:15,
		color:'white',
		fontFamily:'PTSans-Regular',
		fontSize:20
	}
});


import React from 'react';
import {Image,TextInput, View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Email from 'assets/images/email.png';

export default props => {
	return (
		<View style={[styles.emailInputView]}>
			<View style={[{flex:0.1, height:50, alignItems:'center', justifyContent:'center'}]}>
				<Image 
					source={props.img}
					style={{marginLeft:20, width:20, height:20}}
				/>
			</View>
			<View style={[{flex:0.9}]}>
				<TextInput  
					style={[{justifyContent:'center', fontSize:14, padding:20}]}
					placeholder={"Email"}
					keyboardType={"email-address"}
		
				/>
			</View>
		</View>
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

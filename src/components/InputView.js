
import React, {useState, useEffect} from 'react';
import {Image,TextInput, View, StyleSheet} from 'react-native';

export default props => {
	return (
		<View style={[styles.InputView]}>
			<View style={[styles.ImageView]}>
				<Image 
					source={props.img}
					style={[styles.imageStyle]}
				/>
			</View>
			<View style={[{flex:0.9}]}>
				<TextInput  
					style={[styles.textInputStyle]}
					value={props.value}
		onChangeText={input=>props.setInput(input)}
					placeholder={props.textType}
					keyboardType={props.keyboardType}
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
	InputView:{
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
	},
	ImageView:{
		flex:0.1, 
		height:50, 
		alignItems:'center', 
		justifyContent:'center', 
		alignSelf: "center"
	},
	textInputStyle:{
		justifyContent:'center', 
		fontSize:14, 
		padding:20
	},
	imageStyle:{
		marginLeft:20, 
		width:20, 
		height:20
	}
});

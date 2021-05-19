import React, { useState } from "react";
import SubmitBtn from 'components/SubmitBtn';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import emailIcon from "assets/images/email.png";
import * as Animatable from "react-native-animatable";
import { RotationGestureHandler } from "react-native-gesture-handler";
import {SideViews2} from 'components/SideViews.js';
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export const SubTitle = props => {
	return (
            <Text style={[styles.subTitle]}>
		{props.titleText}
            </Text>
	);
}
export const MainTitle = props => {
	return (
            <Text style={[styles.mainTitle]}>
              {props.titleText}
            </Text>
	);
}

const styles = StyleSheet.create({
  mainTitle : {
    fontSize: 32, 
    fontWeight: "500", 
    fontFamily:'PTSans-Regular' 
  },
  subTitle:{
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    opacity: 0.5,
    marginTop: 5,
    fontFamily:'PTSans-Regular'
  },
});

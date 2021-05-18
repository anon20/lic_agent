import React, { useState } from "react";
import SubmitBtn from 'components/SubmitBtn';
import {SubTitle, MainTitle} from 'components/AuthTitles.js';
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

const SetupBioScreen = ({ navigation }) => {

  const loginHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
	<SideViews2 />
      <View style={styles.lowerSection}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View>
	    <MainTitle titleText={"Setup BioMetric"} />
	    <SubTitle titleText={"Touch the fingerprint Sensor"} />
          </View>
         
         <View style={{marginTop:40,marginBottom:40}}>
           <Image style={{height:125,width:125,alignSelf:'center'}} source={require('assets/images/fingerprint.png')} />
         </View>
         
        </View>
      </View>
	<View style={{flex:1, width:'90%', alignSelf:'center'}}>
	<SubmitBtn submitText={"Continue"} callbackFunc={loginHandler} theme={"#F0956B"}/>
	</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upperSection: {
    height: 100,
    width: 100,
    borderBottomStartRadius: 100,
    justifyContent: "center",
    backgroundColor: "#F0956B",
    alignSelf: "flex-end",
    elevation: 5,
  },
  upperSectionRight: {
    height: 100,
    width: 100,
    borderTopEndRadius: 100,
    justifyContent: "center",
    backgroundColor: "#F0956B",
    elevation: 5,
  },
  lowerSection: {
    height: SCREEN_HEIGHT - 220,
    display: "flex",
    justifyContent: "center",
  },
  intro: {
    fontSize: 28,
    fontWeight: "700",
    color: "black",
  },
  email: {
    fontSize: 18,
    fontWeight: "700",
    paddingLeft: 10,
  },

  subTitle:{
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    opacity: 0.5,
    marginTop: 5,
    fontFamily:'PTSans-Regular'
  },
  textbox: {
    height: 50,
    marginTop: 15,
    borderRadius: 100,
    backgroundColor: "white",
    elevation: 5,
    borderColor: "gray",
    borderWidth: 0.5,
    borderColor: "transparent",
  },

  password: {
    fontSize: 18,
    paddingLeft: 10,

    fontWeight: "700",
    borderColor: "gray",
  },
});

export default SetupBioScreen;

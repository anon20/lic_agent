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

const ContBioScreen = ({ navigation }) => {

  const loginHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
	<SideViews2 />
      <View style={styles.lowerSection}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View>
            <Text style={{ fontSize: 32, fontWeight: "500" }}>
              Continue with Biometric
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "black",
                opacity: 0.5,
                marginTop: 5,
              }}
            >
              Touch the Fingerprint Sensor
            </Text>
          </View>
         
         <View style={{marginTop:20,marginBottom:20}}>
           <Image style={{height:125,width:125,alignSelf:'center'}} source={require('assets/images/fingerprint.png')} />
         </View>
         
        </View>
	<SubmitBtn submitText={"Continue"} theme={"#F0956B"}/>

        <Text style={{fontWeight:'700',fontSize:22,textAlign:'center',marginTop:20}}>OR</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ContPasscode");
          }}
        >
          <Text style={{fontWeight:'700',fontSize:24,textAlign:'center',marginTop:20}}>Continue with Passcode</Text>
        </TouchableOpacity>
      </View>
      <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
         
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
    // fontFamily:'AndikaNewBasic-Bold'
  },
  email: {
    fontSize: 18,
    fontWeight: "700",
    paddingLeft: 10,
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

export default ContBioScreen;

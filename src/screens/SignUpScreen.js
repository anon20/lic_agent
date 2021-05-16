import React, { useState } from "react";
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
import emailIcon from "../assets/images/email.png";
import * as Animatable from "react-native-animatable";
import { RotationGestureHandler } from "react-native-gesture-handler";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [gender, setGender] = React.useState("");

  const loginHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Animatable.View
        animation="fadeInDown"
        style={styles.upperSection}
      ></Animatable.View>

      <View style={styles.lowerSection}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View>
            <Text style={{ fontSize: 32, fontWeight: "500" }}>
              Let us know you
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
              You may skip this section
            </Text>
          </View>
          <View style={[{ flexDirection: "row" }, styles.textbox]}>
            <View
              style={{ flex: 0.1, justifyContent: "center", paddingLeft: 10 }}
            >
              {/* <MaterialIcon style={{alignSelf:'center'}} name="{"email" size={20}/> */}
              <Image
                style={{ alignSelf: "center", height: 20, width: 20 }}
                height={20}
                width={20}
                source={require("../assets/images/name.png")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.email}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="Full Name"
              />
            </View>
          </View>
          <View style={[{ flexDirection: "row" }, styles.textbox]}>
            <View
              style={{ flex: 0.1, justifyContent: "center", paddingLeft: 10 }}
            >
              {/* <MaterialIcon style={{alignSelf:'center'}} name="{"email" size={20}/> */}
              <Image
                style={{ alignSelf: "center", height: 20, width: 20 }}
                height={20}
                width={20}
                source={require("../assets/images/birthday-cake.png")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.email}
                onChangeText={(text) => setDob(text)}
                value={dob}
                placeholder="Date of Birth"
              />
            </View>
          </View>
          <View style={[{ flexDirection: "row" }, styles.textbox]}>
            <View
              style={{ flex: 0.1, justifyContent: "center", paddingLeft: 10 }}
            >
              {/* <MaterialIcon style={{alignSelf:'center'}} name="{"email" size={20}/> */}
              <Image
                style={{ alignSelf: "center", height: 20, width: 20 }}
                height={20}
                width={20}
                source={require("../assets/images/gender-symbols.png")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.email}
                onChangeText={(text) => setGender(text)}
                value={gender}
                placeholder="Gender"
              />
            </View>
          </View>
         
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SetPassword");
          }}
          style={styles.loginBtn}
        >
          <Text style={styles.loginBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
        <Animatable.View
          animation="fadeInUp"
          style={styles.upperSectionRight}
        ></Animatable.View>
         <TouchableOpacity style={{display:'flex',justifyContent:'center',marginRight:20}}>
                 <Image style={{alignSelf:'center',height:45,width:45}} height={45} width={45} source={require('../assets/images/right-arrow.png')} />
                 <Text style={{fontSize:18,fontWeight:'500',textAlign:'center'}}>Skip</Text>
            </TouchableOpacity>
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

  loginBtn: {
    height: 50,
    backgroundColor: "#F0956B",
    elevation: 10,
    marginTop: 20,
    borderRadius: 100,
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
  },
  loginBtnText: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "700",
    borderWidth: 0.5,
    borderColor: "transparent",
    color: "white",
  },

  password: {
    fontSize: 18,
    paddingLeft: 10,

    fontWeight: "700",
    borderColor: "gray",
  },
});

export default SignUpScreen;

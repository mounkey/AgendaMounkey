import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { Boton } from "./components/index";
import Color from "./constanst/color";
import { StatusBar } from "expo-status-bar";

export default function index() {
  // useState
  /* eslint-disable react-hooks/rules-of-hooks */
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  // onChange
  const onChangeMail = (text) => {
    setMail(text);
  };
  const onChangePass = (text) => {
    setPass(text);
  };
  // onPress
  const onPress = () => {
    console.log(setMail);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logos.png")} />
      <View style={styles.containerInPut}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="mail"
          value={mail}
          onChange={onChangeMail}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="pass"
          value={pass}
          onChange={onChangePass}
        />
        <Boton title="Login" bkcolor={Color.primary} color={Color.white} onPress={onPress} />
      </View>
      <Image style={styles.foot} source={require("../assets/pielogo.png")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 176,
    height: 221,
    marginBottom: 10,
  },
  text: {
    color: Color.white,
    fontSize: 40,
    fontWeight: "bold",
    paddingTop: -10,
    paddingBottom: 30,
  },
  containerInPut: {
    marginTop: 15,
    width: "80%",
    height: 250,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginVertical: 15,
  },

  foot: {
    alignItems: "center",
  },
  TextInput: {
    width: "90%",
    height: 25,
    backgroundColor: Color.white,
    placeholderTextColor: Color.black,
    fontSize: 20,
    alignItems: "flex-start",
    borderRadius: 10,
    paddingLeft: 15,
    marginVertical: 3,
  },
});
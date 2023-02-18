import { Boton, HLogo, PostHeader } from "../../components/index";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import Color from "../../constanst/color";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function DetailsActivities({ route, navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <HLogo />
      <PostHeader section="Act" />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
  },

  containerInPut: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
  },

  containerInPut2: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    color: Color.primary,
    fontWeight: "bold",
    margin: 10,
  },
});

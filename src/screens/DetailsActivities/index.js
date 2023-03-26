import { Boton, HLogo, PostHeader } from "../../components/index";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import Color from "../../constants/color";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useSelector } from 'react-redux';

export default function DetailsActivities({  navigation }) {

  const Task = useSelector((state) => state.task.selected);
console.log(Task)


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
    flex: 1,
  },

  containerInPut: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
  },

  containerInPut2: {
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

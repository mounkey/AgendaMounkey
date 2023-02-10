import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Boton } from "../../components/index";
import Color from "../../constanst/color";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function DetailsActivities({ route, navigation }) {
  const { name, reason, detail, date } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInPut}>
        <Text style={styles.text}>Detalles</Text>
        <Text style={styles.text}>Nombre: {name}</Text>
        <Text style={styles.text}>Razon: {reason}</Text>
        <Text style={styles.text}>Detalle: {detail}</Text>
        <Text style={styles.text}>Fecha: {date}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

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
      <View style={styles.containerInPut2}>
        <Boton title="Regresar" bkcolor={Color.primary} color={Color.white} onPress={() => navigation.goBack()} />
      </View>
      <Image style={styles.foot} source={require("../../../assets/pielogo.png")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

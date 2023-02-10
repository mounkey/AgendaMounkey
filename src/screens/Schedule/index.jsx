import { StyleSheet, Text, View } from "react-native";

import { Boton } from "../../components/index";
import Color from "../../constanst/color";
import React from "react";

const Schedule = ({ navigation }) => {

  //onPressDetalle
  const onPressDetalle = () =>{
    navigation.navigate('Detalle');
  }

  return (
    <View style = {style.container}>
      <Text>Schedule</Text>
      <Boton title="Detalle" bkcolor={Color.primary} color={Color.white} onPress={onPressDetalle} />
    </View>
  );
}

export default Schedule;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});


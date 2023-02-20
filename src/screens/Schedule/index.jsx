import { Boton, HLogo, PostHeaderPlus } from "../../components/index";
import { StyleSheet, Text, View } from "react-native";

import Color from "../../constants/color";
import React from "react";

const Schedule = ({ navigation }) => {

  //onPressDetalle
  const onPressDetalle = () =>{
    navigation.navigate('Detalle');
  }

  //onPressNew
  const onPressNew = () =>{
    navigation.navigate('APersona');
  }

  return (
    <View style = {style.container}>
      <HLogo />
      <PostHeaderPlus section="Sch" onPress={onPressNew} />
      <Boton title="Detalle" bkcolor={Color.primary} color={Color.white} onPress={onPressDetalle} />
    </View>
  );
}

export default Schedule;

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Color.white,
    height: "100%",
  }
});


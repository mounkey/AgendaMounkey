import { StyleSheet, Text, View } from "react-native";

import { Boton } from "../../components/index";
import Color from "../../constanst/color";
import React from "react";

const AddPersons = ( {navigation} ) => {

  //onPressAddAdress
  const onPressAddAdress = () => {
    navigation.navigate('ADireccion');
  };

  //onPressAdPhoto
  const onPressAdPhoto = () => {
    navigation.navigate('AFoto');
  };
  return (
    <View style={style.container}>
      <Text>AddPersons</Text>
      <Boton title="Direccion" bkcolor={Color.primary} color={Color.white} onPress={onPressAddAdress} />
      <Boton title="Fotos" bkcolor={Color.primary} color={Color.white} onPress={onPressAdPhoto} />
    </View>
  );
}

export default AddPersons;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

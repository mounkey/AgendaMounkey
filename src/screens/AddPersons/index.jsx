import { Boton, PhotoButton, PostHeader } from "../../components/index";
import { StyleSheet, Text, View } from "react-native";

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

  //onPressCamera
  const onPressCamera = () => {
    navigation.navigate('AFoto');
  }

  const PhotoHead = require("../../../assets/Logo2.png");
  return (
    <View style={style.container}>
      <PhotoButton onPress={onPressCamera} img={PhotoHead}></PhotoButton>
      <Text>AddAdress</Text>
      <PostHeader section="Per" />
      <Boton title="Direccion" bkcolor={Color.primary} color={Color.white} onPress={onPressAddAdress} />
      <Boton title="Fotos" bkcolor={Color.primary} color={Color.white} onPress={onPressAdPhoto} />
    </View>
  );
}

export default AddPersons;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  }
});

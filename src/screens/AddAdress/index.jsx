import { PhotoButton, PostHeader } from "../../components";
import { StyleSheet, Text, View } from "react-native";

import Color from "../../constanst/color";
import React from "react";

const AddAdress = ( {navigation}) => {

  //onPressCamera
  const onPressCamera = () => {
    navigation.navigate('AFoto');
  }

  const PhotoHead = require("../../../assets/Logo2.png");

  return (
    <View style={style.container}>
      <PhotoButton onPress= {onPressCamera} img= {PhotoHead}></PhotoButton>
      <Text>AddAdress</Text>
      <PostHeader section="Per" />
    </View>
  );
}

export default AddAdress;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  }
});

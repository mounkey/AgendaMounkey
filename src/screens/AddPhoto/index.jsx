import { Boton, PhotoButton, PostHeader } from "../../components/index";
import { StyleSheet, Text, View } from "react-native";

import Color from "../../constants/color";
import React from "react";

const AddPhoto = () => {

  //onPressCamera
  const onPressCamera = () => {
    navigation.navigate('AFoto');
  }
  const PhotoHead = require("../../../assets/Logo2.png");
  return (
    <View style={style.container}>
      <PhotoButton onPress={onPressCamera} img={PhotoHead}></PhotoButton>
      <Text>AddPhoto</Text>
      <PostHeader section="Per" />
    </View>
  );
}

export default AddPhoto;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  }
});

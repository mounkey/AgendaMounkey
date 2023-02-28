import { Boton, ImageSelector, PhotoButton, PostHeader } from "../../components/index";
import React,  { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Color from "../../constants/color";
import { Dispatch } from "react-redux";
import { addImage } from '../../store/toolkit/image.slice';

const AddPhoto = ({ navigation }) => {
  const [image, setImagen] = useState("");

  //onPressCamera
  const onPressCamera = () => {
    navigation.navigate('AFoto');
  }

  //onmPress onImage
  const onImage = (uri) => {
    setImagen(uri)
  }

  const PhotoHead = require("../../../assets/Logo2.png");
  return (
    <View style={style.container}>
      <PhotoButton onPress={onPressCamera} img={PhotoHead}></PhotoButton>
      <Text>AddPhoto</Text>
      <PostHeader section="Per" />
      <ImageSelector onImage={onImage} />
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

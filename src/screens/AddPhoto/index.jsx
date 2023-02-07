import { StyleSheet, Text, View } from "react-native";

import React from "react";

const AddPhoto = () => {
  return (
    <View style={style.container}>
      <Text>AddPhoto</Text>
    </View>
  );
}

export default AddPhoto;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

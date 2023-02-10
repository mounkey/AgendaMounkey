import { StyleSheet, Text, View } from "react-native";

import React from "react";

const AddAdress = ( {navigation}) => {
  return (
    <View style={style.container}>
      <Text>AddAdress</Text>
    </View>
  );
}

export default AddAdress;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

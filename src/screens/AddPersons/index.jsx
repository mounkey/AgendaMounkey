import { StyleSheet, Text, View } from "react-native";

import React from "react";

const AddPersons = () => {
  return (
    <View style={style.container}>
      <Text>AddPersons</Text>
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

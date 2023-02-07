import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Schedule = () => {
  return (
    <View style = {style.container}>
      <Text>Schedule</Text>
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


import { Image, View } from "react-native";

import React from "react";
import { styles } from "./style";

export default function headLogo() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/Logo2.png")} />
    </View>
  );
}

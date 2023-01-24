import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

export default function Boton({ onPress, title, bkcolor, color }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bkcolor }]} onPress={onPress}>
      <Text style={[styles.textButton, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

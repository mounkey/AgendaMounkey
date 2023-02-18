import { Image, View } from "react-native";

import React from "react";
import { styles } from "./style";

export default function PostHeader({section}){
  let imagen
  switch(section){
    case "Act":
      imagen = require("../../../assets/Activities.png");
      break;
    case "Per":
      imagen = require("../../../assets/Persons.png");
      break;
    case "Sch":
      imagen = require("../../../assets/Schedule.png");
      break;
    default:
      imagen = require("../../../assets/Logo2.png");
      break;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={imagen} />
    </View>
  );
}

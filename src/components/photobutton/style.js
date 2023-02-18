import Color from '../../constanst/color';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.White,

  },
  photo:{
    marginTop:15,
    width: 140,
    height: 140,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: Color.primary,
  },
  camera:{
    marginTop:-45,
    marginLeft: 120,
    marginBottom: 15,


  }
});

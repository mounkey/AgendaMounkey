import Color from '../../constants/color';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    width:'100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Color.primary,
    borderWidth: 1,
  },

  text: {
    fontSize: 18,
    color: Color.primary,
    fontFamily: 'Montserrat-Regular',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

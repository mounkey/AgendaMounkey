import Color from '../../constants/color';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: '67%',
    backgroundColor: Color.white,
  },

  imageContainer: {
    width:'80%',
    height: 200,
    marginBottom: 10,
    marginTop:20,
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

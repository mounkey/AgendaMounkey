import Color from '../../constants/color';
import { StyleSheet } from 'react-native';

export const styles= StyleSheet.create({

  button: {
    borderWidth: 1,
    borderColor: Color.white,
    borderRadius: 15,
    width: '90%',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  textButton: {
    fontSize: 20,
  }
})

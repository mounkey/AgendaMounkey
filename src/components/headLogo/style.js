import Color from '../../constants/color';
import { StyleSheet } from 'react-native';

export const styles= StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 80 ,
    height: 160,
    resizeMode: 'contain',
  },
});

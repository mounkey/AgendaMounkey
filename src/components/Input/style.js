import { StyleSheet } from 'react-native';

import Color from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: Color.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Montserrat-Regular',
    marginBottom: 10,
  },
  message: {
    marginVertical: 5,
  },
  helperText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Color.white,
  },
});
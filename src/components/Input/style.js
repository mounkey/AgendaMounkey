import { StyleSheet } from 'react-native';

import { Color } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Monserrat-Regular',
    marginBottom: 10,
  },
  message: {
    marginVertical: 5,
  },
  helperText: {
    fontSize: 12,
    fontFamily: 'Monserrat-Regular',
    color: Color.white,
  },
});
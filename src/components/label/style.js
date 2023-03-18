import { StyleSheet } from 'react-native';

import  Colors from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginVertical: 5,
    color: Colors.white,
  },
  sublabel: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.gray,
    marginVertical: 5,
  },
});

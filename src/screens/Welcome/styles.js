import { StyleSheet } from 'react-native';

import Colors from '../../constants/color';

export const styles = StyleSheet.create({
  keybordContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: Colors.primary,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderRadius: 5,
    minHeight: 330,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginVertical: 8,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  promptButton: {
    width: '100%',
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.white,
  },
});

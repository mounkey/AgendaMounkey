import { Boton, Input } from '../../components';
import { Button, Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import { UPDATED_FORM, onInputChange } from '../../utils/forms';
import { signIn, signUp } from '../../store/actions';
/* eslint-disable no-case-declarations */
import { useReducer, useState } from 'react';

import Colors  from '../../constants/color';
import { styles } from './styles';
import { useDispatch } from 'react-redux';

const initialState = {
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const Welcome = ({ navigation }) => {

  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? 'Login' : 'Register';
  const message = isLogin ? "Don't have an account?" : 'Already have an account?';
  const messageButton = isLogin ? 'Login' : 'Register';

  const onHandlerSubmit = () => {
    const {password, email} = formState;
    dispatch(
      isLogin
        ? signIn(formState.email.value, formState.password.value)
        : signUp(formState.email.value, formState.password.value)
    );
  };

  const onHandlerInputChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  // on PressTasks
  const onPresstaks = () => {
    navigation.navigate('Mostrar');
  }



  return (
    <KeyboardAvoidingView
      style={styles.keybordContainer}
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      enabled>
      <View style={styles.container}>
        <Image source={require('../../../assets/logos.png')} style={styles.logo} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Input
            placeholder="enter your email"
            placeholderTextColor={Colors.gray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandlerInputChange(text, 'email')}
            value={formState.email.value}
            hasError={formState.email.hasError}
            error={formState.email.error}
            touched={formState.email.touched}
            label="Email"
            labelStyle={styles.label}
          />
          <Input
            placeholder="enter your password"
            placeholderTextColor={Colors.gray}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandlerInputChange(text, 'password')}
            value={formState.password.value}
            hasError={formState.password.hasError}
            error={formState.password.error}
            touched={formState.password.touched}
            label="Password"
            labelStyle={styles.label}
          />
          <View style={styles.buttonContainer}>
            <Button title={messageButton} color={Colors.primary} onPress={onHandlerSubmit} />
            <View style={styles.prompt}>
              <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.promptMessage}>{message}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image source={require('../../../assets/pielogo.png')} style={styles.foot} />
        <Boton title="Tareas" bkcolor={Colors.primary} color={Colors.white} onPress={onPresstaks} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Welcome;

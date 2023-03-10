import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import AppNavigator from "./navigation/"
import Color from './constants/color';
import Inicio from "./screens/Welcome";
import { Provider } from 'react-redux';
import { init } from './db/index';
import store from "./store/index";
import { useFonts } from 'expo-font';

init ()
.then(() => {
  console.log('Initialized database');
})
.catch(err => {
  console.log('Initializing db failed.');
  console.log(err);
});


export default function index() {

  //useState
  const [selected, setSelected] = useState(false);

  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
  });

  if(!loaded){
    return(
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={Color.letter} />
      </View>
    )
  }

  const onSelectedChangePage =(select) => {
    setSelected(select)
  };

  if (!selected) {
    content = <Inicio onSelectedChangePage={onSelectedChangePage}  />;
  }
  else {
    content = <Actividades onSelectedChangePage={onSelectedChangePage}  />;
  }

  return(
    <View style={styles.container}>
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
      <StatusBar style="auto" />
    </View>
  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    fontFamily: 'Montserrat-Regular',
  },

});


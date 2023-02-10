import { ADireccion, AFoto, APersona } from '../../screens/index';

import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AddNavigator = () => {
  return(
    <Stack.Navigator initialRouteName = 'APersona'>
      <Stack.Screen name='APersona'  component={APersona} option={{ title:'Agregar Persona'}}/>
      <Stack.Screen name ='ADireccion' component={ADireccion} option={{title: 'Agregar Direccion'}}/>
      <Stack.Screen name ='AFoto' component={AFoto} option={{title: 'Agregar Foto'}}/>
    </Stack.Navigator>
  )
}

export default AddNavigator;

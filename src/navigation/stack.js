import { Actividades, Detalles, Inicio } from '../../src/screens/index';

import Color from '../constanst/color';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator initialRouteName = 'Inicio'>
      <Stack.Screen name='Inicio'  component={Inicio} options={{ title:'Bienvenido'}}/>
      <Stack.Screen name='Activades' component={Actividades} options={{ title: 'Actividades' }} />
      <Stack.Screen name='Detalle' component={Detalles} options={{ title: 'Detalle - Act.' }} />
    </Stack.Navigator>
  )
}

export default StackNavigator;

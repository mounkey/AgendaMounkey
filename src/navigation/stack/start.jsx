import  {Actividades, Detalles, Inicio, Mostrar} from '../../screens/index';

import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StartNavigator = () => {
  return(
    <Stack.Navigator initialRouteName = 'Mostrar'>
      <Stack.Screen name ='Inicio' component={Inicio} option={{title: 'Inicio'}}/>
      <Stack.Screen name ='Mostrar' component={Mostrar} option={{title: 'Actividades'}}/>
      <Stack.Screen name='Actividades' component={Actividades} option={{ title: 'Actividades' }} />
      <Stack.Screen name='Detalles' component={Detalles} option={{ title: 'Detalles' }} />
    </Stack.Navigator>
  )
}

export default StartNavigator;

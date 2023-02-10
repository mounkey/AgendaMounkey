import  {Inicio, Mostrar} from '../../screens/index';

import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StartNavigator = () => {
  return(
    <Stack.Navigator initialRouteName = 'Inicio'>
      <Stack.Screen name='Inicio'  component={Inicio} option={{ title:'Bienvenido'}}/>
      <Stack.Screen name ='Mostrar' component={Mostrar} option={{title: 'Actividades'}}/>
    </Stack.Navigator>
  )
}

export default StartNavigator;

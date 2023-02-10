import { Actividades, Detalles } from '../../screens/index';

import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ActivityNavigator = () => {
  return(
    <Stack.Navigator initialRouteName = 'Actividades'>
      <Stack.Screen name='Actividades'  component={Actividades} option={{ title:'Actividades'}}/>
      <Stack.Screen name ='Detalles' component={Detalles} option={{title: 'Detalles'}}/>
    </Stack.Navigator>
  )
}

export default ActivityNavigator;

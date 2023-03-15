import {Agenda, DetalleAgenda} from '../../screens/index';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ScheduleNavigator = () => {
  return(
    <Stack.Navigator initialRouteName='Agenda'>
      <Stack.Screen name='Agenda' component={Agenda} option={{title:"Agenda"}} />
      <Stack.Screen name='Detalle' component={DetalleAgenda} Option={{ title:'Detalle Agenda'}} />
    </Stack.Navigator>
  )
}

export default ScheduleNavigator;

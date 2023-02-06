import { Actividades, Detalles, Inicio } from '../screens';

import Color from '../constanst/color';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from 'react';

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

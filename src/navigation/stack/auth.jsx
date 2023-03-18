import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Inicio} from '../../screens/index';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={Inicio} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

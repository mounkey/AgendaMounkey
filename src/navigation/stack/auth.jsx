import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Welcome} from '../../screens/index';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={Welcome} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

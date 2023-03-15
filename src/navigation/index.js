import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import TabsNavigator from './tabs';
import AuthNavigator from './stack/auth';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import TabsNavigator from './tabs';
import AuthNavigator from './stack/auth';

const AppNavigator = () => {
  const userId = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      {userId ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

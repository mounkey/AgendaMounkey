import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackNavigation from './stack'

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default AppNavigator

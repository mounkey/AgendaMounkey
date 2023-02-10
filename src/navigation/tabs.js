import ActivityNavigator from './stack/activity';
import AddNavigator from './stack/add';
import Color from '../constanst/color';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import ScheduleNavigator from './stack/schedule';
import StartNavigation from './stack/start';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const TabsNavigation = () => {
  return(
    <BottomTab.Navigator
      initialRouteName="StartTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Montserrat-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: Color.primary,
        tabBarInactiveTintColor: Color.gray,
    }}>

      <BottomTab.Screen
        name="StartTab"
        component={StartNavigation}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={22} color={Color.primary} />
          ),
        }}
      />


      <BottomTab.Screen
        name="AddTab"
        component={AddNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-add" size={22} color={Color.primary} />
          ),
        }}
      />


      <BottomTab.Screen
        name="ScheduleTab"
        component={ScheduleNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="book-outline" size={22} color={Color.primary} />
          ),
        }}
      />

      <BottomTab.Screen
        name="ActivityTab"
        component={ActivityNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="checkmark-done-outline" size={22} color={Color.primary} />
          ),
        }}
      />





    </BottomTab.Navigator>
  );
};

export default TabsNavigation;

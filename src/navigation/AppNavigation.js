import React from 'react';
import {TimerScreen} from '../screens/pomodoro-timer/timer';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigationScreen from './BottomTabNavigation';
import {Congrats} from '../screens/pomodoro-timer/congrats';
import LoginScreen from '../screens/auth/loginScreen';


const Stack = createStackNavigator();

export default AppNavigation = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{
      headerShown: false,
      animation: 'fade_from_bottom',
      contentStyle: {
        backgroundColor: 'red',
      },
    }}>
    <Stack.Screen
      name="app"
      component={BottomNavigationScreen}
      options={{
        headerShown: false,
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      }}
    />

    <Stack.Screen
      name="Timer"
      component={TimerScreen}
      options={{
        headerShown: false,
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      }}
    />
    <Stack.Screen
      name="Congrats"
      component={Congrats}
      options={{
        headerShown: false,
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        headerShown: false,
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
      }}
    />
  </Stack.Navigator>
);


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen'
import InputScreen from '../screens/InputScreen'
import DoneScreen from '../screens/DoneScreen'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Done" component={DoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = { headerShown: false }


export default Navigation;

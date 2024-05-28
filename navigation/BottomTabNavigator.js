import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cat from '../src/Cat';
import RadioButton from '../src/RadioButton'


const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cat" component={Cat} />
        <Tab.Screen name="RadioButton" component={RadioButton} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator
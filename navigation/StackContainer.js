import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cat from '../src/Cat';
import ModalUseh from '../src/ModalUseh';
import StatusBarUSe from '../src/StatusBarUse';

const Stack = createNativeStackNavigator();

const StackContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StatusBarUSe"
          component={StatusBarUSe}
        //   options={{title: 'Welcome'}}
        />
        <Stack.Screen name="ModalUseh" component={ModalUseh} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackContainer;
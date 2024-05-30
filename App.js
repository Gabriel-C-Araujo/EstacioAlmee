import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from './calendar.js'
import Login from './login.js';
import EmojiPopup from './telapopup.js'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Calendario" component={CalendarScreen} />
        <Stack.Screen name="Popup" component={EmojiPopup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

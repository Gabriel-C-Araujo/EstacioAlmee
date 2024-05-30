import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from './calendar.js'

// Tela Inicial
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Primeira Tela</Text>
      <Button
        title="Ir para a segunda tela"
        onPress={() => navigation.navigate('Calendario')}
      />
    </View>
  );
}

// Segunda Tela
function SecondScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Segunda Tela</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Calendario" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

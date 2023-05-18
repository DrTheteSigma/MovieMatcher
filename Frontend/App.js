import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import CreateRoom from './src/screens/CreateRoom';
import Menu from './src/screens/Menu';
import JoinRoom from './src/screens/JoinRoom';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateRoom" component={CreateRoom}  />
        <Stack.Screen name="Menu" component={Menu}  />
        <Stack.Screen name="JoinRoom" component={JoinRoom}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

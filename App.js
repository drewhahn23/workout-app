import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Homepage from './assets/components/Homepage';
import Tracker from './assets/components/Tracker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Workouts from './assets/components/Workouts';
import { Platform, TouchableOpacity } from 'react-native-web';
// import { useEffect } from 'react/cjs/react.production.min';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Homepage}
        />
        <Stack.Screen
          name='Tracker'
          component={Tracker}
        />
        <Stack.Screen
          name='Workouts'
          component={Workouts}
        />

      </Stack.Navigator>
      
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  testing: {
    flex: 1,
  },
});

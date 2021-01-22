// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './Components/auth/landing';
import { LightMode, DarkMode } from './Theme/Colors';

const Stack = createStackNavigator();

function App() {
  const colorScheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkMode : LightMode}>
        <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default App;
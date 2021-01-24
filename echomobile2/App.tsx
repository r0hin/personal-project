// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { auth } from './Components/auth/Firebase';
import AuthUserContext, { AuthUserProvider } from './Components/auth/AuthUserProvider';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './Components/auth/Landing';
import Home from './Components/app/Home';
import Loader from './Components/auth/Loading';
import { LightMode, DarkMode } from './Theme/Colors';
import { useContext, useEffect, useState } from 'react';

const Stack = createStackNavigator();

function App() {
  const {user, setUser} = React.useContext(AuthUserContext)
  const [isLoading, setIsLoading] = useState(true);
  const [showHome, setShowHome] = useState(true);
  const colorScheme = useColorScheme();
  useEffect(() => {
    setIsLoading(true);
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async authUser => {
      try {
        console.log('Signed in CHANGED!');
        console.log(authUser)
        await (authUser ? setUser(authUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
      console.log(authUser);
      if (!authUser) {
        setShowHome(false)
      }
      else {
        // Show home page
        setShowHome(true)
        console.log('Showing HOme');
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <Text>Loading!</Text>
    )
  }

  if (showHome) {
    return (
      <AuthUserProvider>
        <PaperProvider>
          <AppearanceProvider>
            <NavigationContainer theme={colorScheme === 'dark' ? DarkMode : LightMode}>
              <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
              </Stack.Navigator>
            </NavigationContainer>
          </AppearanceProvider>
        </PaperProvider>
      </AuthUserProvider>
    );
  }

  return (
    <AuthUserProvider>
      <PaperProvider>
        <AppearanceProvider>
          <NavigationContainer theme={colorScheme === 'dark' ? DarkMode : LightMode}>
            <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
              <Stack.Screen name="Landing" component={Landing} />
            </Stack.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      </PaperProvider>
    </AuthUserProvider>
  );

  
}

export default App;
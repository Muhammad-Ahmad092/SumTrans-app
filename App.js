import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import OpeningPage from './Frontend/OpeningPage';
import WelcomePage from './Frontend/welcomePage';
import HomePage from './Frontend/HomePage';
import TranslatePage from './Frontend/TranslatePage';
import SummaizePage from './Frontend/SummarizePage';

const Stack = createStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts({
    'Charm-Bold': require('./assets/fonts/Charm-Bold.ttf'),
    'Charm-Regular': require('./assets/fonts/Charm-Regular.ttf'),
  });

  // Show AppLoading while fonts are being loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpeningPage">
        <Stack.Screen 
          name="OpeningPage" 
          component={OpeningPage} 
          options={{ headerShown: false }}
        />
       <Stack.Screen
        name="WelcomePage"
        component={WelcomePage}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="TranslatePage"
        component={TranslatePage}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="SummarizePage"
        component={SummaizePage}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

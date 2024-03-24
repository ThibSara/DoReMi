import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/onBoardingScreens/WelcomeScreen';
import ExpandingScreen from '../screens/onBoardingScreens/ExpandingScreen';
import Survey from '../screens/onBoardingScreens/Survey';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoadingScreen" screenOptions={{animationEnabled:false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Survey" component={Survey} options={{ headerShown: false }} />
      <Stack.Screen name="ExpandingScreen" component={ExpandingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

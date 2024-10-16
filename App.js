import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Login from './components/Login';
import TinderSwipe from './components/TinderSwipe';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Tab Navigator separately
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ tabBarLabel: 'Home!' }}
      />
      <Tab.Screen
        name="TinderSwipe"
        component={TinderSwipe}
        options={{ tabBarLabel: 'Home!' }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        {/* Include the Tab Navigator inside the Stack */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }} // You can control header visibility here
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    fontSize: 37,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    backgroundColor: 'red',
    paddingInline: 20,
    paddingBlock: 20,
  },
  full: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Define each screen here */}
        <Stack.Screen
          name="Login"
          component={Login}  // Use 'component' instead of 'components'
          options={{ title: 'Login' }}  // Use options for custom titles, etc.
        />
        <Stack.Screen
          name="Home"
          component={Home}  // Fix 'components' to 'component'
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// const Home = () => {
//   return (
//     <View>
//       <Text>
//         Home
//       </Text>
//     </View>
//   )
// }

// const Login = () => {
//   return (
//     <View>
//       <Text>Login</Text>
//     </View>
//   )
// }

export default App

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
  }
})
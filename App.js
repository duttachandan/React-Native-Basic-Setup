import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Login from "./components/Login";
import ScrollHorizontal from "./components/ScrollHorizontal";

<<<<<<< HEAD
import TextInputCom from './components/TextInputCom';
import SimpleForm from './components/SimpleForm';
import Listing from './components/Listing';
import SectionListing from './components/SectionListing';
import VirtualizedListing from './components/VirtualizedList';
import ScrollViewData from './components/ScrollViewData';
import ModalCom from './components/ModalCom';
import Layout from './components/layout';
import ChaiCode from './components/ChaiCode';
import ElevatedCards from './components/ElevatedCards';
=======
import TextInputCom from "./components/TextInputCom";
import SimpleForm from "./components/SimpleForm";
import Listing from "./components/Listing";
import SectionListing from "./components/SectionListing";
import VirtualizedListing from "./components/VirtualizedList";
import ScrollViewData from "./components/ScrollViewData";
import ModalCom from "./components/ModalCom";
import Layout from "./components/layout";
import ChaiCode from "./components/ChaiCode";
>>>>>>> 2e2ca84000b06cb527a6b3316c0d38a19f42a08e

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Define each screen here */}

        <Stack.Screen
          name="Home"
          component={Home} // Fix 'components' to 'component'
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Login"
          component={Login} // Use 'component' instead of 'components'
          options={{
            title: "Login",
            headerShown: false,
            statusBarStyle: "light", // for iOS
            statusBarColor: "#6D53F4",
            statusBarStyle:"light",
          }} // Use options for custom titles, etc.
        />

        <Stack.Screen
          name="Listing"
          component={Listing}
          options={{ title: "Listing" }}
        />

        <Stack.Screen
          name="ScrollViewData"
          component={ScrollViewData}
          options={{ title: "ScrollViewData" }}
        />

        <Stack.Screen
          name="VirtualizedListing"
          component={VirtualizedListing}
          options={{ title: "VirtualizedListing" }}
        />
        <Stack.Screen
          name="ModalCom"
          component={ModalCom}
          options={{ title: "ModalCom" }}
        />
        <Stack.Screen
          name="ElevatedCards"
          component={ElevatedCards}
          options={{ title: 'ElevatedCards' }}
        />

        <Stack.Screen
          name="SectionListing"
          component={SectionListing}
          options={{ title: "SectionListing" }}
        />

        <Stack.Screen
          name="SimpleForm"
          component={SimpleForm}
          options={{ title: "SimpleForm" }}
        />

        <Stack.Screen
          name="TextInput"
          component={TextInputCom}
          options={{ title: "TextInputCom" }}
        />

        <Stack.Screen
          name="Layout"
          component={Layout}
          options={{ title: "Layout" }}
        />

        <Stack.Screen
          name="ChaiCode"
          component={ChaiCode}
          options={{ title: "ChaiCode" }}
        />
        <Stack.Screen
          name="HorizontalSlider"
          component={ScrollHorizontal}
          options={{ title: "HorizontalSlider" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    fontSize: 37,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Helvetica",
    backgroundColor: "red",
    paddingInline: 20,
    paddingBlock: 20,
  },
  full: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

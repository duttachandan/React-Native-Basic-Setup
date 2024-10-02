import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { home } from "../Styles/Home";
import Header from "./ios/Header.ios";

const Home = (props) => {
  return (
    <>
      <View>
        <Header />
      </View>
      <View className="flex-1 justify-center items-center bg-white">
        <Text style={styles.textBox}>Home</Text>
        <Text style={styles.textBox}>Home</Text>
        <Text style={styles.textBox}>Home</Text>
        <Text style={home.header}>Home</Text>
      </View>

      <View>
        <Button
          color={"orange"}
          title="ChaiCode"
          onPress={() => props.navigation.navigate("ChaiCode")}
        />
        <Button
          title="Layout"
          onPress={() => props.navigation.navigate("Layout")}
        />
        <Button
          title="ModalCom"
          onPress={() => props.navigation.navigate("ModalCom")}
        />

        <Button
          title={"ScrollViewData"}
          onPress={() => props.navigation.navigate("ScrollViewData")}
        />

        <Button
          color={"red"}
          title="virtualized List"
          onPress={() => props.navigation.navigate("VirtualizedListing")}
        />

        <Button
          color={"green"}
          title="Listing"
          onPress={() => props.navigation.navigate("Listing")}
        />

        <Button
          color={"orange"}
          title="Section Listing"
          onPress={() => props.navigation.navigate("SectionListing")}
        />

        <Button
          title="SimpleForm"
          onPress={() => props.navigation.navigate("SimpleForm")}
        />

        <Button
          title="Login"
          onPress={() => props.navigation.navigate("Login")}
        />
        <Button
          title="Go to Scroll"
          color="red"
          onPress={() => props.navigation.navigate("HorizontalSlider")}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  textBox: {
    color: "white",
    fontSize: 18,
    backgroundColor: "blue",
    padding: 15,
    marginTop: 10,
    textAlignVertical: "center",
    textAlign: "center",
  },
});

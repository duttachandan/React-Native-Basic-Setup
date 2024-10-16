import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View
      style={styles.container}
      className="flex-1 bg-black justify-center items-center">
      <Text style={styles.text}>Login Page</Text>
      {/* Correct use of Button with 'title' prop */}
      <Button
        title="Go to Home" // Add 'title' for the button's text
        color="blue" // Use color prop for button color
        onPress={() => props.navigation.navigate('Home')}
      />
      <Text style={styles.text}>Login Page</Text>
      <Button
        title="Go to Tinder Swipe" // Add 'title' for the button's text
        color="blue" // Use color prop for button color
        onPress={() => props.navigation.navigate('Tinderswipe')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

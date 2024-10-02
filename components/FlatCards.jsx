import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text> Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Light Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Light blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text> Red</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text> Red</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text> Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'lightgreen',
  },
  cardThree: {
    backgroundColor: 'lightblue',
  },
});

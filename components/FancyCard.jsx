import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending place</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBHvzXPv4MU8YwfAUMtvRKECsS0jq2ltjwg&s',
          }}
          style={styles.image}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLable}>Agra</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra, Uttar Pradesh, India.
          </Text>
          <Text style={styles.cardFooter}>Date: 29-2-24</Text>
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
  card: {
    width: 350,
    height: 360,
    padding: 10,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  image: {
    height: 180,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: 'gray',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLable: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  cardDescription: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
    flexWrap: 'wrap',
  },
  cardFooter: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 3,
  },
});

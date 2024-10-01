import React from 'react';
import { FlatList, StyleSheet, Text, useColorScheme, View } from 'react-native';

const Listing = () => {
  const data = [
    {
      id: 1,
      name: 'Nihal',
      email: 'nihal@gmail.com',
    },
    {
      id: 2,
      name: 'Samrat',
      email: 'Samrat@gmail.com',
    },
    {
      id: 3,
      name: 'Pritam',
      email: 'Pritam@gmail.com',
    },
    {
      id: 4,
      name: 'Chandan',
      email: 'Chandan@gmail.com',
    },
  ];

  const renderItem = ({ item }) => <Text> {item.name} </Text>;

  //Get the color scheme either light or dark
  const colorScheme = useColorScheme();

  return (
    <>
      <View
        style={
          colorScheme === 'light' ? styles.containerDark : styles.containerLight
        }>
        <Text
          style={{
            fontSize: 18,
            padding: 10,
            color: colorScheme === 'light' ? 'black' : 'white',
          }}>
          Flat List :
        </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <UserData item={item} colorScheme={colorScheme} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        {/* {data.map((item) => (
          <Text key={item.id}> {item.name} </Text>
        ))} */}
      </View>
    </>
  );
};

const UserData = ({ item, colorScheme }) => {
  return (
    <View
      style={[
        styles.userContainer,
        colorScheme === 'dark' ? styles.userDark : styles.userLight,
      ]}>
      <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}>
        Name: {item.name}{' '}
      </Text>
      <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}>
        Email: {item.email}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLight: {
    backgroundColor: 'white',
  },
  containerDark: {
    backgroundColor: 'black',
  },
  userContainer: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userLight: {
    backgroundColor: '#f9f9f9',
  },
  userDark: {
    backgroundColor: '#333',
  },
});
export default Listing;

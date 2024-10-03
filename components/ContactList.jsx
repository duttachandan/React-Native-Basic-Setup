import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contact = [
    {
      id: '5b2eee0a8fdd5b71c8148490',
      age: 29,
      name: 'Campos York',
      gender: 'male',
      company: 'AVENETRO',
      email: 'camposyork@avenetro.com',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: '5b2eee0a9cd29e820c10edad',
      age: 20,
      name: 'Esperanza Boone',
      gender: 'female',
      company: 'COSMETEX',
      email: 'esperanzaboone@cosmetex.com',
      photo: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
    {
      id: '5b2eee0a582ba867abbd7ce7',
      age: 39,
      name: 'Holden Barry',
      gender: 'male',
      company: 'CODAX',
      email: 'holdenbarry@codax.com',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      id: '5b2eee0afe5f471c63fa7acf',
      age: 22,
      name: 'Daniels Barlow',
      gender: 'male',
      company: 'OPTICOM',
      email: 'danielsbarlow@opticom.com',
      photo: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
      id: '5b2eee0af534aab9ece2f890',
      age: 23,
      name: 'Leigh Burris',
      gender: 'female',
      company: 'KINETICUT',
      email: 'leighburris@kineticut.com',
      photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
      id: '5b2eee0ac42f319d1c980d93',
      age: 35,
      name: 'Floyd Little',
      gender: 'male',
      company: 'FURNAFIX',
      email: 'floydlittle@furnafix.com',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contact.map((item) => (
          <View key={item.id} style={[styles.card, styles.elevated]}>
            <Image style={styles.photo} source={{ uri: item.photo }} />
            <View style={styles.data}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    paddingHorizontal: 50,
    marginBottom: 40,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 18,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#8d3daf',
  },
  elevated: {
    elevation: 1,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
  },
  data: {},
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'lightgray',
  },
});

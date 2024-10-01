import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Layout = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textBox}>Nihal </Text>
        <Text style={styles.textBox}>Pritam</Text>
        <Text style={styles.textBox}>Chandan</Text>
        <Text style={styles.textBox}>Tanish</Text>
        <Text style={styles.textBox}>Adity</Text>
        <Text style={styles.textBox}>Saptarshi</Text>
        <Text style={styles.textBox}>Prajwal</Text>
        <Text style={styles.textBox}>Shreejay</Text>
        <Text style={styles.textBox}>Ashish</Text>
        <Text style={styles.textBox}>Shradha</Text>
        <Text style={styles.textBox}>Snehal</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Shahin</Text>
        <Text style={styles.textBox}>Nihal </Text>
        <Text style={styles.textBox}>Pritam</Text>
        <Text style={styles.textBox}>Chandan</Text>
        <Text style={styles.textBox}>Tanish</Text>
        <Text style={styles.textBox}>Adity</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textBox: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default Layout;

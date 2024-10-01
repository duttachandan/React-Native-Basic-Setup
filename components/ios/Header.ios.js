import { Platform, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.content}>Header </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    color: Platform.select({
      ios: 'red',
      android: 'blue',
    }),
    backgroundColor: Platform.select({
      ios: 'blue',
      android: 'red',
    }),
  },
});

export default Header;

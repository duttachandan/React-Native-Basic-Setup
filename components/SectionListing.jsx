import { SectionList, StyleSheet, Text, View } from 'react-native';

const SectionListing = () => {
  const sections = [
    {
      title: 'Section 1',
      data: ['item1', 'Item2'],
    },
    {
      title: 'Section 2',
      data: ['item1', 'Item2'],
    },
    {
      title: 'Section 3',
      data: ['item1', 'Item2'],
    },
  ];

  const Item = ({ text }) => <Text style={styles.items}> {text} </Text>;

  const SectionHeader = ({ title }) => (
    <Text style={styles.header}> {title} </Text>
  );

  return (
    <>
      <View>
        <Text>SectionListing</Text>
      </View>
      <View>
        <SectionList
          sections={sections}
          renderItem={({ item }) => <Item text={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <SectionHeader title={title} />
          )}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
  },
  items: {
    fontSize: 12,
    backgroundColor: 'lightgray',
    padding: 12,
    margin: 5,
    color: 'black',
    fontWeight: '600',
  },
});

export default SectionListing;

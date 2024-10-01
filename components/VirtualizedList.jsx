import {
  SectionList,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from 'react-native';

const VirtualizedListing = () => {
  const data = [
    { id: 1, name: 'John' },
    {
      id: 2,
      name: 'Nihal',
    },
  ];

  const getItemCount = (data) => data.length;
  const getItem = (data, index) => data[index];

  const renderItem = ({ item }) => <Text> {item.name} </Text>;

  return (
    <>
      <View>
        <Text>SectionListing</Text>
      </View>
      <View>
        <VirtualizedList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </>
  );
};

export default VirtualizedListing;

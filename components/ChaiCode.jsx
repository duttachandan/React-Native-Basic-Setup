import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FlatCards from './FlatCards';
import ElevatedCards from './ElevatedCards';
import FancyCard from './FancyCard';

const ChaiCode = () => {
  return (
    <SafeAreaView>
      <ScrollView alwaysBounceHorizontal={true}>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChaiCode;

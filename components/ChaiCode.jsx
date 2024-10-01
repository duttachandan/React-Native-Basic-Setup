import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FlatCards from './FlatCards';

const ChaiCode = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChaiCode;

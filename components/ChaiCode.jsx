import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FlatCards from './FlatCards';
import ElevatedCards from './ElevatedCards';
import FancyCard from './FancyCard';
import ActionCard from './ActionCard';
import ContactList from './ContactList';

const ChaiCode = () => {
  return (
    <SafeAreaView>
      <ScrollView alwaysBounceHorizontal={true}>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChaiCode;

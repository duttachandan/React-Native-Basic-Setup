import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";
import React from "react";

const ScrollHorizontal = () => {
  return (
    <View className="bg-black w-[100vw] h-[100vh]">
      <Text
        className="w-[100vw] h-[fit-content] 
      text-center py-2 font-bold text-2xl text-white"
      >
        ScrollHorizontal
      </Text>

      <ScrollView horizontal={true} className="w-[100vw] h-[150px] px-2 mb-5">
        <View
          className="w-[100px] h-[100px] mx-2
        flex-1 justify-center items-center bg-red-500 rounded-xl"
        >
          <Text className="text-white font-bold">Tap Red</Text>
        </View>
        <View
          className="w-[100px] h-[100px] mx-2
        flex-1 justify-center items-center bg-blue-500 rounded-xl"
        >
          <Text className="text-white font-bold">Tap blue</Text>
        </View>
        <View
          className="w-[100px] h-[100px] mx-2
        flex-1 justify-center items-center bg-green-500 rounded-xl"
        >
          <Text className="text-white font-bold">Tap Green</Text>
        </View>
        <View
          className="w-[100px] h-[100px] mx-2
        flex-1 justify-center items-center bg-white rounded-xl"
        >
          <Text className="text-black font-bold">Tap white</Text>
        </View>
        <View
          className="w-[100px] h-[100px] mx-2
        flex-1 justify-center items-center bg-white rounded-xl"
        >
          <Text className="text-black font-bold">Tap white</Text>
        </View>
        <View
          className="w-[100px] h-[100px] mx-2
        flex-1 justify-center items-center bg-white rounded-xl"
        >
          <Text className="text-black font-bold">Tap white</Text>
        </View>
        <View
          className="w-[100px] h-[100px] mx-2
        flex-1 justify-center items-center bg-white rounded-xl"
        >
          <Text className="text-black font-bold">Tap white</Text>
        </View>
      </ScrollView>
      <ScrollView className="w-[100vw] h-[fit-content] bg-black px-2">
        <View
          className="w-[100vw] h-[100px] mx-2 my-2
    flex-1 justify-center items-center bg-red-500 rounded-xl"
        >
          <Text className="text-white font-bold">Tap Red</Text>
        </View>
        <View
          className="w-[100vw] h-[100px] mx-2 my-2
    flex-1 justify-center items-center bg-blue-500 rounded-xl"
        >
          <Text className="text-white font-bold">Tap blue</Text>
        </View>
        <View
          className="w-[100vw] h-[100px] mx-2 my-2
    flex-1 justify-center items-center bg-green-500 rounded-xl"
        >
          <Text className="text-white font-bold">Tap Green</Text>
        </View>
        <View
          className="w-[100vw] h-[100px] mx-2 my-2
    flex-1 justify-center items-center bg-white rounded-xl"
        >
          <Text className="text-black font-bold">Tap white</Text>
        </View>
        <View
          className="w-[100vw] h-[100px] mx-2 my-2
    flex-1 justify-center items-center bg-white rounded-xl"
        >
          <Text className="text-black font-bold">Tap white</Text>
        </View>
        <View
          className="w-[100vw] h-[100px] mx-2 my-2
    flex-1 justify-center items-center bg-white rounded-xl"
        >
          <Text className="text-black font-bold">Tap white</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScrollHorizontal;

const styles = StyleSheet.create({});

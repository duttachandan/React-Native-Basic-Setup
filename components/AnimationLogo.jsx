import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect } from "react";

const AnimationLogo = () => {
  useEffect(() => {
    Animated.timing(fadeAnim,{
        toValue:1,
        duration:2000,
        useNativeDriver:true,
    }).start();
  },[fadeAnim]);

  return (
    <View>
      <Text>AnimationLogo</Text>
    </View>
  );
};

export default AnimationLogo;

const styles = StyleSheet.create({});

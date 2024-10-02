import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
} from "react-native"; // Import Button
import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState('');

  const handleEmail = (text) => {
    setEmail(text);
  };

  return (
    <>
      <StatusBar className="bg-[#6D53F4]" />
      <SafeAreaView className="flex-1 bg-[#6D53F4] text-white">
        <View className="h-[100%] w-[100%]">
          <View className=" h-[15%] flex-col justify-center items-center">
            <Text
              className="text-white text-center text-3xl 
            font-mono italic fw-lighter"
            >
              Login Page
            </Text>
          </View>
          <View className="h-[85%] w-full bg-white rounded-xl">
            <View
              className="h-[20%] w-full flex-row 
              justify-center items-center"
            >
              <Text
                className="text-4xl font-bold text-black 
                italic font-sans"
              >
                Log In
              </Text>
            </View>
            <KeyboardAvoidingView behavior="position">
              <View
                className="h-[80%] w-full flex-row 
                justify-center items-center gap-2 "
              >
                <View className="w-[80%] h-[20%]">
                  <Text className="text-start">Email Address:</Text>
                  <TextInput
                    className="w-full bg-gray-100 
                    text-black rounded-xl px-3"
                    placeholder="Enter your email address"
                    onChangeText={handleEmail}
                    value={email}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

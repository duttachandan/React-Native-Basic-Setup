import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const TextInputCom = () => {
  const [text, settext] = useState('');

  const handleTextChange = (e) => {
    settext(e);
  };

  const clearText = () => {
    settext('');
  };

  return (
    <>
      <View>
        <Text>TextInput Area : {text}</Text>
      </View>
      <View className="px-3 pt-6 flex-1 justify-content-center align-middle">
        <TextInput
          className="border bg-slate-200 rounded-md text-xl border-red-500   w-100  h-20 "
          placeholder="Enter text here"
          value={text}
          onChangeText={handleTextChange}
        />
        <View className="mt-3">
          <Button title="Clear" onPress={clearText} />
        </View>
      </View>
    </>
  );
};

export default TextInputCom;

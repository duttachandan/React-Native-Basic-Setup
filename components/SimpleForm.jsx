import React, { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState();

  const handleName = (text) => {
    setName(text);
  };

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    setShow(name);
    setShow(email);
    setShow(password);
  };

  const handleClear = () => {
    setName(' ');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <KeyboardAvoidingView behavior="position">
        <View>
          <View>
            <Text>Enter UserName: </Text>
            <TextInput
              style={styles.textBox}
              placeholder="Enter User  "
              onChangeText={(text) => handleName(text)}
              value={name}
            />
          </View>
          <View>
            <Text>Enter Email: </Text>

            <TextInput
              style={styles.textBox}
              placeholder="Enter age"
              onChangeText={(text) => handleEmail(text)}
              value={email}
            />
          </View>
          <View>
            <Text>Enter Password: </Text>
            <TextInput
              style={styles.textBox}
              placeholder="Enter City"
              onChangeText={(text) => handlePassword(text)}
              secureTextEntry={true}
              value={password}
            />
          </View>

          <View className="bg-black text-white mt-10">
            <Button color={'green'} title="Submit" onPress={handleSubmit} />
          </View>
          <View className="mt-5     ">
            <Button color={'red'} title="Clear" onPress={handleClear} />
          </View>

          <View>
            {show ? (
              <View>
                <Text> {name} </Text>
                <Text> {email} </Text>
                <Text> {password} </Text>
              </View>
            ) : null}
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  textBox: {
    fontSize: 12,
    padding: 10,
    backgroundColor: 'lightgray',
    marginTop: 10,
  },
});

export default SimpleForm;

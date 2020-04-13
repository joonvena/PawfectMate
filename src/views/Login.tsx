import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {View, Text, TextInput, Button} from 'react-native';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(username, password);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 15,
      }}>
      <TextInput
        placeholder="Username"
        accessibilityLabel="username"
        onChangeText={text => setUsername(text)}
        style={{
          borderColor: '#CCC',
          borderWidth: 1,
          paddingLeft: 15,
          marginBottom: 20,
        }}
      />
      <TextInput
        placeholder="Password"
        accessibilityLabel="password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={{
          borderColor: '#CCC',
          borderWidth: 1,
          paddingLeft: 15,
          marginBottom: 10,
        }}
      />
      <Button
        accessibilityLabel="submit_login"
        title="Login"
        color="#bcaaa4"
        onPress={handleLogin}
      />
      <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 12}}>
        Don't have account?{' '}
        <Text style={{color: '#bcaaa4'}} onPress={() => console.log('test')}>
          Register
        </Text>
      </Text>
    </View>
  );
};

export default Login;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] });
    } else {
      Alert.alert('Invalid Credentials', 'Please check your username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ExpenseTracker</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 4,
  },
});

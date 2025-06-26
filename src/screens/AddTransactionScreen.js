import React, { useState, useContext } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TransactionsContext } from '../contexts/TransactionsContext';

export default function AddTransactionScreen({ navigation }) {
  const { addTransaction } = useContext(TransactionsContext);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Credit');
  const [category, setCategory] = useState('Shopping');

  const handleAdd = () => {
    if (!date || !amount || !description || !location) {
      Alert.alert('Missing Fields', 'Please fill out all fields.');
      return;
    }
    const newTransaction = {
      id: Date.now(),
      date,
      amount: parseFloat(amount),
      description,
      location,
      type,
      category,
    };
    addTransaction(newTransaction);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Date" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.input} />
      <Text>Type:</Text>
      <Picker selectedValue={type} onValueChange={setType} style={styles.picker}>
        <Picker.Item label="Credit" value="Credit" />
        <Picker.Item label="Debit" value="Debit" />
        <Picker.Item label="Refund" value="Refund" />
      </Picker>
      <Text>Category:</Text>
      <Picker selectedValue={category} onValueChange={setCategory} style={styles.picker}>
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Utility" value="Utility" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <Button title="Add Transaction" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 4,
  },
  picker: {
    width: '100%',
    marginBottom: 12,
  },
});
import React, { useContext } from 'react';
import { View, Button, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TransactionsContext } from '../contexts/TransactionsContext';
import TransactionItem from '../components/TransactionItem';

export default function DashboardScreen({ navigation }) {
  const { transactions } = useContext(TransactionsContext);

  return (
    <View style={styles.container}>
      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { transaction: item })}>
            <TransactionItem transaction={item} />
          </TouchableOpacity>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  list: {
    marginTop: 20,
    width: '100%',
  },
});
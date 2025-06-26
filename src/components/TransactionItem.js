import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionItem({ transaction }) {
  return (
    <View style={styles.item}>
      <Text>{transaction.description} - ${transaction.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    width: '100%',
  },
});